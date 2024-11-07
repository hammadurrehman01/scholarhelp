"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';

const slideData = [
  {
    id: 1,
    title: 'Dedicated And Devoted',
    description: `Takingmyclassesonline.com has provided its services for students for over a decade. Our tutors are experts and highly supportive to help you in your academic career. We try to provide the finest service possible, giving you the confidence you need to achieve at your tests.`,
    image: '/imgs/gmat-points-1.png',
  },
  {
    id: 2,
    title: 'Engaging Content',
    description: `The instructors are experts in different learning methodologies that create engaging content for students which help them to sort out their doubts and engage them in learning more effectively.`,
    image: '/imgs/gmat-points-2.png',
  },
  {
    id: 3,
    title: 'Customize Package',
    description: `Are you looking for online tutoring services to take my online classes and still not satisfied with the result? You’re in the right spot to hire our experts and let them help you to ace your exams. However, We aim to provide our services at an affordable price to give every student the best result in their academics.`,
    image: '/imgs/gmat-points-3.png',
  },
  {
    id: 4,
    title: 'Priorities Your Privacy',
    description: `We ensure that your personal information is kept safe with us. We provide a secure payment method that stores your personal information in our server, protecting it from unauthorized access.`,
    image: '/imgs/gmat-points-4.png',
  },
];

const Slide = ({ title, description, image, index, ref }: any) => (
  <div className='group mt-5' ref={ref} data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}>
    <div className='relative md:scale-95 scale-90 group-hover:scale-95 md:group-hover:scale-100 group-hover:border-yellow-400 border-[5px] group-hover:bg-indigo-900 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[440px] w-full rounded-xl p-4 overflow-hidden'>
      <div style={{ backgroundImage: "url('/imgs/bg-why.webp')", backgroundPosition: 'center', backgroundSize: 'cover', transition: 'transform 0.5s ease-in-out' }} className='absolute inset-0 transform translate-y-full group-hover:translate-y-0'></div>
      <div className='relative z-10'>
        <div className='flex justify-between'>
          <div className='bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center'>
            <Image className='group-hover:-rotate-45 transition ease-in duration-200 delay-100' src={image} width={64} height={64} alt='icon' />
          </div>
          <div className='font-extrabold text-4xl md:text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-yellow-400'>
            {index.toString().padStart(2, '0')}
          </div>
        </div>
        <div className='group-hover:text-gray-200 text-base md:text-[20px] font-bold pt-4'>{title}</div>
        <div className='pt-3 md:text-base text-sm font-medium group-hover:text-gray-200'>
          {description.includes('take my online classes') ? (
            <span>
              Are you looking for online tutoring services to&nbsp;
              <Link href="/" className="text-foreground font-medium hover:text-black transition ease-in duration-150 delay-150">
                take my online classes
              </Link>
              &nbsp;and still not satisfied with the result? You’re in the right spot to hire our experts.
            </span>
          ) : (
            description
          )}
        </div>
      </div>
    </div>
  </div>
);

function PtePoints() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10 p-3 lg:p-6'>
      <h2 className='text-center text-xl md:text-[33px] font-extrabold dark:text-zinc-100 text-zinc-900'>
        Get The Desired Benefits Of Hiring From Takemyclassesonline
      </h2>
      <h3 className='text-center text-lg py-2 md:text-3xl font-bold dark:text-zinc-100 text-zinc-900'>
        PTE Academic Preparation Online: Tips And Strategy For Success
      </h3>
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
            <Slide {...slide} index={slide.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PtePoints;
