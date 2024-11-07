"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { SwordsIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css';

const Faq = () => {
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

    const [openIndex, setOpenIndex] = useState(0); // Set the first question to be active by default
    const [sOpen, setIsOpen] = useState(false);

    const questions = [
        { question: `What type of service is this, "${process.env.NEXT_PUBLIC_WEBSITE_NAME}"?`, answer: 'This is an online class service, and it is designed to help students to ace their exams throughout the USA. This service innovates students’ minds and polishes their skills to secure high grades in their academic exams and lead their academic journey.' },
        { question: `Is there any surety of a high grade?`, answer: 'Our experience and expertise as an online instructor are the key elements for securing high scores. So, you don’t need to worry about your grades after joining our online classes.' },
        { question: `Do you take an online class for me through the entire coursework?`, answer: 'Through our online platform, we offer a complete solution to our customers. We guarantee that you will cover the entire syllabus and coursework.' },
        { question: `Do you offer any special discount?`, answer: 'We offer 40% off on your first order. As well as we also announce seasonal promotions to our customers. You can also utilize a 10% discount on every online course.' },
        { question: `Do you have any kind of refund policy?`, answer: 'If you are not satisfied, you are eligible to claim our refund policy. You can also claim it when we didn’t cover your course outlines and couldn’t develop your learning skills.' },
        { question: `Is "take my class for me" a legal service?`, answer: 'We are legally a verified, registered, and trusted online service.' },
        { question: `Will my identity be confidential while taking online classes?`, answer: `We prioritize our customers' privacy and confidential information, so don’t worry about privacy while engaging with our services.` },
        { question: `How am I sure of the progress of my course online?`, answer: 'Firstly, you need to identify your strengths and weaknesses. Secondly, monitor your improvement over time. Thirdly, stay motivated and focused. Furthermore, adjust your study plan and strategies. Through these minor steps, you can evaluate your online course progress.' },
    ];

    const toggleAccordion = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div ref={ref} className='mx-auto max-w-screen-xl mt-10'>
            <h2 className='text-center px-4 text-xl lg:text-4xl font-extrabold dark:text-zinc-100 text-indigo-950'>Frequently Asked Questions</h2>
            <h3 className='text-center px-4 text-lg  lg:text-3xl font-bold dark:text-zinc-100 text-indigo-950'>The list of questions that are frequently asked by Our Clients</h3>

            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5'>
                <div data-aos="zoom-in-down" className=''>
                    <div className='flex items-center justify-center sm:pb-8 sticky top-0 '>
                        <Image loading='eager' className='md:mt-20  rounded-2xl ' src="/imgs/faq_section_1.webp" width={600} height={600} alt='about-faq-bg' />
                    </div>
                </div>

                <div className=''>
                    {questions.map((item, index) => (
                        <div data-aos="flip-down" className="md:pt-6 pt-8" key={index}>
                            <h4
                                className="cursor-pointer py-6 px-4  rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold text-base  flex justify-between group bg-gradient-to-l from-sky-200 via-purple-200 to-zinc-300 text-zinc-800 transition ease-in duration-150 delay-100"
                                onClick={() => toggleAccordion(index)}
                            >
                                {item.question}
                                <SwordsIcon className='md:text-base text-sm group-hover:rotate-180 group-hover:stroke-gray-700 transition ease-in duration-200 delay-100' />
                            </h4>
                            {openIndex === index && (
                                <p className="py-4 px-4  rounded-br-[10px] rounded-bl-[10px] md:text-base text-sm bg-gradient-to-l from-sky-200 via-purple-200 to-zinc-300 text-zinc-800">
                                    {item.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;