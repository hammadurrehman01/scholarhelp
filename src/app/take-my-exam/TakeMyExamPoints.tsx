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
    title: 'Personalized Learning Support',
    descriptionStart: 'Boost your learning potential by selecting one of the best online test tutors to work with. Checkout our instructor as they are the best option for you since they have a lot of experience with many kinds of tests format. With the assistance of our dedicated professionals, we offered you 24/7 online exam help support to clear your doubts.',
    descriptionLinkText: 'Take GRE test online',
    descriptionEnd: ' and ace your exam with our expert support.',
    link: '/take-my-gre-exam',
    image: '/imgs/tme-points-1.png',
  },
  {
    id: 2,
    title: 'Improved Learning Skills',
    descriptionStart: 'Getting remarkable outcomes and upscaling the legitimacy of your education are two more reasons to work with our professionals. So get this chance on an ',
    descriptionLinkText: 'LSAT practice exam',
    descriptionEnd: ', obtain assistance from our professionals for your assignments and achieve better grades on tests. So Can I hire someone to do my exam for me not only assists you with good marks but can also ensure higher success. So the “Take My Exam” service will surely give you some benefits.',
    link: '/lsat-exam-prep',
    image: '/imgs/tme-points-2.png',
  },
  {
    id: 3,
    title: 'Reasonable Packages',
    description: 'Are you looking for “where I can hire someone to take my exam”?Look no further! ‘Taking My Classes Online’ has experienced instructors and mentors which provide efficient support to the student at a nominal price. We offer our services at reasonable costs so you may gain benefits from them and keep progressing in your educational growth.',
    image: '/imgs/tme-points-3.png',
  },
  {
    id: 4,
    title: 'Personalized Packages',
    description: 'Checkout our plans and customize them according to your needs. We place a high value on your privacy, protecting your personal information so you may focus on your studies without any burden. Your information is protected by our secure payment method, giving you a secure experience for all of your academic help needs.',
    image: '/imgs/tme-points-4.png',
  },
];

const Slide = ({ title, descriptionStart,description, descriptionLinkText, descriptionEnd, link, image, index }: any) => (
  <div className='group mt-5' data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}>
    <div className='relative md:scale-95 scale-90 group-hover:scale-95 md:group-hover:scale-100 group-hover:border-yellow-400 border-[5px] group-hover:bg-indigo-900 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[470px] w-full rounded-xl p-4 overflow-hidden'>
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
          {descriptionStart  && <span>{descriptionStart}   </span>}
          {description && <span>{description}</span>}
          {descriptionLinkText && link && (
            <Link href={link} className=" font-medium text-yellow-500 hover:underline transition ease-in duration-150 delay-150">{descriptionLinkText}</Link>
          )}
          {descriptionEnd && <span>{descriptionEnd}</span>}
        </div>
      </div>
    </div>
  </div>
);

function TakeMyExamPoints() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10 p-3 lg:p-6'>
      <h2 className='text-center text-xl md:text-[33px] font-extrabold dark:text-zinc-100 text-zinc-900'>
        Need an Affordable exam helper? Get Reliable support and Achieve Your Desired Benefits
      </h2>
      <h3 className='text-center text-lg py-2 md:text-3xl font-bold dark:text-zinc-100 text-zinc-900'>
        Take benefits of Online Exam help Across the USA
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

export default TakeMyExamPoints;
