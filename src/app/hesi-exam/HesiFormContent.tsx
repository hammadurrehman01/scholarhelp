import React from 'react'
import { CtaButtons } from '../(Home)/_components/HeroSection'
import Link from 'next/link'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

function HesiFormContent() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10'>
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
        <div className=''>
            <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
            <Accordion type="single" defaultValue='item-1' collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold flex justify-between group  ">
                Route to Nursing School Achievement with the HESI A2 Nursing Entrance Exam</h2>
                </AccordionTrigger>
                <AccordionContent>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                The HESI exam is an essential step for nursing students seeking to get admission in their desired university. However, passing the exams is not a cup of tea. Furthermore, Our expert instructors not only help in HESI test preparation but also help students to pass the HESI critical thinking exam with desired marks. If youre asking, What is the HESI conversion score? Its a standardized number that measures a students performance on the HESI test.
                </p>
                </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-2'>
                <AccordionTrigger>
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold flex justify-between group  ">
                HESI Practice Tests</h2>
                </AccordionTrigger>
                <AccordionContent>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Are you struggling to get the best assistance in your exams and want to get desired marks for the admission in your favorite nursing academy? Say no more! Takingmyclassesonline.com is helping students from all over the world to cover their exams and give them the best support for their studies to clear their doubts and answer their queries. The services include,<Link href={'/take-my-teas-exam-for-me'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150 '> ”take my TEAS for me”</Link> , “LPN preparation” and many more services to help you to score more. We held HESI practice tests to give you the experience of the HESI exam format which helps you to do your exam confidently.
                </p>
                </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-3'>
                <AccordionTrigger>
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold flex justify-between group  ">
                Looking For An Affordable Service: Where Can Someone Take My HESI Exam? 
                </h2>
                </AccordionTrigger>
                <AccordionContent>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                In our quick moving society, It is difficult to find the best tutor for guiding and learning. However, Our platform is one of the finest learning platform where thousands of students take services at such affordable prices. However, Our aim is to make the platform convenient for all of the students to take benefits of our service at an cost-effective price. Join Us and take benefits of “Take My HESI exam” services and excel in your HESI exams.
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

export default HesiFormContent