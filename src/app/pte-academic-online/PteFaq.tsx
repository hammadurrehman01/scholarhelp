"use client"
import { SwordsIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

function PteFaq() {
    const [openIndex, setOpenIndex] = useState(0);
    const [sOpen,setIsOpen] = useState(false)

    const questions = [
        { question: `Is 50% deposit required for the PTE exam?`,
         answer: 'Yes, A 50% deposit is initially required to preserve your registration for the PTE exams. However, policies may differ from location to location.' },

        { question: `Do I have an option to score into the public?`,
         answer: `Certainly, The official PTE platform doesn't automatically make scores public. However, You can choose to share your score with specific organizations.` },

        { question: `Do you offer online study materials for the PTE Exam?`,
         answer: 'Absolutely! Our experts provide resources to our students to not only pass in the PTE exam but also help them to achieve higher scores.' },

        { question: `Do you offer tutors for PTE exam preparation?`,
         answer: 'Absolutely! takingmyclassesonline.com has been offering its service for over a decade to support the student community in their academic stress and help them to score big in every exam format. ' },

        { question: `Is the PTE exam tough for the student?`,
         answer: `Certainly, it depends on the student's preparation as to how he prepared for the exams and how strong their concepts are.` },

        { question: `Any installment for the preparation of the PTE test?`,
         answer: `Our aim is to provide high-quality services to our student community at reasonable pricing, ensuring that every student has access to the greatest assistance at a low cost.` },
    ];

    

    const toggleAccordion = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div className='mx-auto max-w-screen-xl mt-20 mb-10'>
    <h2 className='text-center text-lg lg:text-3xl font-bold dark:text-zinc-100 text-indigo-950 '>
    Frequently Asked Questions </h2>
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

export default PteFaq