"use client"
import React, { useState } from 'react'
import TmGreExamDivider from '../take-my-gre-exam/TmGreExamDivider';
import Link from 'next/link';

function ToeflLongContent2() {
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
                <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950   '>How To Take TOEFL Test Online : A Complete Guide </h2>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>The initial step required for the toefl test is to register yourself for the toefl exam. However, if you’re struggling to do the preparation for the Toefl exam you can hire someone to do your exam. Online platform is a vast learning platform where you can hire someone to teach or help you to prepare for any kind of exam, For example TOEFl practice exam, <Link href={'/lsat-exam-prep'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150'> LSAT practice exam </Link>  and many more. We have highly educated instructors which not only help you in preparing for exams but also help you throughout your academic journey.</p>


                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                How Our TOEFL Score Guarantee Works</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>Takingmyclassesonline.com provides support to the students who are looking for help in exams. We aim to help every student in their academic progress, empowering them to accomplish their goals in life. Our instructors provide engaging lectures and with great guidance which helps students for many exam preparation. Including Entrance exam for LPN, the <Link href={'/take-my-gre-exam'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150 '> GRE test from home</Link>  and many more. Hire our experts and get the assistance for your academic growth.</p>

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

export default ToeflLongContent2

function DynamicContent2() {
    return (
        <>
            <div className='mx-auto max-w-screen-xl mt-5'>
                <div className='p-5'>
                    <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
                    TOEFL Exam Online: Steps to Success</h2>

                    <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Takingmyclassesonline.com has offered amazing services to the students for over a decade to help them in their exams and in their academic life. Our expert instructor helps students to sort out their academic issues and polish their skills. Provide all students with examination resources and conduct TOEFL mock exams to help them experience the exam structure and build confidence. Just find your TOEFL score by logging into your ETS account.
                    </p>

                </div>
            </div>
            <TmGreExamDivider />
        </>
    )
}


function DynamicContent1() {
    return (
        <>

            <div >
                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'> Benefit Of Taking TOEFL Exam Online</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>Considering TOEFL iBT exam online will be a better option if you’re not able to reach the examination hall or have issues on dates. Hiring someone to take your TOEFL exam will be a prominent solution as it helps you to get better results. You can become more comfortable with the test structure and do better on the real exam by taking a mock TOEFL exam online. For an easy testing experience, sign up to take the TOEFL online.
                </p>

                <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
                How Can I Take The TOEFL Exam Online </h2>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>There are two kinds of the TOEFL iBT test, one that requires you to sit in an examination hall and administer the test and another which permits you to take the test sitting at your home in front of a human proctor supervising you at all times on the test. Once you have given your TOEFL test, you can check your TOEFL iBT home edition result via their official website.</p>

                <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
                What are the Strategies of Our Online Instructors</h2>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Our instructors are well-versed in every exam format. They are specialized in their respective fields which helps our students to get benefits from their service. Utilize the &quot;Take my class for me&quot; service and fulfill your all academic needs
                </p>

                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                Student Learning Objective </h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Our goal is to offer our students the very best, no matter how robust their concepts are. We have a TOEFL score guarantee to give you complete confidence that you will get the score for admission into your desired school.</p>

                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                Advantage Of Subject Resources</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Our experts help you from “How to register for TOEFL exam online” to mastering effective test-taking strategies. The teachers strictly follow the relevancy of the topic while presenting the lecture and guarantee their explanations match the marking scheme.</p>
                </p>


            </div>
            
        </>
    )
}