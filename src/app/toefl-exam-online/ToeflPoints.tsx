"use client"
import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';

const slideData = [
    {
      id: 1,
      title: 'Committed And Dedicated Instructors ',
      description: `Takemyclassesonline are known for their prominent service to their students and helping them to achieve desired results in their exams. `,
      image: '/imgs/gre-points-1.png',
    },
    {
      id: 2,
      title: 'Engaging Lectures',
      description: `Our Expert instructors use different methodologies to make each student engage with particular activities which helps them in their learning journey and also helps them in their academic journey.`,
      image: '/imgs/gre-points-2.png',
    },
    {
        id: 3,
        title: 'Secure Higher Grades',
        description: `Our aim is to provide every student with the best support and ensure to clear all of their queries and strengthen their concept, enabling them to score higher in their exams. Our expert instructors are highly certified and knowledgeable in every topic so that we can provide you with an excellent piece of work.`,
        image: '/imgs/gre-points-4.png',
    },
    
    {
      id: 4,
      title: 'Affordable Packages',
      description: `Takingmyclassonline.com is providing a cheap and affordable package to our most humble students to help them to get higher education at a nominal cost, making it essential for every student to avail this service and get the best assistance in their exam. `,
      image: '/imgs/gre-points-3.png',
    },
  ];

  const Slide = ({ title, description, image, index, ref }:any) => (
    <div className='group mt-5' ref={ref} data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}>
      <div className='relative md:scale-95 scale-90 group-hover:scale-95 md:group-hover:scale-100 group-hover:border-yellow-400 border-[5px] group-hover:bg-indigo-900 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[450px] w-full rounded-xl p-4 overflow-hidden'>
        <div style={{ backgroundImage: "url('/imgs/bg-why.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full group-hover:translate-y-0'></div>
        <div className='relative z-10'>
          <div className='flex justify-between'>
            <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
              <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src={image} width={64} height={64} alt='icon' />
            </div>
            <div className='font-extrabold text-4xl md:text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-yellow-400'>{index.toString().padStart(2, '0')}</div>
          </div>
          <div className='group-hover:text-gray-200 text-base md:text-[20px] font-bold pt-4'>{title}</div>
          <div className='pt-3 md:text-base text-sm font-medium group-hover:text-gray-200'>{description}</div>
        </div>
      </div>
    </div>
  );
  

function ToeflPoints() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10 p-3 lg:p-6'>
    <h2 className='text-center text-xl md:text-[33px] font-extrabold dark:text-zinc-100 text-zinc-900'>Benefits Of Hiring From {process.env.NEXT_PUBLIC_WEBSITE_NAME} </h2>
    <h3 className='text-center text-lg py-2 md:text-3xl font-bold dark:text-zinc-100 text-zinc-900'>Toefl At Home At Affordable Price </h3>
    <Swiper
      loop={true}
      spaceBetween={20}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      modules={[Navigation, Autoplay]}
      breakpoints={{
        325: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2 },
        1280: { slidesPerView: 3 },
      }}
    >
      {slideData.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <Slide {...slide} index={slide.id}  />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default ToeflPoints