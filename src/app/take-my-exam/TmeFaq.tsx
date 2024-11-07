"use client"
import { SwordsIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

function TmeFaq() {

     
    const [openIndex, setOpenIndex] = useState(0);
    const [sOpen,setIsOpen] = useState(false)

    const questions = [
        { question: `Check out How you 'take my online exam' works?`,
         answer: 'takingmyclassesonline.com is a platform where you find ultimate guidance for your education and institutional work. With our expert guidance we aren’t taking care of your online exams but also make you enjoy your prime time into your prime commitment.' },

        { question: `Can You "Take My University Exams" Online and Support My Learning Journey?`,
         answer: 'With years of experience, our expert instructors are responsible for your academic success and help you to learn new skills. In case if we fail to achieve the guarantee result we offer money-back service so you find no loss with us.' },

        { question: `What Kind of Strategies Can Help Me Succeed In An Online Exam? `,
         answer: 'Our experts understand the value of your time and your prime commitment towards your goals. Therefore we schedule remote lectures where you can easily attend online sessions and clear your doubts with our expert guidance.' },

        { question: `Is there any option where Can I pay you on an Installment basis for my online exam?`,
         answer: 'takemyclassesonline.com is known for its excellence and __ towards student success. Our experts help you to attain higher grades in your exams, however we offer a money-back guarantee if we fail to give you the desired results.' },

        { question: ` How do I know that I can trust you with my online exam?`,
         answer: `You can check our reviews and feedback, and you’ll be pleased to see the incredible results we've achieved for our students. With decades of experience, we’re here to support you and ensure you feel valued throughout the process. ` },

        { question: `How Can I Request You to "Take My Online Exam"?`,
         answer: 'Follow some of the easy steps and hire your desired subject experts and within a few minutes you’ll be accessible to our services which help you throughout your education journey and help you to attain better results. So complete your prime commitment and let the burden of online exams be on us.' },
    ];

    

    const toggleAccordion = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div className='mx-auto max-w-screen-xl mt-20 mb-10'>
    <h2 className='text-center text-xl lg:text-4xl font-extrabold dark:text-zinc-100 text-indigo-950 '>Frequently Asked Questions
    </h2>
    <h3 className='text-center text-lg lg:text-3xl font-bold dark:text-zinc-100 text-indigo-950 '>Most Frequently Asked Questions
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

export default TmeFaq