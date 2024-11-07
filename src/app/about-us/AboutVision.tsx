
import Image from 'next/image'
import React from 'react'


function AboutVision() {

  return (
    <div className='mx-auto max-w-screen-xl my-10'  data-aos="zoom-in">
         <div className='border-b-2 border-muted-foreground'></div>
        <div className='grid lg:grid-cols-2 grid-cols-1 py-7 px-5 gap-3'>
            <div className='' data-aos="flip-up">
                <h2 className='text-2xl md:text-4xl font-extrabold mt-5 lg:mt-20 '>Our Aim For the Future</h2>
                <div className='border-b-2 w-52 border-muted-foreground mt-2'></div>
                <p className='text-sm md:text-base mt-2 text-muted-foreground'>We aim to make an educational hub, where students gather to get solutions for their academic problems. We aim to provide the basic channel where students share their innovative ideas and research and can provide expert assistance to help them in academic learning and also in their careers. To make a platform where students and faculty can explore new ideas, and make certain contributions in solving the world’s problematic challenges.</p>
            </div>
            <div className='' data-aos="flip-down">
                <div className='flex items-center'>
                    <Image src={'/about_us/vision_about_us.webp'} width={400} height={400} alt='vision'></Image>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default AboutVision