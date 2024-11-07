import React from 'react'
import { CtaButtons } from '../(Home)/_components/HeroSection'
import Link from 'next/link'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

function TGmatFormContent() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10'>
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
        <div className=''>
            <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
            <Accordion type="single" defaultValue='item-1' collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  "> How Our Expert Helps You To Take Your GMAT Online</h2>
                </AccordionTrigger>
                <AccordionContent>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Takemyclassesonline.com is popular among students because of their loyalty and their premium services. Most students struggle to find the right choice for their GMAT test and yet fail to achieve good marks in their exams. Our aim is to help every student to deal with their academics and help them to reduce their academic stress.  “Where do I take the GMAT at a cheap package” is now no longer a search with us! We treat every student equally and help them to accomplish their goals.
                </p>
                </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-2'>
                <AccordionTrigger>
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">
                Hire an Expert And Take Your GMAT Online and Develop Learning Skills</h2>
                </AccordionTrigger>
                <AccordionContent>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Wondering where to take the GMAT Exam? You&apos;re in the right place. Our expert instructors are here to help you with their advice and help you to do your exams and achieve remarkable results through their knowledge and experience. Our Website has highly certified teachers which are known for their tactics and expertise in different exam formats, Which not only helps the student to secure good grades but also helps them to accomplish their goals and help them throughout their academic journey. You can find your GMAT score through the official website.
                </p>
                </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-3'>
                <AccordionTrigger>
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  "> where can i take the GMAT Services?
                </h2>
                </AccordionTrigger>
                <AccordionContent>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Getting the best GMAT assistance will be very tough to find but don’t further, We provide every student with our special services so that they won’t feel any hurdles on their side.
                <Link href={'/pay-someone-to-take-my-class'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150'> paying someone to take my class</Link>  will definitely help you to increase chances for better marks. Our services will help you stay up to date with the world and also help in their exams so that you don’t have to ask for “how many times can you take the GMAT test?”.
                </p>
                </AccordionContent>
                </AccordionItem>
                </Accordion>

            </div>
            <CtaButtons />

        </div>

        <div data-aos="zoom-in-down" className=''>
            <div className='flex items-center justify-center mt-5'>
            <Image loading='eager' src={'/imgs/form-content-img.webp'} width={500} height={333} alt='content-img'></Image>
            </div>
        </div>

    </div>
</div>
  )
}

export default TGmatFormContent