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
      description: `Our expert instructors are highly knowledgeable and experienced in various exams formats that help students regarding their exams preparations and support in their studies to clear doubts and strengthen their concepts.`,
      image: '/imgs/gmat-points-1.png',
    },
    {
      id: 2,
      title: 'Achieve Better Result  ',
      description: `Takingmyclassesonline.com is providing the essential need of education to every student to get advantage of their service and secure better marks in their exams effortlessly.`,
      image: '/imgs/gmat-points-2.png',
    },
    {
      id: 3,
      title: ' Customized Packages  ',
      description: `We aim to provide high level education at such an affordable price to help every student seeking help in their studies. In Addition, we provide exam resources and hold practice assessments to make every student proficient in every subject. `,
      image: '/imgs/gmat-points-3.png',
    },
    {
      id: 4,
      title: 'Value Your Privacy',
      description: `We safeguard your personal information and secure your data from other sites with our technology. We prioritize your privacy and make sure to stop it from the third party user. `,
      image: '/imgs/gmat-points-4.png',
    },

  ];
  
  const Slide = ({ title, description, image, index, ref }:any) => (
    <div className='group mt-5' ref={ref} data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}>
      <div className='relative md:scale-95 scale-90 group-hover:scale-95 md:group-hover:scale-100 group-hover:border-yellow-400 border-[5px] group-hover:bg-indigo-900 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[440px] w-full rounded-xl p-4 overflow-hidden'>
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


function GedPoints() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10 p-3 lg:p-6'>
    <h2 className='text-center text-xl md:text-[33px] font-extrabold dark:text-zinc-100 text-zinc-900'> Proficient Your Exam With “Take My GED Test For Me” Service. </h2>
    <h3 className='text-center text-lg py-2 md:text-3xl font-bold dark:text-zinc-100 text-zinc-900'>Secured Desired Outcomes Through Online Education </h3>
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

export default GedPoints