"use client"
import { SwordsIcon } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'

function TGmatFAQ() {
    const [openIndex, setOpenIndex] = useState(0);
    const [sOpen,setIsOpen] = useState(false)

    const questions = [
        { question: `Exactly how many times can I take the GMAT Exam?`,
         answer: 'How many attempts am I allowed to take the GMAT? Your five (5) GMAT exam online test attempts within a rolling 12-month period and your eight (8) total lifetime restrictions will be determined by all of your efforts on the GMAT exam, across all editions, whether they are taken online or in person.' },

        { question: `What is the Focus Edition of the GMAT exam?`,
         answer: `The GMAT Focus edition is shorter than the original GMAT. Furthermore, The new test format has three 45-minute sections: Data Insights, Verbal Reasoning and Quantitative Reasoning. Resulting the total of 2 hours and 15 minutes.` },

        { question: `Can I cancel my GMAT score, or have it not been reported earlier?`,
         answer: 'You cannot reverse your GMAT result while canceling your score can be a solution if you think that you’ve not done better in the test. Depending on your test center. You have 72 hours after the exam to change your score if you accept it. It could take up to 24 hours. If you do so after leaving the test place, you will be charged $25.' },

        { question: `Is there any check-in procedure to attempt the GMAT test?`,
         answer: 'Absolutely! It is the part of the GMAT examination, where you’re required to answer the questions regarding the information that you’ve put in the form. ' },

        { question: ` Can we leave during the GMAT test?`,
         answer: `Significant breaks are given to you to relax yet it is not allowed to go during the exam. Should an emergency arise, please notify the proctor and it will be taken care of for you. As much as possible, plan your time so that you will minimize your need to leave the testing room.` },

        { question: `Should I use a calculator during the test?`,
         answer: `No, calculators are not permitted, but you will have an on-screen calculator you can use for this section. For all other sections, you'll be doing calculations longhand.` },
    ];

    

    const toggleAccordion = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div className='mx-auto max-w-screen-xl mt-20 mb-10'>
    <h2 className='text-center text-xl lg:text-4xl font-extrabold dark:text-zinc-100 text-indigo-950 '>
    Frequently Asked Questions</h2>
    <h3 className='text-center text-lg lg:text-3xl font-bold dark:text-zinc-100 text-indigo-950 '>
    The List of Frequently Asked Questions by Our Clients</h3>

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

export default TGmatFAQ