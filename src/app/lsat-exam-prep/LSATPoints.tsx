"use client"
import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';

const slideData = [
    {
      id: 1,
      title: 'Proficiency and Experience',
      description: `Takemyclassesonline.com have the best skillful and experienced instructors which not only help you with their learning capability but also provide you with some benefits with their life experience.`,
      image: '/imgs/gmat-points-1.png',
    },
    {
      id: 2,
      title: 'Improved Learning ',
      description: `There is no such bad thing if you’re seeking guidance from an online source. It will gain you some profit and help you to make your learning skills more efficient and better. Hire expert instructors from our site and take such advantage of their guidance.`,
      image: '/imgs/tme-points-2.png',
    },
    {
      id: 3,
      title: '  Prioritize Your Privacy ',
      description: `Hiring experts from our website will be beneficial for you in every case. While securing your data is one of the most important commitments to our student community, No one can avail their personal information by any chance.`,
      image: '/imgs/tme-points-3.png',
    },
    {
      id: 4,
      title: 'Affordable Package',
      description: `How to study for the LSAT exam with no resources will be tough until you hire someone to help you in your learning journey. ‘Take My Classes Online’ takes this responsibility and helps you with their affordable packages so you shouldn't have to look anymore.`,
      image: '/imgs/gre-points-4.png',
    },

  ];
  
  const Slide = ({ title, description, image, index, ref }:any) => (
    <div className='group mt-5' ref={ref} data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}>
      <div className='relative md:scale-95 scale-90 group-hover:scale-95 md:group-hover:scale-100 group-hover:border-yellow-400 border-[5px] group-hover:bg-indigo-900 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[400px] w-full rounded-xl p-4 overflow-hidden'>
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
  

function LSATPoints() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10 p-3 lg:p-6'>
    <h2 className='text-center text-xl md:text-[33px] font-extrabold dark:text-zinc-100 text-zinc-900'> Benefits of Free Practice for the LSAT Exam</h2>
    <h3 className='text-center text-lg py-2 md:text-3xl font-bold dark:text-zinc-100 text-zinc-900'>LSAT exam registration</h3>
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

export default LSATPoints