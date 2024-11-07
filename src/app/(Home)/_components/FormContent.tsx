"use client"
import React, { useEffect } from 'react'
import { CtaButtons } from './HeroSection';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css';



function FormContent() {
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

    return (
        <div  ref={ref}  className='mx-auto max-w-screen-xl mt-10'>
            <div className='h-[2px] w-full bg-zinc-800'></div>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
                <div className=''>

                    <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
                    <Accordion type="single" defaultValue='item-1' collapsible>
                    <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <h2 className="cursor-pointer text-left py-2 rounded rounded-tr-[20px] rounded-tl-[20px]  md:text-xl font-bold flex justify-between group  ">Explore Your Unique Learning Dimension through Our Exclusive Online Tutors  </h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                            takingmyclassesonline.com is the leading online platform for you to hire an online class instructor. Somehow, you might be bored of taking online classes and wondering about ‘need help with my online class’. So, then, we are here to help you out. We are on a mission to help students with their academics so they can easily continue their learning journey.
                        </p>
                    </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-2'>
                    <AccordionTrigger>
                        <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px]  md:text-xl font-bold flex justify-between group  "> Can I Pay Someone to Take My Classes Online</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                            If you are searching for  Pay Someone to Take My Classes Online, so you are at the right place to get online class services to score high in your exam. Literally, concerning our expert makes you eligible to reach the distinctions. Moreover, our experts are highly qualified, skilled, and well aware of modern teaching techniques. Also, their experience in this field innovates their teaching methodology as well as they are very committed and sincere in their prophetic profession. So, it is your decision whether you want to achieve your success or not. In reality, you are one step away from filling out the order form and taking your exam.
                            Pay someone to take my class? is not a simple question as it requires extensive research to find the best online service for this job. By hiring our online instructor, you will lead your academic journey and get the distinction.
                        </p>
                        </AccordionContent>
                        </AccordionItem>
                        </Accordion>
                    </div>

                    <CtaButtons/>
                </div>

                <div data-aos="zoom-in-down" className=''>
                    <div className='flex items-center justify-center mt-5'>
                        <Image loading='eager' src={'/imgs/form-content-img.webp'} width={500} height={333} alt='content-img'></Image>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FormContent