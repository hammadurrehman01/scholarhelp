import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HesiExamLC() {
    return (
        <div className='mx-auto max-w-screen-xl mt-10'>

            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
                <div className=''>
                    <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
                        <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">How To Prepare for the HESI A2 Exam and Develop Learning Skills</h2>

                        <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                            Often, Many students struggle to find better guides for their learning subjects. However, some students manage to clear the exams. If you lie in the struggling category, Say no more. Takingmyclassesonline.com provides its prime service at an affordable price by helping every student to pass their exams with achievable marks.

                            We understand the importance of achieving good marks in the admission test, as it plays a crucial role in getting admission in desired universities. However, Through our expert guidance you’re able to achieve good marks in your exams including 
                            <Link href={'/toefl-exam-online'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150 '> toefl exam online</Link> , CAT exam for nursing and many more. Join Us Now and explore more benefits of <Link href={'/pay-someone-to-take-my-class'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150 '>  paying someone to do my exam.</Link>
                        </p>
                        <h3 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">Impact Of Online Learning On The HESI Critical Thinking Exam</h3>
                        <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                            In today’s rapidly growing environment, Online learning is becoming a prominent solution for learning and developing skills. It helps many students to improve their research skills and allows them to get benefits of vast learning resources. However, many students struggle to get better marks in their exams. However, We arrange many practice exams including HESI practice tests, <Link href={'/pte-academic-online'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150 '> online PTE academic preparation</Link>  by helping students to get experience of various exam formats.

                        </p>
                    </div>
                </div>

                <div data-aos="zoom-in-down" className=''>
                    <div className='flex items-center justify-center mt-5'>
                        <Image className='rounded-xl' loading='eager' src={'/imgs/gmat-1.webp'} width={800} height={800} alt='servicelc' ></Image>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HesiExamLC