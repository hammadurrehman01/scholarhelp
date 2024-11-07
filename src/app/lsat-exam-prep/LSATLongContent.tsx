import Image from 'next/image'
import React from 'react'

function LSATLongContent() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10'>

    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
        <div className=''>
            <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  "> Find the Best Service to Get LSAT Exam Online</h2>

                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                The LSAT exam is unlike any academic test that you’ve experienced. This exam is based on a multi-choice program designed to measure your preparedness for law school. Many prospective law students wonder &apos;How hard is the LSAT exam?&apos; as they prepare for this important test. So preparing for your law degree program can be crucial and tough. Don’t worry! We hold your back, With our services you’re able to get expert help in various exams. However, if you’re pursuing your career in law, The instructors will support you in LSAT exams and furthermore support you in the LLB program. Furthermore, Our expert instructors used different tactics to help you to pass this exam.Takemyclassesonline.com is a prominent website where you find many experts helping you in your relevant field and clearing your doubts in no time. Moreover, If you’re searching for how to study for the LSAT exam, then this is the right platform for you. Our experts make every lecture interesting which helps you in better understanding and also helps you in your exams.
                </p>
                <h3 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">Impact Role of Online Classes on LSAT Exam Preparation</h3>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                In this fast-paced world, There is diverse options for learning, yet many students find themselves struggling to find the best online platform. However, Online learning opens a portal for the tutor to teach the students globally and helps them to pass their exams.“Can anyone take the LSAT exam” is the most asked question. The answer to that is YES, anyone can give the test regardless of their age, identification, and other requirements. Now you might be wondering “How hard is the LSAT exam”. No wonder how difficult it is. You&apos;ll get the best assistance with our services so that you can get the best result in your exam.

                </p>
            </div>
        </div>

        <div data-aos="zoom-in-down" className=''>
            <div className='flex items-center justify-center mt-5'>
                <Image className='rounded-xl' loading='eager' src={'/imgs/lsat-1.webp'} width={800} height={800} alt='servicelc' ></Image>
            </div>
        </div>

    </div>
</div>
  )
}

export default LSATLongContent