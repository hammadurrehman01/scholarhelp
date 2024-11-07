import Image from 'next/image'
import React from 'react'

function TmtLongContent() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10'>

    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
        <div className=''>
         <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  "> Find The Best Service To Take My TEAS For Me</h2>

                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                The TEAS is an assessment used primarily for admission in nursing programs. It also examines the preparedness of a student to get enrolled in a nursing or any health program. The exam has two editions, either on campus or through ATI TEAS Exams under the provision of a proctor. Many students struggle to find the best assistance for the TEAS exams and often fail in their exams. However, Our experts provide exceptional service which will help you to pass the exams in your very first attempt. 
                </p>
                <h3 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">The Impact of Online Classes</h3>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Online learning has transformed the way of learning as it provides the convenience and reliability to an individual to flourish their learning skills. However, you can get many answers to your question making it more confusing to understand. Moreover, If you’re finding the right tutor for your educational assistance then takingmyclassesonline.com is the right platform for you. You can avail many services including “Tutor for the TEAS exam” and much more for your academic success.

                </p>
            </div>
        </div>

        <div data-aos="zoom-in-down" className=''>
            <div className='flex items-center justify-center mt-5'>
                <Image className='rounded-xl' loading='eager' src={'/imgs/takemyexamLC.webp'} width={800} height={800} alt='servicelc' ></Image>
            </div>
        </div>

    </div>
</div>
  )
}

export default TmtLongContent