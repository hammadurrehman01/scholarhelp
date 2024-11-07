"use client"
import { Star } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { CtaButtons } from './HeroSection'
import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css';

const Rating = () => {
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
        <div ref={ref} className='pt-10'>
            <div className='text-2xl md:text-5xl font-extrabold text-center dark:text-zinc-100 text-violet-950'>Our Excellence</div>
            <p className='text-center pt-4 font-medium md:text-lg  max-w-screen-md mx-auto px-4 text-sm'>We’d love to hear from you! Whether you need assistance or have inquiries about our services, We’ll respond to your queries at your earliest convenience. Fill out the form below and get a quick response. We’re just a click away.</p>
            <div className='grid lg:grid-cols-2 grid-cols-1 mx-auto max-w-screen-xl'>
                <div data-aos="fade-up" className=' p-7'>
                    <div className='flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4'>
                        <Card image='/imgs/confidential-folder.png' title='100% Confidentiality' isStar={false} />
                        <Card image='/imgs/spam.png' title='No Spam' isStar={false} />
                    </div>

                    <div className='flex flex-col md:flex-row items-center mt-4 space-y-3 md:space-y-0 md:space-x-4'>
                        <Card image='/imgs/documents.png' title='Plagiarism Free Work' isStar={false} />
                        <Card image='/imgs/money-back-guarantee.png' title='Money Back Guarantee' isStar={false} />
                    </div>
                </div>

                <div data-aos="fade-up" className=' p-7'>
                    <div className='flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4'>
                        <Card image='/imgs/google.png' title='Google Reviews' isStar={true} />
                        <Card image='/imgs/trust-pilot.png' title='Trust Pilot' isStar={true} />
                    </div>

                    <div className='flex flex-col md:flex-row items-center mt-4 space-y-3 md:space-y-0 md:space-x-4'>
                        <Card image='/imgs/site-jabber.png' title='Site Jabber' isStar={true} />
                        <Card image='/imgs/reviews.io.png' title='Reviews.io' isStar={true} />
                    </div>

                </div>
            </div>
            <div className="flex justify-center mt-2 items-center">
                <CtaButtons />
            </div>
        </div>
    )
}

export default Rating


const Card = ({ image, title, isStar }: { image: string, title: string, isStar: boolean }) => {
    return (
        <div className="w-full sm:w-[380px] rounded-3xl bg-gradient-to-b p-1 from-blue-800 to-purple-800">
            <div className="rounded-[calc(1.5rem-5px)] bg-white p-3 dark:bg-gray-900">
                <div className="flex items-center gap-4">
                    <Image className="rounded-full" src={image} width={50} height={50} alt="rating" />
                    <div>
                        <div className="md:text-lg text-sm font-medium text-gray-700 dark:text-white">{title}</div>

                        {isStar ?
                            <span className="flex text-sm tracking-wide text-gray-600 dark:text-gray-400"><Star className='stroke-black fill-yellow-500' />
                                <Star className='stroke-black fill-yellow-500' />
                                <Star className='stroke-black fill-yellow-500' />
                                <Star className='stroke-black fill-yellow-500' />
                                <Star className='stroke-black fill-yellow-500' /></span> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}
