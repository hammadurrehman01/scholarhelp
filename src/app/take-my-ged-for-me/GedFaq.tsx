"use client"
import { SwordsIcon } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'

function GedFaq() {
    const [openIndex, setOpenIndex] = useState(0);
    const [sOpen,setIsOpen] = useState(false)

    const questions = [
        { question: `Can you help me to take my GED Test Online?`,
         answer: 'Taking my classes online.com is an amazing service to the students community. We are not only here to help you take your GED test online but also assist you in various kinds of examinations.' },

        { question: `Are you guaranteed to get passing marks on my GED Exam?`,
         answer: `Absolutely! We will support each student during his academic life. In addition, we have a money-back guarantee in case we do not achieve the expected marks; this protects you from any loss.` },

        { question: `Do you have any idea that the GED test is harder than high school?`,
         answer: 'A standard high school exam is often seen to be more difficult than the GED. However, This depends on your preparation and how well you understand the concept.' },

        { question: `Why should I choose you for my GED test preparation?`,
         answer: 'Choosing us for your GED test preparation will expertly coach and guide you through mock tests and quality study materials to enable you to prepare and do best in your exams. ' },

        { question: ` How do I Register For The GED Test?`,
         answer: `First,Create your GED account. Fill out the form and select your preferred subject, time and date according to your availability. By submitting the examination fee you will be eligible to attend the GED test.` },

        { question: `What things should I take in the examination hall or is the calculator allowed in the test?`,
         answer: `You’re allowed to bring pens, pencils and a simple calculator. However, Scientific calculator, Digital gadgets are not permitted at the examination center.` },
    ];

    

    const toggleAccordion = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div className='mx-auto max-w-screen-xl mt-20 mb-10'>
    <h3 className='text-center text-lg lg:text-3xl font-bold dark:text-zinc-100 text-indigo-950 '>
    Frequently Asked Questions </h3>

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

export default GedFaq