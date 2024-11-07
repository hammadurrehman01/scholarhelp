import React from 'react'
import { CtaButtons } from '../(Home)/_components/HeroSection'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'


function GedFormContent() {
    return (
        <div className='mx-auto max-w-screen-xl mt-10'>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
                <div className=''>
                    <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
                        <Accordion type="single" defaultValue='item-1' collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold flex justify-between group  ">
                                        Check Out How “Take My GED Exam For Me” Help You In Academics </h2>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                                        We have dedicated and commendable tutors which help students 24/7 to answer their questions and sort out their queries. We believe in equality and thus provide service equally to our students. If you’re struggling to find the assistance for your GED test, you can avail our service which not only benefits you in this exam but also supports in exam preparation while providing resources to help you in various exam formats.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value='item-2'>
                                <AccordionTrigger>
                                    <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold flex justify-between group  ">
                                        Looking For Affordable “Take My GED Exam For Me” Service? </h2>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                                        Wondering where to get the best “Take My GED Exam For Me” service? Look no further! Takingmyclassesonline.com has been providing its service for over a decade and helping students to succeed in their exams as well as in their academic life. Our past records are the evidence of our service which helps many students across the world to achieve incredible marks in every exam which enable them to take admission in their desired universities. Join us now and be a part of our successful community.We offer assistance to many students in need of it, without requiring someone to take my GED exam.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value='item-3'>
                                <AccordionTrigger>
                                    <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold flex justify-between group  ">
                                        How Paying Someone Can Enhances My Learning Skills
                                    </h2>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                                        Tutors will also help you improve your ability to comprehend the different GED test sections. You will be able to address one area of weakness at a time with the help of an individual, which will boost your confidence and help you apply what you have learned more effectively. Another advantage of using online resources to do my GED online is the ability to tailor a course of study to suit a students needs. This will further improve your comprehension and raise your chances of passing the GED exam.
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

export default GedFormContent