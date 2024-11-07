"use client"
import React, { useState } from 'react'
import TGmatDivider from '../take-gmat-online-exam/TGmatDivider';
import Link from 'next/link';

function PteLongContent2() {
    const [showMore, setShowMore] = useState(false);

    const handleButtonClick = () => {
        if (showMore) {
            // Scroll to the top of the page
            window.scrollTo({ top: 3900, behavior: 'smooth' });
        }
        setShowMore(!showMore);
    };
  return (
    <>
    <div data-aos='fade-up'>
        <div className='mx-auto max-w-screen-xl mt-10'>
            <div className='h-[2px] w-full bg-zinc-800'></div>
            <div className='p-5'>
                <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950   '>Take My Classes Online : Get Expert Help Today </h2>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>In the building block of every student, there is one teacher who helps him throughout their academic life. However, Takingmyclassesonline.com has been providing its service to the student community for an extended period to support them in their academic career as well as to support them in achieving their goals. Our experts use different strategies to teach students more effectively and help them to improvise their skills.
                </p>


                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                PTE Academic Online Mock Tests For Preparation</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>The instructors used extra curricular activities to help students prepare for the exam. Our experts provide pte academic sample tests online and offer more sample tests to help you in preparation for exams. We prioritize our student&apos;s privacy and use it to make our service better for them. Whether it&apos;s 
                <Link href={'/take-my-ged-for-me'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150'>  Take my GED for me </Link>or any other service, we are here to assist you to get better results.</p>

                {showMore ? <DynamicContent1 /> : null}

            </div>

            {showMore ? <DynamicContent2 /> : null}
        </div>

        <div className='flex justify-center items-center mt-3'>
            <button
                className='px-5 py-2 rounded-xl bg-violet-500 font-medium text-zinc-100'
                onClick={handleButtonClick}
            >
                {showMore ? 'Read less' : 'Read More'}
            </button>
        </div>


    </div>

</>
  )
}

export default PteLongContent2

function DynamicContent2() {
    return (
        <>
            <div className='mx-auto max-w-screen-xl mt-5'>
                <div className='p-5'>
                    <h2 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                    Benefits Of Online Learning Service</h2>

                    <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>As a result, online learning services are extremely advantageous for students studying for the PTE Academic Test since they allow them to study from home in their own comfort. The individual has free access to practice online with the PTE Academic test and free PTE Academic speaking practice exam online, which helps him focus and remember skills better, increasing his confidence in answering questions more accurately and effectively.  </p>

                </div>
            </div>
            <TGmatDivider/>
        </>
    )
}


function DynamicContent1() {
    return (
        <>

            <div >
                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>  Why Do I Can I Hire Someone to Take My PTE Academic Online Course?</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>Hiring someone to take your PTE academic online course will have some impact on your studies. You can perform your prime commitment while our expert handles your online course for you. It will not only help you attend class on your behalf but also make notes to make you understand it more clearly so you don’t have to search for pte academic study material online
                </p>

                <h3 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
                PTE Academic Online Test: Achieve Your Goals</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>This PTE Academic Online Test assesses the English skills of non-native speakers seeking admission to any specific university. In terms of online services that can help you prepare for your test, many students have found help at TakingMyClassesOnline.com, a well-known website, for study support and score enhancement. </p>

                <h3 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
                PTE Test Centers Across The US</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>The PTE test centers across the United States provide convenient places for students to take the PTE Academic exam. With cutting-edge facilities, these institutes provide a pleasant testing atmosphere that promotes peak performance. Whether you are preparing for higher education or professional possibilities, PTE test centers around the United States are ready to help you achieve.</p>

                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                Building Your Confidence For The PTE Exam</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>To reach the desired outcome of the PTE exam, it is critical to establish confidence. Knowing the format of the test and preparing with genuine materials will help one become acclimated to the type of questions and activities that will be presented. Utilize PTE listening academic test 1 online free with PDF and improve your learning capability.
                </p>

                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                Utilize Exam Resources And Marking Scheme</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>
                Our online courses are built on practical tactics and relevant sources. While presenting the lecture, the instructors pay close attention to the topic&apos;s relevance and ensure that their explanations are consistent with the grading scheme
                </p>


            </div>
            
        </>
    )
}