"use client"
import { SwordsIcon } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'

function HesiFaq() {
    const [openIndex, setOpenIndex] = useState(0);
    const [sOpen,setIsOpen] = useState(false)

    const questions = [
        { question: `Do you have any experts who can give me preparation for the HESI A2 exam?`,
         answer: 'Takingmyclassesonline.com is providing its prime service to every student to seek advice from experts and get better marks in their HESI exams.' },

        { question: `Is 10 days enough time to prepare for the HESI test?`,
         answer: `In general, the preparation for any exams are determined by your concept of the subject. However, a general subject requires a minimum of 1 week of preparation for the exam.` },

        { question: `How many attempts have the HESI test?`,
         answer: 'You can attempt the HESI exams 2 times in a period of two years. However, Some institutions allow up to three attempts for the HESI exam.' },

        { question: `Is the HESI exam tough for nurses?`,
         answer: 'It depends on your knowledge and your learning skills as to how strong your concepts are. It can be challenging for some students as it determines your critical thinking and judges your nursing concept. ' },

        { question: ` Is Calculator Allowed in HESI Test?`,
         answer: `Absolutely! Calculators are allowed to be used while using any scientific calculator are prohibited to use during the HESI exam.` },

        { question: `Do you receive scratch paper for the HESI?`,
         answer: `You will be allowed with one pencil, scratch paper and a simple calculator to use in the HESI exams.` },
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

export default HesiFaq