"use client"
import { SwordsIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

function TmtFaq() {
    const [openIndex, setOpenIndex] = useState(0);
    const [sOpen,setIsOpen] = useState(false)

    const questions = [
        { question: `What is a passing TEAS test score?`,
         answer: 'There is no such passing criteria for TEAS as each nursing schools requirements are different. However, competitive marks are from 70% 75% on an expert level of preparedness.' },

        { question: `What Happened after I failed the TEAS test?`,
         answer: 'You can attempt the TEAS test 3 times in a year, allowing you to gain excessive marks to make a difference in your exam test. However, Your intended healthcare program or nursing school has the last word on how many tries you can make.' },

        { question: `Is the English TEAS test difficult?`,
         answer: 'It depends on how prepared you are for your TEAS exams. However, If youre a non-native english speaker then you’d probably find some issues with it. Don’t worry! Our online podium is the best search to help you in your exam.' },

        { question: `Is the Nursing teas exam easy or difficult?`,
         answer: 'The TEAS test wont be the easiest exam youve ever taken. Generally depending upon your exam preparation and how strong your concepts are. Get our expert assistance and ace this exam.' },

        { question: `What is the cost of appearing in the TEAS test?`,
         answer: `The examination fees vary from location to location. However, Generally the price of the TEAS exams are ranging from 100$ - 120$.` },
    ];

    

    const toggleAccordion = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div className='mx-auto max-w-screen-xl mt-20 mb-10'>
    <h2 className='text-center text-xl lg:text-4xl font-extrabold dark:text-zinc-100 text-indigo-950 '>Frequently Asked Questions
    </h2>
    <h3 className='text-center text-lg lg:text-3xl font-bold dark:text-zinc-100 text-indigo-950 '>The list of questions that are frequently asked by Our Clients
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

export default TmtFaq