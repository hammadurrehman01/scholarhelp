"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import {CtaChat } from './HeroSection'
import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css';

function AboutContent() {
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
    <div ref={ref} className='mx-auto max-w-screen-xl mt-5'>
        <div className='h-[2px] w-full bg-zinc-800'></div>
    <div className='grid lg:grid-cols-2 grid-cols-1 p-5'>
    <div className='' data-aos='flip-right'>
      <div className='flex justify-center items-center  mt-5 lg:mt-20'>
        <Image src={"/imgs/workflow_3.webp"} loading='eager' width={600} height={400} alt='workflow'></Image>
      </div>
    </div>
    <div className='' data-aos='flip-left'>
      <div className='flex justify-start items-center mt-5 lg:mt-20'>
        <h2 className='text-xl md:text-3xl font-bold text-center dark:text-zinc-100 text-indigo-900 '>Take My Online Classes and Secure High Grades - Pay Someone to Take My Class</h2>
      </div>
      <p className='mt-2 md:mt-4 md:text-base text-sm font-medium text-muted-foreground'>
        Overall, securing high grades at the academic level is a dream of every passionate learner. However, this achievement requires high effort and qualified instructors, and also you have to search with ‘pay someone to take my class.’ Here, at takingmyclassesonline.com, we offer you highly expert mentors’ online assistance for the enhancement of your academic skills. Furthermore, our service is user-friendly, and it is really customized to provide you with a complete solution. Hence, utilizing our unique and quality service benefits you in accelerating your learning. Significantly, engaging with our online expert will give you peace of mind and satisfy you regarding your learning approach as well as they will guide you about your entire course, syllabus, assignment and exams.  Lastly, joining us leads you to secure your dream grades.</p>
        <CtaChat/>
    </div>
  </div>
  </div>
  )
}

export default AboutContent