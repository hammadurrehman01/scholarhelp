"use client"
import Image from 'next/image';
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css';



const slideData = [
    {
      id: 1,
      title: 'Committed and Dedicated Instructors',
      description: `Hiring our online expert will help you improve your learning skills and ace your exam. Our expert teaching faculty is well-versed in academic skills and expertise in teaching methodologies. They are also perfect at developing learners' skills and excelling in their exams.`,
      image: '/imgs/elite.png',
    },
    {
      id: 2,
      title: 'Secure High Grades',
      description: `Are you looking for an expert online instructor to ace your exam? You are in the right spot to hire our experts to take an online psychology exam; you will score highly on the exam. However, Our Experts are knowledgeable in every topic so that we can provide you with an excellent piece of work `,
      image: '/imgs/result-1.png',
    },
    {
      id: 3,
      title: 'Affordable Packages',
      description: `We offer an affordable and cheap online class service to our customers so that every student can access our service, whether he is financially struggling or established. Actually, we promote equal rights, so our service’s cheap packages are set for all learners to facilitate everyone.`,
      image: '/imgs/budget.png',
    },
    {
      id: 4,
      title: 'Priorities Your Privacy',
      description: `We ensure that your academic and personal information is kept confidential. We also prioritize your privacy regarding payment, providing you with a secure procedure for all tasks. In addition, we make sure you get our assistance efficiently. `,
      image: '/imgs/confidential-folder.png',
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
  

function ServicePoints() {
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
    <div ref={ref} className='mx-auto max-w-screen-xl mt-10 p-3 lg:p-6'>
    <h2 className='text-center text-xl md:text-[33px] font-extrabold dark:text-zinc-100 text-zinc-900'> Need to Pay Someone to Take Online Class and Get Desired Benefits </h2>
    <h3 className='text-center text-lg py-2 md:text-3xl font-bold dark:text-zinc-100 text-zinc-900'>Achieve Desired Benefits through Our Online Classes </h3>
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

export default ServicePoints