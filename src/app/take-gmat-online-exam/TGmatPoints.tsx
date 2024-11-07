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
      description: `Hiring our expert instructor to take your GMAT Online will result in great success and help you to increase your critical thinking and enhance your educational credibility that provides help and support in your academic life.`,
      image: '/imgs/gmat-points-1.png',
    },
    {
      id: 2,
      title: 'Commitment and Dedicated Instructors',
      description: `You don’t need to worry about how to take the GMAT online with excellent marks! Our experts are well-versed in diverse fields which can get you more benefits at a very reasonable price. Get your chance to hire one of our finest instructors to take your GMAT Online and make your result sheet more remarkable. `,
      image: '/imgs/gmat-points-2.png',
    },
    {
      id: 3,
      title: ' Achieve Better Scores',
      description: `Now Secure higher marks in the GMAT test online with us! Another Reason to hire instructors from our site is that we provide the best assessment and help students with every queries and clear doubts so that they feel relaxed and confident.`,
      image: '/imgs/gmat-points-3.png',
    },
    {
      id: 4,
      title: 'Affordable Package',
      description: `We value our students more than anything. Takingmyclassesonline.com prioritizes the student community to help them in their academic journey as well as to accomplish their life goals. We are not here to assist you one or two times. Our service helps students take your GMAT Online and helps them throughout their educational career with such a nominal cost which differentiate us from others.`,
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
  

function TGmatPoints() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10 p-3 lg:p-6'>
    <h2 className='text-center text-xl md:text-[33px] font-extrabold dark:text-zinc-100 text-zinc-900'> Benefit Of GMAT Assessment Test Online</h2>
    <h3 className='text-center text-lg py-2 md:text-3xl font-bold dark:text-zinc-100 text-zinc-900'>Where Do I Take the GMAT Online? Exploring Testing Locations and Online Options</h3>
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

export default TGmatPoints