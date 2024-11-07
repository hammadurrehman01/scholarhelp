import Image from 'next/image'
import React from 'react'

function ToeflLongContent() {
    return (
        <div className='mx-auto max-w-screen-xl mt-10'>

            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5'>
                <div className=''>
                    <div data-aos="flip-down" className="md:pt-6 pt-8 "  >
                        <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">How To Take Toefl Exam Online </h2>

                        <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                            The Toefl exam helps to judge the non-native person’s English language for admission to foreign universities. In addition, This exam assesses language proficiency, which is the main factor for the admission criteria. This exam is globally accepted by 11,000 universities and many more institutions.

                            The TOEFl iBT Home edition would be a perfect choice if you’re unable to reach the examination center. This Toefl iBT Home gives you privacy to do your exam online monitored by a human proctor. This test pattern is known worldwide and has the same value as Toefl iBT.
                        </p>
                        <h3 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-xl md:font-bold flex justify-between group  ">Toefl Exam Guidelines: Take Mock Toefl Exam Online </h3>
                        <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                        Many students are seeking to go abroad for higher education, for better opportunities and for a better environment. While taking admission in foreign universities is not a cup of tea, Different universities have different requirements but there is a must requirement for language. Many students struggle to pass this exam. Takemyclassesonline.com is not only providing you with the best service for the toefl test but also giving students a mock test to help them to experience the exam format and build their confidence.
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

export default ToeflLongContent