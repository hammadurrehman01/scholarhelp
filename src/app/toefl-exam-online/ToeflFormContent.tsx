import React from 'react'
import { CtaButtons } from '../(Home)/_components/HeroSection'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

function ToeflFormContent() {
  return (
    <div className='mx-auto max-w-screen-xl mt-10'>
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
        <div className=''>
            <div data-aos="flip-down" className="md:pt-6 pt-8 ">
            <Accordion type="single" defaultValue='item-1' collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold flex justify-between group  ">
                How To Prepare For Toefl Exam Online</h2>
                </AccordionTrigger>
                <AccordionContent>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Preparing for any exam is not a cup of tea, unless your concepts are clear. Moreover, many students struggle to find the best tutor for their academic career by helping them to pass their exams. Furthermore, There are hundreds of students who applied for foreign universities to get better education while it’s difficult to pass the toefl iBT exam online. Takingmyclassesonline.com is not helping students to prepare for this exam but also helping them to get the desired achievable results so that they can get admission in the top universities.
                </p>
                </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-2'>
                <AccordionTrigger>
                <h3 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold flex justify-between group  ">
                How To Take Toefl Exam Online Service At a Cheap Price: A Complete Guide</h3>
                </AccordionTrigger>
                <AccordionContent>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Are you looking for “How can I take the TOEFL test with good grades?”, look no further, Takingmyclassesonline.com is one of the finest website across the globe which helps you in preparation for Toefl exams. Our experts assist you 24/7 so that you can clear your doubt in no time. They not only give you interesting lectures and curricular activities, they hold mock toefl exams online so you can experience the toefl exam format and boost up your confidence level.
                </p>
                </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-3'>
                <AccordionTrigger>
                <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold flex justify-between group  ">
                How To Take the Toefl Exam Online: Creating Your Study Schedule
                </h2>
                </AccordionTrigger>
                <AccordionContent>
                <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                Creating an effective schedule for the preparation of the TOEFL exam can be crucial for preparation. The experts analyze language weaknesses, ensuring to address all the areas in a limited period of time. However, The experts also help you to do your toefl exam test online so you can acquire great results in your exams.
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

export default ToeflFormContent