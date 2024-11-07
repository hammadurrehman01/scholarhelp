import Image from 'next/image'
import React from 'react'

function TmeLc() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10'>

    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
        <div className=''>
         <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  "> Looking for Online Exam Help Services? </h2>

                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Online education transforms how we learn, making education accessible to most people at a nominal cost. With diverse learning options, Online education is one of the most easy and accessible learning platforms. Taking my online class will be beneficial while if you’re looking to pay someone to take my online test, then you should take a look at the takemyclassesonline.com. It has an experienced team to help you to do your assignment in no time.
                Online platforms are an essential place to help students throughout the world to unleash their potential to its fullness. So hire someone to take my online exam and make your time into what matters the most. 
                </p>
                <h3 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">Secure Good grades with our Online Exam help</h3>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Getting good grades is the most important consideration for every student. However, preparing for examinations can be difficult. You can pay someone to do my online exam with us! Not only you’ll be able to get expert advice but we also help you to attain higher grades.  So If you&apos;re searching for “Pay someone to take my  online classes&apos; then you&apos;re on the right track. Our Experts ensure that you pass the examinations and also help you to achieve exceptional results.

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

export default TmeLc