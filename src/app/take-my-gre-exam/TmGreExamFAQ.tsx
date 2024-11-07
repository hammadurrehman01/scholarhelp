"use client"
import { SwordsIcon } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'

function TmGreExamFAQ() {
    const [openIndex, setOpenIndex] = useState(0);
    const [sOpen,setIsOpen] = useState(false)

    const questions = [
        { question: `Can I take the GRE test online? Do you have any assistance?`,
         answer: 'Absolutely! You can take the GRE online from home. Takemyclassesonline can be one of the finest website to help you with their services. The instructors are highly certified and professional which helps students to assist them in their exams and throughout their educational journey.' },

        { question: `What is the procedure to take the GRE Exam? `,
         answer: 'The following steps involved to register for the GRE Exam. Create an account, Select time and date, enter your personal information and pay the examination fee to enroll in the exam. By following these easy steps you’re allowed to take the GRE test as per your required date and time.' },

        { question: `Should I take the GRE Test from home?`,
         answer: 'Taking the GRE Test from home will be beneficial, the fact that it will save your traveling time and also help you to assist in your exams. Getting exam takers for hire will benefit you to get higher marks.' },

        { question: `How much does it cost to register for the GRE Test?`,
         answer: 'The Cost may vary subject to subject, Averaging around 150$ to 220$ you can check it from the GRE website.So, by availing our services you’ll be able to get the GRE exam test help and with much more assistance. So, hire someone to take my exam will definitely get you some profits in earning good grades and better marks.' },

        { question: `Are there any disability accommodations in the GRE Exam?`,
         answer: `Candidates can choose between a refreshable braille device or JAWS in order to take the GRE General Test. The test centers of the US and other countries provide this assistance for such candidates on their websites as well.` },

        { question: `Is there any chance of Retaking the GRE General Test?`,
         answer: `You can retake if you don't like your scores! ETS permits retaking the test every 21 days, but up to five times a year. So this really provides you with an excellent opportunity to improve your scores, so make sure that you are fully prepared for each retake.` },
    ];

    

    const toggleAccordion = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div className='mx-auto max-w-screen-xl mt-20 mb-10'>
    <h2 className='text-center text-xl lg:text-4xl font-extrabold dark:text-zinc-100 text-indigo-950 '>Frequently Asked Questions
    </h2>
    <h3 className='text-center text-lg lg:text-3xl font-bold dark:text-zinc-100 text-indigo-950 '>Frequently Asked Questions from Our Clients
    </h3>

    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5'>
    <div  data-aos="zoom-in-down" className=''>
            <div  className='flex items-center justify-center sm:pb-8 sticky top-0'>
                <Image loading='eager' className='mt-20 rounded-2xl' src="/imgs/faq_section_1.webp" width={600} height={600} alt='about-faq-bg'></Image>
            </div>
        </div>

        <div className=''>

        {questions.map((item, index) => (
            <div  data-aos="flip-down" className="md:pt-6 pt-8 "  key={index}>
                <h4 
                    className="cursor-pointer py-6 px-4 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-medium flex justify-between group bg-gradient-to-l from-sky-200 via-purple-200 to-zinc-300 text-zinc-800 transition ease-in duration-150 delay-100 "
                    onClick={() => toggleAccordion(index) }  >
                    {item.question}
                    <SwordsIcon className='  group-hover:rotate-180 group-hover:stroke-gray-700 transition ease-in duration-200 delay-100 '/>
                </h4>
                {openIndex === index && (
                    <p className="  py-4 px-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-base bg-gradient-to-l from-sky-200 via-purple-200 to-zinc-300 text-zinc-800">
                        {item.answer}
                    </p>
                )}
            </div>
        ))}
        </div>
    </div>
</div>
  )
}

export default TmGreExamFAQ