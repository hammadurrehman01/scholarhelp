"use client"
import React, { useEffect } from 'react'
import { CtaButtons, CtaChat } from './HeroSection'
import Image from 'next/image'
import { FlipWords } from '@/components/ui/flip-words'
import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css';

function SmallDivider() {
    const words = ["Need Urgent Help", "Registration help? Contact us.", "Technical issues? Contact support", "Subject questions? Ask us."];
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
    <div ref={ref} className='mt-10'>
        <div data-aos='zoom-in' className='bg-gradient-to-l from-sky-200 via-purple-200 to-zinc-300 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]    '>
            <div className='mx-auto max-w-screen-xl'>
                <div className='grid lg:grid-cols-2 grid-cols-1 p-5 lg:gap-0 gap-10'>
                    <div  className='xl:pt-14 '>
                        <h2 className='font-extrabold text-center md:text-3xl text-xl text-zinc-800 dark:text-zinc-200 pt-8'>  <FlipWords words={words} /></h2>
                        <div className='flex flex-col md:flex-row justify-center items-center '>
                        <CtaChat/>

                    </div>
                    </div>
                    <div className=''>
                    <div data-aos='fade-up' className='flex flex-col md:flex-row  items-center  '>
                        <Image loading='eager' className='' src={'/imgs/small-divider-img.webp'} width={300} height={300} alt='small'></Image>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SmallDivider