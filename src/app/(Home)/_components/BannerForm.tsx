"use client";
import { sendEmails } from "@/app/(backend)/action/formAction";
import { DatePickerDemo } from "@/components/ui/datepicker";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {
  formData: any;
}

function BannerForm({ formData }: Props) {
  const [date, setDate] = React.useState<Date>();
  const [activeButton, setActiveButton] = useState<string | null>("writing");
  const [wordCount, setWordCount] = useState<number>(250);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [selectedQuestions, setSelectedQuestions] = useState<string>("");
  const [showSubject, setShowSubject] = useState<boolean>(false);
  const [showQuestions, setShowQuestions] = useState<boolean>(false);
  const [pending, setPending] = useState(false);
  const router = useRouter(); // Initialize the router

  // New state for form data
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handleIncrement = () => {
    setWordCount((prevCount) => prevCount + 250);
  };

  const handleDecrement = () => {
    setWordCount((prevCount) => (prevCount > 0 ? prevCount - 250 : 0));
  };

  const options: number[] = Array.from({ length: 50 }, (_, i) => i + 1);

  const handleServiceChange = (e: any) => {
    const value = e.target.value;
    setSelectedService(value);

    setShowSubject(
      [
        "Assignment/ Coursework",
        "Essay",
        "Dissertation / Thesis / Proposal",
        "Editing / Proofreading",
        "Resume / CV",
        "Question And Answers",
      ].includes(value)
    );

    setShowQuestions(value === "Question And Answers");
  };

  // Form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    const data = {
      date: date?.toDateString(),
      email,
      phone,
      activeButton,
      wordCount: wordCount.toString(),
      selectedService,
      selectedSubject,
      selectedQuestions,
    };

    function convertToFormData(data: any): FormData {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (typeof value === "string" || value instanceof Blob) {
          formData.append(key, value);
        } else {
          console.warn(`Value for ${key} is not a string or Blob:`, value);
        }
      });

      return formData;
    }

    try {
      const formData = convertToFormData(data);
      const response = await sendEmails(formData); // Assume sendEmails is a server action
      if (response?.success) {
        router.push("/thanks");
      } else {
        console.log("Error: " + response?.error);
      }
    } catch (error) {
      console.error("Form submission failed", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="xl:ml-28 pb-16 bg-muted shadow-2xl rounded-xl lg:w-[480px] dark:bg-gradient-to-r from-purple-950 via-violet-950 to-zinc-950 ">
        <div className="flex justify-center items-center lg:-translate-y-4    -translate-y-4">
          <div className=" w-1/2 shadow-2xl rounded rounded-tl-2xl rounded-br-2xl bg-indigo-600 py-3 ">
            <div className="text-center font-medium text-zinc-100 text-sm md:text-base  ">
              {formData?.topBar}
            </div>
          </div>
        </div>
        <div className="text-center font-bold text-lg md:text-2xl mt-2 px-3  ">
          {formData?.heading}
        </div>
        <div className="flex justify-center items-center mt-3">
          <button
            type="button"
            className={`px-5 py-3 md:text-base text-sm transition ease-in duration-200 delay-200 border-[2px] rounded rounded-tl-lg rounded-bl-lg ${
              activeButton === "writing"
                ? "bg-blue-600 text-white"
                : " bg-zinc-200 text-zinc-800"
            }`}
            onClick={() => handleClick("writing")}
          >
            {formData?.tabs?.one}
          </button>
          <button
            type="button"
            className={`px-5 py-3 md:text-base text-sm transition ease-in duration-200 delay-200 border-[2px] ${
              activeButton === "rewriting"
                ? "bg-blue-600 text-white"
                : "bg-zinc-200 text-zinc-800"
            }`}
            onClick={() => handleClick("rewriting")}
          >
            {formData?.tabs?.two}
          </button>
          <button
            type="button"
            className={`px-5 py-3 md:text-base text-sm transition ease-in duration-200 delay-200 border-[2px]  rounded rounded-tr-lg rounded-br-lg  ${
              activeButton === "editing"
                ? "bg-blue-600 text-white"
                : "bg-zinc-200 text-zinc-800"
            }`}
            onClick={() => handleClick("editing")}
          >
            {formData?.tabs?.three}
          </button>
        </div>

        <div className="pt-4 w-full px-3">
          <input
            className="rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="pt-2 w-full px-3">
          <input
            className="rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base"
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Your Phone Number"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2 px-3">
          <div className={`col-span-${showSubject ? "1" : "2"}`}>
            <select
              className="rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base"
              name="service"
              required
              onChange={handleServiceChange}
              aria-label="service"
            >
              <option value="option">Services</option>
              <option value="Assignment/ Coursework">
                Assignment/ Coursework
              </option>
              <option value="Essay">Essay</option>
              <option value="Dissertation / Thesis / Proposal">
                Dissertation / Thesis / Proposal
              </option>
              <option value="Question And Answers">Question And Answers</option>
              <option value="SOP">SOP</option>
              <option value="Editing / Proofreading">
                Editing / Proofreading
              </option>
              <option value="PPT">PPT</option>
              <option value="Resume / CV">Resume / CV</option>
              <option value="Others / Custom Orders">
                Others / Custom Orders
              </option>
            </select>
          </div>

          {showSubject && (
            <div>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base"
                name="subject"
                required
                aria-label="subject"
              >
                <option disabled value="option">
                  Subject
                </option>
                <option value="Hospitality">Hospitality</option>
                <option value="Management">Management</option>
                <option value="Project Cost Management">
                  Project Cost Management
                </option>
                <option value="Law">Law</option>
                <option value="Finance">Finance</option>
                <option value="Auditing">Auditing</option>
                <option value="Research Methodology">
                  Research Methodology
                </option>
                <option value="Economics - Theory">Economics - Theory</option>
                <option value="Economics - Calculation">
                  Economics - Calculation
                </option>
                <option value="Arts and Humanities">Arts and Humanities</option>
                <option value="Psychology">Psychology</option>
                <option value="Health & Social Care">
                  Health & Social Care
                </option>
                <option value="Nursing">Nursing</option>
                <option value="Medical">Medical</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Physiology">Physiology</option>
                <option value="Travel & Tourism">Travel & Tourism</option>
                <option value="Biotechnology">Biotechnology</option>
                <option value="Biology">Biology</option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Computer Science">Computer Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Programming / Coding">
                  Programming / Coding
                </option>
                <option value="Statistics">Statistics</option>
                <option value="ANOVA">ANOVA</option>
                <option value="SPSS">SPSS</option>
                <option value="NVIVO">NVIVO</option>
                <option value="SAS">SAS</option>
                <option value="Eviews">Eviews</option>
                <option value="Accounts">Accounts</option>
                <option value="Education">Education</option>
                <option value="Architecture">Architecture</option>
                <option value="Geology">Geology</option>
                <option value="English Literature">English Literature</option>
                <option value="Mechanics">Mechanics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Physics">Physics</option>
                <option value="Science">Science</option>
                <option value="Engineering">Engineering</option>
              </select>
            </div>
          )}
        </div>

        {showQuestions && (
          <div className=" w-full pt-2 px-3 ">
            <select
              className="rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base"
              name="question"
              required
              aria-label="question"
              value={selectedQuestions}
              onChange={(e) => setSelectedQuestions(e.target.value)}
            >
              <option value="">Select Questions</option>
              {options.map((number) => (
                <option key={number} value={`${number} Questions`}>
                  {number} Questions
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="grid grid-cols-2 gap-2 pt-2 px-3">
          <div className="">
            <div className="flex justify-center items-center gap-2 bg-muted dark:bg-zinc-900 rounded-lg border-[2px] w-full py-[6px] px-3 outline-none">
              <button
                type="button"
                onClick={handleDecrement}
                style={{ padding: "5px 10px" }}
              >
                -
              </button>
              <span className="text-sm lg:text-base">{wordCount} Words</span>
              <button
                type="button"
                onClick={handleIncrement}
                style={{ padding: "5px 10px" }}
              >
                +
              </button>
            </div>
          </div>

          <div className="">
            <DatePickerDemo date={date} setDate={setDate} />
          </div>
        </div>

        <div className="flex justify-center items-center mt-5">
          <button
            type="submit"
            disabled={pending}
            className="flex items-center lg:text-base text-sm px-5 py-3 rounded-xl bg-indigo-600 text-white hover:shadow-xl hover:scale-105 transition ease-in duration-200 delay-200"
          >
            {pending ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />{" "}
                <p>Submitting...</p>
              </>
            ) : (
              formData?.tabs?.three
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

export default BannerForm;
