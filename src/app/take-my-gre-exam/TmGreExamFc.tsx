import React from 'react'
import { CtaButtons } from '../(Home)/_components/HeroSection'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

function TmGreExamFc() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10'>
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
        <div className=''>
            <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
            <Accordion type="single" defaultValue='item-1' collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold flex justify-between group  ">
                How our Expert helps you to take GRE test online</h2>
                </AccordionTrigger>
                <AccordionContent>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Takemyclassesonline.com is popular among students for their remarkable support and lectures in the student community, giving its prime service to the student community for over a decade and acknowledging them to know how to take the GRE exam. Every student has their own capability and we ensure to utilize their full potential to help them grow in their educational journey as well in their professional life. Take a look at our expert’s team and how we help to take the GRE test online and check out the reviews and feedback to make sure that you get the best support for your studies.
                </p>
                </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-2'>
                <AccordionTrigger>
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold flex justify-between group  ">
                Looking For “where to get the gre test affordable services?”</h2>
                </AccordionTrigger>
                <AccordionContent>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Searching for where I can pay someone to take my exam in person? No worries! Our online expert instructors are known for their teaching methodology, where they assist every student and help them and to clear their doubts and help them to know how do i take the GRE test. Our online podium is always available in your service, either you need any advice or need any assistance in your exam. We are here to help you with everything. So hire the experts from our website and unlock your full potential in your desired field.
                </p>
                </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-3'>
                <AccordionTrigger>
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold flex justify-between group  ">
                Need Help Finding Where to Take the GRE Test?
                </h2>
                </AccordionTrigger>
                <AccordionContent>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                No need to hesitate on your GRE exam because we provide legit GRE help to make sure that each student gets achievable results and scores good marks in their exam. We answer your ideal question “Where to take the GRE test” with our best service. Our expert instructors are responsible for your academic success. Get assistance on how do i take the GRE test and  Seek guidance from our experts and reach new levels of heights in your education journey.
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

export default TmGreExamFc