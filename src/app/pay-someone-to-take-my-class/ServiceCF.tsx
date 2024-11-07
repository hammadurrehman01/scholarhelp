"use client"
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css';

function ServiceCF() {
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
    <div ref={ref} data-aos='zoom-in' className='mx-auto max-w-screen-xl mt-10'>
        <h2  className='text-center font-extrabold text-xl md:text-[33px]  '>Fundamental Characteristics</h2>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 py-5'>
            <div data-aos='flip-right' className='group'>
                <div className='h-[300px] border-[4px] border-muted-foreground rounded-tl-[50px] scale-90 group-hover:scale-95 lg:scale-95 lg:group-hover:scale-100 group-hover:rounded-tr-[50px] group-hover:rounded-bl-[50px] group-hover:rounded group-hover:shadow-2xl transition ease-in duration-200 delay-200  rounded-br-[50px] bg-gradient-to-t from-violet-500 via-purple-200 to-zinc-100 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] '>
                    <h3 className='pt-10 text-center font-bold text-lg md:text-2xl'>Students Centered Lectured</h3>
                    <p className='py-4 text-center font-medium  text-sm md:text-base '>Lessons are designed with a student-centered teaching methodology where students are focused, and their lesson planning will be adequately prepared according to the work subject scheme.</p>
                </div>
            </div>


            <div data-aos='flip-left' className='group'>
                <div className='h-[300px] border-[4px] border-muted-foreground rounded-tr-[50px] scale-90 group-hover:scale-95 lg:scale-95 lg:group-hover:scale-100 group-hover:rounded-tl-[50px] group-hover:rounded-br-[50px] group-hover:rounded group-hover:shadow-2xl transition ease-in duration-200 delay-200  rounded-bl-[50px] bg-gradient-to-t from-violet-500 via-purple-200 to-zinc-100 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] '>
                    <h3 className='pt-10 text-center font-bold text-lg md:text-2xl'>Professional Teaching Methodology</h3>
                    <p className='py-4 text-center font-medium text-sm md:text-base  '>Our online instructors are certified teachers who know modern teaching methodologies and how to develop learners skills.</p>
                </div>
            </div>


            <div data-aos='flip-right' className='group'>
                <div className='h-[300px] border-[4px] border-muted-foreground rounded-tl-[50px] scale-90 group-hover:scale-95 lg:scale-95 lg:group-hover:scale-100 group-hover:rounded-tr-[50px] group-hover:rounded-bl-[50px] group-hover:rounded group-hover:shadow-2xl transition ease-in duration-200 delay-200  rounded-br-[50px] bg-gradient-to-t from-violet-500 via-purple-200 to-zinc-100 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] '>
                    <h3 className='pt-10 text-center font-bold text-lg md:text-2xl'>Live Support 24/7 Available</h3>
                    <p className='py-4 text-center font-medium px-2 text-sm md:text-base  '>Utilize our live support through our expert and get your queries sorted out. Then start your learning journey with our instructor to achieve high grades.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ServiceCF