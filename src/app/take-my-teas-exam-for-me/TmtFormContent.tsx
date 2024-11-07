import React from 'react'
import { CtaButtons } from '../(Home)/_components/HeroSection'
import Link from 'next/link'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

function TmtFormContent() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10'>
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5 mb-24'  >
        <div className=''>
            <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
            <Accordion type="single" defaultValue='item-1' collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold flex justify-between group  ">
                How Our Expert Instructor Can Help in Your TEAS Exam  </h2>
                </AccordionTrigger>
                <AccordionContent>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Our Experts are specialized in all subjects, providing comprehensive support to maximize your performance. Takingmyclassesonline.com is the most convenient learning platform, with experienced and skillful teachers. We aim to provide you with the best services, ensuring that you won’t face hurdles in your exams. Join us and get <Link href={'/lsat-exam-prep'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150 '> free practice for the LSAT exam</Link> with the assistance of 24/7 support. 
                </p>
                </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-2'>
                <AccordionTrigger>
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold flex justify-between group  ">
                Looking For An Affordable Service To Take Your TEAS Exam </h2>
                </AccordionTrigger>
                <AccordionContent>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Many students struggle to find a learning platform where they can get free education. Don’t worry! We assure you that every learner will get the same service whether going through a financial crisis or established. We believe in promoting equal rights. Take your chance and hire our instructors and get valuable guidance on the TEAS exam, <Link href={'/take-my-gre-exam'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150'> GRE home test</Link>  and for many more exams.	
                </p>
                </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-3'>
                <AccordionTrigger>
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold flex justify-between group  ">
                Take My TEAS Test for Me: Get Reliable Help.
                </h2>
                </AccordionTrigger>
                <AccordionContent>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Are you looking to find someone to “take my TEAS for me” to reduce your stress. You’re not alone! Many students seek assistance to make sure that they get the desirable scores that help in taking the admission in nursing school. Our tutors for the TEAS exam will help you in achieving the better results in your TEAS exams. However, Our TEAS test tutor can help you strengthen your study skills and improve your scores. Join us now and get premium assistance at an affordable price. 
                </p>
                </AccordionContent>
                </AccordionItem>
                </Accordion>

            </div>
            <CtaButtons />

        </div>

        <div data-aos="zoom-in-down" className=''>
            <div className='flex items-center justify-center mt-5'>
            <Image loading='eager' src={'/imgs/form-content-img.webp'} width={500} height={333} alt='content-img'>
            </Image>
            </div>
        </div>

    </div>
</div>
  )
}

export default TmtFormContent