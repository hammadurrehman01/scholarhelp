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
    title: 'Experience And Expertise ',
    description: `Takingmyclassesonline.com is providing every student with better assistance and with better service to achieve their goals effortlessly. With an experience of decades, we specialized to give expert support to our students to clear all of their queries.`,
    image: '/imgs/gmat-points-1.png',
  },
  {
    id: 2,
    title: 'Improved Learning ',
    description: `Our skilled educators are passionate and committed to their jobs, making every student's future brighter and providing the same degree of knowledge. However, Our aim is to help every student throughout their academic life. `,
    image: '/imgs/gmat-points-2.png',
  },
  {
    id: 3,
    title: ' Scoring High Grades ',
    description: `Are you seeking for better guidance and assistance to ace your exam? You’re in the right spot to hire our expert tutors to take my ged exam for me. In Addition, our experts are highly skilled and professional to help you in all your subject needs.`,
    image: '/imgs/gmat-points-3.png',
  },
  {
    id: 4,
    title: 'Affordable Packages',
    description: `Takingmyclassesonline.com provides customized packages to reach the requirement of all students at a cost-effective price. Take a step forward and seize this opportunity and get the best exam service for 24/7.`,
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
          {description.includes('take my ged exam for me') ? (
            <span>
              Are you seeking for better guidance and assistance to ace your exam? You’re in the right spot to hire our expert tutors to&nbsp;
              <Link href="/take-my-ged-for-me" className="text-foreground font-medium hover:text-black transition ease-in duration-150 delay-150">
                take my ged exam for me
              </Link>.
            </span>
          ) : (
            description
          )}
        </div>
      </div>
    </div>
  </div>
);

function HesiPoints() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10 p-3 lg:p-6'>
      <h2 className='text-center text-xl md:text-[33px] font-extrabold dark:text-zinc-100 text-zinc-900'> Benefits Of Hiring From {process.env.NEXT_PUBLIC_WEBSITE_NAME}</h2>
      <h3 className='text-center text-lg py-2 md:text-3xl font-bold dark:text-zinc-100 text-zinc-900'>HESI Test Preparation: Tips And Strategy For Success </h3>
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

export default HesiPoints;
