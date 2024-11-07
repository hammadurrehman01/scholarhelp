"use client"
import Aos from 'aos';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

function AboutProcess() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
  return (
    <div className='mx-auto max-w-screen-xl' ref={ref} data-aos='zoom-in'>
        
        <div className='grid lg:grid-cols-2 grid-cols-1 py-10 px-5 gap-3'>
            <div className=''ref={ref} data-aos="flip-up">
                <div className='flex justify-center items-center'>
                    <Image src={'/about_us/about_us.webp'} width={600} height={600} alt='aboutprocess'></Image>
                </div>
            </div>
            <div className=''ref={ref} data-aos="flip-down">
            <h2 className='text-2xl lg:text-5xl font-extrabold  '>Why Choose Us </h2>
            <p className='pt-4 font-medium text-muted-foreground md:text-base text-sm '>
            Taking My Classes Online is a prominent solution for your academic problems, Serving its premium services for over a decade to help out students with their academic problems through experienced teachers&quot; guidelines and solutions, making it one of the reasons why students believe in us.
            </p>

            <div className='flex items-center gap-2 mt-4'>
                <Image src={'/about_us/strategy-development.png'} width={60} height={60} alt='strategy'></Image>
                <div className='flex flex-col ml-3'>
                <h3 className='lg:text-lg text-base font-medium'>Making Up A Strategic Plan </h3>
                <p className='text-muted-foreground md:text-base text-sm'>We compile study material to help you learn and provide certain tips and techniques to remember it more effectively.</p>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Image src={'/about_us/execution.png'} width={60} height={60} alt='strategy'></Image>
                <div className='flex flex-col ml-3'>
                <h3 className='lg:text-lg text-base font-medium'>Effective Lectures </h3>
                <p className='text-muted-foreground md:text-base text-sm'>We aim to provide you with valuable details that cater to your subject requirements and clear your concepts.</p>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Image src={'/about_us/analysis.png'} width={60} height={60} alt='strategy'></Image>
                <div className='flex flex-col ml-3'>
                <h3 className='lg:text-lg text-base font-medium'>Expert Guidances and Support In Academics </h3>
                <p className='text-muted-foreground md:text-base text-sm'>Our team of experts is available 24/7 to help you with your academic challenges, offering specialized support and guidance to help you throughout your work.</p>
                </div>
            </div>

            </div>
        </div>
        <div className='border-b-[2px] border-muted-foreground'></div>
    </div>
  )
}

export default AboutProcess