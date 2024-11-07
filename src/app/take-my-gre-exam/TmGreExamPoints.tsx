"use client"
import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';

const slideData = [
    {
      id: 1,
      title: 'Expert Insights and Experience',
      description: `Paying someone to take my GRE test can be tough, But not with us. Our experts are prominent in their goal to give the students their ideal help to grow them in their educational platform. They are well versed in different exam formats, making them the ideal choice for your exam support. With our mentors you are no longer asking for “How do I take the GRE test”`,
      image: '/imgs/gre-points-1.png',
    },
    {
      id: 2,
      title: 'Advanced Learning',
      description: `Getting exceptional outcomes and remarkable results that will increase your educational credibility and enhance your critical thinking which lead you to be an expert in your desired field. So paying someone to take my exam will be beneficial unless you ensure that the service is reliable and trustworthy, and it aligns with your ethical standards and academic integrity.`,
      image: '/imgs/gre-points-2.png',
    },
    {
      id: 3,
      title: 'Economical Packages',
      description: `Many students are struggling to find the How do I take GRE home test assistance. With our prominent priority, we help hundreds of students in their educational journey so that they reach the new levels of their life. Hiring our expert instructors, you’re accessible for 24/7 services which help you to clear your doubts anytime you want.`,
      image: '/imgs/gre-points-3.png',
    },
    {
      id: 4,
      title: 'Customized Plans',
      description: `You can now select the instructor as per your need and get huge benefits with our services. With the most affordable plans in town you can more in a less. So make your move now and let us make your future bright and let you enjoy higher grades and marks. `,
      image: '/imgs/gre-points-4.png',
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
  

function TmGreExamPoints() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10 p-3 lg:p-6'>
    <h2 className='text-center text-xl md:text-[33px] font-extrabold dark:text-zinc-100 text-zinc-900'>Check out How Much Is It To Take The GRE at Affordable Package </h2>
    <h3 className='text-center text-lg py-2 md:text-3xl font-bold dark:text-zinc-100 text-zinc-900'>Where can i take my GRE Service Across the USA</h3>
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

export default TmGreExamPoints