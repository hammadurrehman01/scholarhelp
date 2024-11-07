"use client"
import { SwordsIcon } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'

function ToeFlFAQ() {
    const [openIndex, setOpenIndex] = useState(0);
    const [sOpen,setIsOpen] = useState(false)

    const questions = [
        { question: `Is it Possible to take a TOEFL test online ? `,
         answer: 'There are two editions of TOEFL exam, One based on physical appearance while TOEFL iBT Home provides you to take the exam at home in the presence of a human proctor. Use wisely before submitting the form. You can take the TOEFL exam at home, allowing for a comfortable and familiar testing environment.' },

        { question: `Is the TOEFL test completely online? `,
         answer: 'No, You can also take the exam in the test centers. While submitting the form make sure to choose the flexible time and date that meets your needs.' },

        { question: `What is the Fee Structure of TOEFL exam`,
         answer: 'The TOEFl examination fee can vary from location to location. Generally ranging from $100 - $120, you can vary it from the official TOEFL website. Also, there are various payment methods to allow you to pay the examination fee in order to reserve your examination seat.' },

        { question: `How many times can you take the TOEFL exam?`,
         answer: `With TOEFL, there is no cap as such that the student can take multiple attempts on the exams because he wants to. But rest assured, you will pass in your first attempt itself. If not, we give you a money refund, and you wouldn't be losing your money for it.` },

        { question: `Do you provide any assistance for the TOEFL exam?`,
         answer: `Yes! We are known for our commitment and for our services. Our past performance records reflect the outcomes we promise. So join us now and get the best assistance for your academic success.` },

 
    ];

    

    const toggleAccordion = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div className='mx-auto max-w-screen-xl mt-20 mb-10'>
    <h2 className='text-center text-xl lg:text-4xl font-extrabold dark:text-zinc-100 text-indigo-950 '>Frequently Asked Questions
    </h2>
    <h3 className='text-center text-lg lg:text-3xl font-bold dark:text-zinc-100 text-indigo-950 '>Most Asked Questions From Our Clients
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

export default ToeFlFAQ