"use client"
import { SwordsIcon } from 'lucide-react';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css';

function ServiceFaq() {
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
    
    const [openIndex, setOpenIndex] = useState(0);
    const [sOpen,setIsOpen] = useState(false)

    const questions = [
        { question: `takingmyclassesonline.com is there any difference: take my online class? ?`,
         answer: 'takingmyclassesonline.com is the most recommended and top-ranked service throughout the USA. Furthermore, their online lecturers are committed, highly qualified, and expert. Also, they offer affordable packages to their clients. Along with these things, they follow a study plan to build engaged learners.' },

        { question: `Do you deliver the guaranteed results to pay for someone to take my online classes service or your money back?`,
         answer: 'Absolutely, we guarantee you 100% outcomes. Otherwise, we also offer you a money-back guarantee if we fail to achieve the guaranteed result. However, our previous proven track records are witness of our guaranteed result. So, join us and feel peace of mind.' },

        { question: `Can I pay someone to take my class for me? is this safe?`,
         answer: 'Yes, after encountering us, you don’t need to search ‘Can I pay someone to take my class for me?’ So, pay us and join our online instructor. Furthermore, we have a secure payment procedure. Also, engaging with our online classes platform makes you feel safe.  ' },

        { question: `Is there any kind of simple steps that I hire someone to take your online class?`,
         answer: 'Yes, you need to join our online classes service at takingmyclassesonline.com. You just need to follow very simple steps to hire our online instructor to take your online classes.' },

        { question: `Who should take online classes?`,
         answer: 'Our online instructor is qualified and experienced in the field related to your subject, and he has expertise in this field. ' },

        { question: `Can you help me with a tight schedule to take an online class?`,
         answer: 'Yes, we do offer last-minute help to accommodate our learners’ tight schedules. You can utilize our online classes to deal with tight schedules. ' },
    ];

    

    const toggleAccordion = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <div ref={ref}  className='mx-auto max-w-screen-xl mt-20 mb-10'>
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

export default ServiceFaq