"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BannerForm from "./BannerForm";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import SkeletonComp from "@/app/components/common/SkeletonComp";
import SkeletonForm from "@/app/components/common/SkeletonForm";


interface ParentProps {
  homeData: any
}

export const HeroSection = ({homeData}: ParentProps) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    Aos.init({
      duration: 800,
      disable: "mobile",
      offset: 100,
    });
  }, [inView]);

  return (
    <>
      <div
        ref={ref}
        className="m-h-[500px] border-b-2 border-indigo-200 -z-10 h-full w-full bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100 dark:-z-10 dark:m-h-[500px] dark:w-full dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto max-w-screen-xl py-10 ">
          <div className="py-20 px-5 md:pt-36">
            {!homeData ? (
              <SkeletonComp />
            ) : (
              <>
                <h1 className=" text-center py-2 lg:text-left dark:text-zinc-100 text-zinc-900 text-lg sm:text-4xl font-extrabold ">
                  {homeData?.heading}
                </h1>
                <h2 className="text-center mt-2 lg:text-left dark:text-zinc-100 text-zinc-900  sm:text-2xl font-medium">
                  {homeData?.sub_heading}
                </h2>
                <div className="flex flex-col lg:flex-row items-center xl:w-[50vw] gap-4 sm:mt-2 mt-6">
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/imgs/instructor.png"}
                      width={64}
                      height={64}
                      alt="instructor"
                    ></Image>
                    <h3 className="text-center dark:text-zinc-100 text-zinc-900 text-sm md:text-base font-medium">
                      {homeData?.service_values?.one}
                    </h3>
                    <div className="hidden lg:block w-[2px] h-20 bg-muted-foreground "></div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/imgs/record.png"}
                      width={64}
                      height={64}
                      alt="record"
                    ></Image>
                    <h3 className="text-center dark:text-zinc-100 text-zinc-900 text-sm md:text-base font-medium">
                      {homeData?.service_values?.two}
                    </h3>
                    <div className="hidden lg:block w-[2px] h-20 bg-muted-foreground "></div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/imgs/affordable.png"}
                      width={64}
                      height={64}
                      alt="phd"
                    ></Image>
                    <h3 className="ml-1 dark:text-zinc-100 text-zinc-900 text-sm md:text-base font-medium">
                      {homeData?.service_values?.three}
                    </h3>
                    <div className="hidden lg:block w-[2px] h-16 bg-muted-foreground/0 "></div>
                  </div>
                </div>
                <CtaButtons
                  ordernow={homeData?.buttons?.one}
                  chatOn={homeData?.buttons?.two}
                />
              </>
            )}
          </div>

          <div className="pb-5 px-5 md:pt-24">
            {!homeData ? (
              <SkeletonForm />
            ) : (
              <BannerForm formData={homeData?.formData} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import BannerForm from "./BannerForm";
// import Link from "next/link";
// import { useInView } from "react-intersection-observer";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import axios from "axios";
// import SkeletonComp from "@/app/components/common/SkeletonComp";
// import SkeletonForm from "@/app/components/common/SkeletonForm";
// import Loader from "@/app/components/common/Loader";

// export const HeroSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   });

//   const [homeData, setHomeData] = useState<any>();

//   useEffect(() => {
//     Aos.init({
//       duration: 800,
//       disable: "mobile",
//       offset: 100,
//     });
//   }, [inView]);

//   useEffect(() => {
//     const fetchHomeData = async () => {
//       try {
//         const response = await axios.get<any>(
//           "http://localhost:3000/api/fetch-homeData"
//         );
//         setHomeData(response.data.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchHomeData();
//   }, []);

//   return (
//     <>
//       <div
//         ref={ref}
//         className="m-h-[500px] border-b-2 border-indigo-200 -z-10 h-full w-full bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100 dark:-z-10 dark:m-h-[500px] dark:w-full dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
//       >
//         <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto max-w-screen-xl py-10 ">
//           <div className="py-20 px-5 md:pt-36">
//             <h1 className=" text-center py-2 lg:text-left dark:text-zinc-100 text-zinc-900 text-lg sm:text-4xl font-extrabold ">
//               {homeData?.heading}
//             </h1>
//             <h2 className="text-center mt-2 lg:text-left dark:text-zinc-100 text-zinc-900  sm:text-2xl font-medium">
//               {homeData?.sub_heading}
//             </h2>
//             <div className="flex flex-col lg:flex-row items-center xl:w-[50vw] gap-4 sm:mt-2 mt-6">
//               <div className="flex items-center gap-1">
//                 <Image
//                   src={"/imgs/instructor.png"}
//                   width={64}
//                   height={64}
//                   alt="instructor"
//                 ></Image>
//                 <h3 className="text-center dark:text-zinc-100 text-zinc-900 text-sm md:text-base font-medium">
//                   {homeData?.service_values?.one}
//                 </h3>
//                 <div className="hidden lg:block w-[2px] h-20 bg-muted-foreground "></div>
//               </div>
//               <div className="flex items-center gap-1">
//                 <Image
//                   src={"/imgs/record.png"}
//                   width={64}
//                   height={64}
//                   alt="record"
//                 ></Image>
//                 <h3 className="text-center dark:text-zinc-100 text-zinc-900 text-sm md:text-base font-medium">
//                   {homeData?.service_values?.two}
//                 </h3>
//                 <div className="hidden lg:block w-[2px] h-20 bg-muted-foreground "></div>
//               </div>
//               <div className="flex items-center gap-1">
//                 <Image
//                   src={"/imgs/affordable.png"}
//                   width={64}
//                   height={64}
//                   alt="phd"
//                 ></Image>
//                 <h3 className="ml-1 dark:text-zinc-100 text-zinc-900 text-sm md:text-base font-medium">
//                   {homeData?.service_values?.three}
//                 </h3>
//                 <div className="hidden lg:block w-[2px] h-16 bg-muted-foreground/0 "></div>
//               </div>
//             </div>
//             <CtaButtons
//               ordernow={homeData?.buttons?.one}
//               chatOn={homeData?.buttons?.two}
//             />
//           </div>

//           <div className="pb-5 px-5 md:pt-24">
//             <BannerForm formData={homeData?.formData} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

interface Props {
  ordernow?: string;
  chatOn?: string;
}

export function CtaButtons({ ordernow, chatOn }: Props) {
  return (
    <div className="flex flex-col md:flex-row  items-center mt-5 scale-90 md:scale-100">
      <Link href={"/order-now"}>
        <div
          className="flex justify-center items-center border-[2px] border-zinc-400 bg-zinc-100
    transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-2 px-4 rounded-xl  m-2"
        >
          <Image src={"/imgs/order.png"} width={35} height={35} alt="order" />
          <button className="font-medium ml-2 text-zinc-800 md:text-base text-sm ">
            {ordernow}
          </button>
        </div>
      </Link>

      <Link
        href={
          "https://wa.me/447418374184?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="flex justify-center items-center border-[2px] dark:bg-zinc-100 bg-zinc-800
transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-3 px-4 rounded-xl m-2"
        >
          <Image
            src={"/imgs/whatsapp.png"}
            width={25}
            height={25}
            alt="whatsapp"
          />
          <button className="font-medium ml-2 text-background md:text-base text-sm">
            {chatOn}
          </button>
        </div>
      </Link>
    </div>
  );
}

export function CtaChat() {
  const openChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center mt-5 scale-90 md:scale-100">
      <div
        className="flex justify-center items-center border-[2px] border-zinc-400 bg-indigo-500 transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-2 px-4 rounded-xl m-2 cursor-pointer"
        onClick={openChat}
      >
        <Image src="/imgs/chat.png" width={32} height={32} alt="chat" />
        <button className="font-medium ml-2 text-zinc-100 md:text-base text-sm">
          Chat Now
        </button>
      </div>

      <Link
        href="https://wa.me/447418374184?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex justify-center items-center border-[2px] dark:bg-zinc-100 bg-zinc-800 transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-3 px-4 rounded-xl m-2">
          <Image
            src="/imgs/whatsapp.png"
            width={25}
            height={25}
            alt="whatsapp"
          />
          <button className="font-medium ml-2 text-background md:text-base text-sm">
            Chat On Whatsapp
          </button>
        </div>
      </Link>
    </div>
  );
}
