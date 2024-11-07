"use client"
import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Aos from 'aos'

function AboutBanner() {
    const {theme}=useTheme()

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
    <div ref={ref} className={`${theme === 'light' ? 'm-h-[500px] border-b-2 border-indigo-200 -z-10 h-full w-full bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100' : ' -z-10 m-h-[500px] w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] '}`}>
        <div className='mx-auto max-w-screen-xl '>
        <div className='py-20 px-5 md:py-44'>
        <div className='text-center text-2xl md:text-5xl font-extrabold'>About Us</div>
        <div className='max-w-screen-md mx-auto text-center  pt-4 font-medium dark:text-zinc-100 text-zinc-900 sm:text-lg text-sm '>The name says all, Our online podium is a place where hundreds of students seek expert guidance to solve their academic problems and initialize supportive guidelines to tailor their needs. Our expert team is essential to provide flawless and top-quality work to ensure your academic success. </div>
        </div>
        </div>
    </div>
  )
}

export default AboutBanner