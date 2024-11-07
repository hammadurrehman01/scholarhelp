import Image from 'next/image'
import React from 'react'
import { CtaButtons } from '../(Home)/_components/HeroSection'
import BannerForm from '../(Home)/_components/BannerForm'

function TmtBanner() {
  return (
    <div className='m-h-[500px] border-b-2 border-indigo-200 -z-10 h-full w-full bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100 dark:-z-10 dark:m-h-[500px] dark:w-full dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
    <div className='grid lg:grid-cols-2 grid-cols-1 mx-auto max-w-screen-xl py-10 '>
      <div className='py-20 px-5 md:pt-40'>
        <h1 className=' text-center py-2 leading-none lg:text-left dark:text-zinc-100 text-zinc-900 text-xl sm:text-[35px] font-extrabold '>Take My Teas Exam For Me : A Complete Guide For Success</h1>
        <h2 className='text-center py-1 mt-2 lg:text-left dark:text-zinc-100 text-zinc-900 text-xl sm:text-2xl font-semibold'>Get Take My TEAS For Me Service For Academic Success.</h2>
        <div className='flex flex-col lg:flex-row items-center xl:w-[50vw] gap-4 mt-2'>
          <div className='flex items-center gap-1'>
          <Image src={'/imgs/instructor.png'} width={50} height={50} alt='instructor'></Image>
        <h3 className='text-center dark:text-zinc-100 text-zinc-900 md:text-base font-medium'>Expert Guidelines</h3>
        <div className='hidden lg:block w-[2px] h-20 bg-muted-foreground '></div>
        </div>
          <div className='flex items-center gap-1'>
          <Image src={'/imgs/record.png'} width={50} height={50} alt='record'></Image>
        <h3 className='text-center dark:text-zinc-100 text-zinc-900 md:text-base font-medium'>User-friendly Support 
        </h3>
        <div className='hidden lg:block w-[2px] h-20 bg-muted-foreground '></div>
        </div>
          <div className='flex items-center gap-1'>
          <Image src={'/imgs/affordable.png'} width={50} height={50} alt='phd'></Image>
        <h3 className='ml-1 dark:text-zinc-100 text-zinc-900 md:text-base font-medium'>Online Compelling Sessions
        </h3>
        <div className='hidden lg:block w-[2px] h-16 bg-muted-foreground/0 '></div>
        </div>
        </div>
        <CtaButtons/>
      </div>

      <div className='pb-5 px-5 md:pt-24'>
        <BannerForm/>
      </div>

    </div>
  </div>
  )
}

export default TmtBanner