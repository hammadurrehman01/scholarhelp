"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css';

function ServiceLC() {
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
        <div ref={ref} className='mx-auto max-w-screen-xl mt-10'>

            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
                <div className=''>
                 <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
                        <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  "> Why Pay Someone to Do My Online Class for Me  </h2>

                        <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                            In this post-modern period, we have diverse learning options. One of them is online classes, which have become a popular and convenient learning method in the changing modern educational environment. They allow learners to polish their skills while earning degrees from their homes. Although online learning is convenient, on the other sides, it also has some negative elements and drawbacks, especially for people with a demanding job schedule or who struggle with a specific subject. Enhancing your learning and achieving the highest degree is possible now from home.
                        </p>
                        <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">The Impact Role of Online Classes in 2024</h2>
                        <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                            The need for virtual learning platforms is increasing day by day throughout the world. It is very convenient for the students as well as it is a more appropriate way for teachers to deliver their lectures by using user-friendly online tools and dynamic soft-whiteboards.
                            Consequently, joining online classes has become a well-known service. This service enables students to send their homework, assignments, and solved worksheets to their online instructors. The instructor will then share his feedback through the online platform.

                        </p>
                    </div>
                </div>

                <div data-aos="zoom-in-down" className=''>
                    <div className='flex items-center justify-center mt-5'>
                        <Image className='rounded-xl' loading='eager' src={'/imgs/service_lc.webp'} width={800} height={800} alt='servicelc' ></Image>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceLC