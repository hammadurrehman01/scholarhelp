import React from 'react'
import { CtaButtons } from '../(Home)/_components/HeroSection'
import Link from 'next/link'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

function TmeFormContent() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10'>
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
        <div className=''>
            <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
            <Accordion type="single" defaultValue='item-1' collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold flex justify-between group  ">
                Explore How Pay Someone To Take My Online Exam Can help you to achieve Good Grades</h2>
                </AccordionTrigger>
                <AccordionContent>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                If you’re looking for a place to hire someone to take your test, our online platform is here to help. Our aim is to support the struggling learners who may find some hurdance in their studies, offering the right guidance to help you succeed in your exams. If you’re having difficulty getting the grades you want, it is the perfect time to hire someone to take your online exam and boost your scores.
                </p>
                </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-2'>
                <AccordionTrigger>
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold flex justify-between group  ">
                Hire Someone to Take My Online Exam: Get Help when you need it </h2>
                </AccordionTrigger>
                <AccordionContent>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                We provide high-quality lectures and special support to help you succeed in your learning journey. With our expert advice, You won&apos;t be overwhelmed by your studies since we&apos;ll make everything easier for you to access. We have covered you with all the assistance readers want at such economical prices.
                </p>
                </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-3'>
                <AccordionTrigger>
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold flex justify-between group  ">
                Hire Someone to do my online exam and Develop my learning Skills?
                </h2>
                </AccordionTrigger>
                <AccordionContent>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Our online instructors utilize effective teaching methods to improve your thinking ability and practical skills, better preparing you for success in the workplace. Our expert’s proficiency will also help you in getting good grades in the <Link href={'/take-gmat-online-exam'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150 '>GMAT exam online test</Link> and guide you throughout your academic journey. So now you can balance your routine and workload and let your academic work be on us by hiring the expert from takemyonlineclasses.com. Use our cheap exam helper and ace in your every exam.
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

export default TmeFormContent