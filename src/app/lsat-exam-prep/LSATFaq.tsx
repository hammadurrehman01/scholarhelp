"use client"
import { SwordsIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

function LSATFaq() {
    const [openIndex, setOpenIndex] = useState(0);
    const [sOpen,setIsOpen] = useState(false)

    const questions = [
        { question: `How long does the LSAT take?`,
         answer: 'The standard of the LSAT exam is approximately 3 hours. Dividing your time between these portions might help you handle your test more efficiently.' },

        { question: `How much does it cost to take the LSAT exam?`,
         answer: `The LSAT exam costs between $200 and $250 and varies by region. You can also vary it from the LSAT website, excluding any other additional requirements.` },

        { question: `How do I apply for the LSAT exam?`,
         answer: 'Create your LSAT account. Fill out the form by selecting the dates and location according to your needs. However, Make sure to reserve your examination seat by paying the examination fees.' },

        { question: `Is the bar exam more difficult than the LSAT?`,
         answer: 'Both examinations have great importance, but the BAR exam is more difficult than the LSAT exam because bar exams require a more detailed study of legal theory and practical applications.' },

        { question: ` Do you have the LSAT 2025 exam date sheet or list?`,
         answer: `The LSAT examinations are offered throughout the year, so you may register and select days that work best for you.` },

    ];

    

    const toggleAccordion = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div className='mx-auto max-w-screen-xl mt-20 mb-10'>
    <h2 className='text-center text-xl lg:text-4xl font-extrabold dark:text-zinc-100 text-indigo-950 '>
    Frequently Asked Questions</h2>
    <h3 className='text-center text-lg lg:text-3xl font-bold dark:text-zinc-100 text-indigo-950 '>
    A list of frequently asked questions by our clients.</h3>

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

export default LSATFaq