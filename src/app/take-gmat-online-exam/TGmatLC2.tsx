"use client"
import React, { useState } from 'react'
import TGmatDivider from './TGmatDivider';
import Link from 'next/link';

function TGmatLC2() {
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
                <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950   '>Take My Classes Online : Ultimate Solution To Your Academic Success </h2>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>Balancing personal life with academics is difficult and it will become more stressful if your institution is far away from your home or your office. Balancing both is a challenge but online learning platform makes it very convenient to learn from it anytime and anywhere they want. While there are many students who are struggling to find the best instructor and someone who can take their class and make good notes for them. Asking, &apos;Where can I take the GMAT?&apos; You&apos;ve found the right guide. Don’t wait any longer. We hold your back so that you don’t have to worry about “how to give GMAT test”.</p>


                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                Where Can I Take The GMAT Best Assistance?</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>takemyclassesonline.com is one of the finest online platform, where every student deserves significant values from our highly certified instructors to help them in their preparation. Need to know where to take the GMAT? You&apos;ve come to the right spot. Our services are helping students for over a decade and giving them the ideal results so that they can continue to progress in their life.</p>

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

export default TGmatLC2

function DynamicContent2() {
    return (
        <>
            <div className='mx-auto max-w-screen-xl mt-5'>
                <div className='p-5'>
                    <h2 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                    What Guarantees I Will Get Good Grades</h2>

                    <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Takingmyclassonline has been helping students for over a decade and helping them to promote their educational journey with us. Many students struggle to find the best instructors for their academics. Our service prioritizes students and helps them to clear their doubts and queries. Although if we fail to give ideal results, we offer money back guarantee so that you won’t feel any loss for your money. Searching for where to take the GMAT services is now no longer a challenge for you. </p>

                </div>
            </div>
            <TGmatDivider />
        </>
    )
}


function DynamicContent1() {
    return (
        <>

            <div >
                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'> How Do You Take the GMAT Test? </h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>The most stressful question that has been asked the most by the student community is how to do the GMAT test. Every student has their own capability to learn, to perform and to exercise their skill, but mainly students struggle to find balance between their academic life and their work life. “Take my class for me” would be a better option for them to get higher exam marks. Wondering how to take the GMAT? Here&apos;s what you need to know. Similarly, Hiring someone to give your GMAT test will access better results in your academic exams as well as to provide essential support in your academic journey.
                </p>

                <h3 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
                Where Do I Take the GMAT at a Cost-Effective Price? </h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Not sure how to take the GMAT? We&apos;ve got you covered. Hiring someone to take a test will help you in your academic success. Hiring the best services and expert instructors could be difficult to find. TakeMyClassesOnline is a top platform that offers exceptional service and experienced instructors at a reasonable price. Our services include “do my exam for me” , “help me to score more in exam” and many more to help students in their academic life </p>

                <h3 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
                Utilize Marking Scheme and Subject Exam Resources : How To Give GMAT Test </h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>We use pertinent sources and practical tactics in the construction of our online classes. When giving a lecture, the instructors make sure that the material is relevant to the audience and that their explanations align with the marking criteria.</p>

                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                Can the Instructor Arrange Activities And Assist Me In GMAT Exam Online Test? </h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>If you’re searching for ‘Where do i take the GMAT Exam help service”, then you’re in the right direction. You’re not the only one struggling to find good grades in your GMAT exams. We help lots of other students to achieve good grades in their exams. Our expert instructor manages schedules according to the students routine and rejuvenates their interest in studies.</p>

                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                Where Can I Take The GMAT Help: Tips and Resources</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>
                By hiring our experts, you’re accessible to get support from our instructor 24/7, that can help you to reach new levels in your academic career. Our services provide the best tips and resources to elevate your learning experience and to help you to achieve better marks in your exams including
                 <Link href={'/toefl-exam-online'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150'> toefl exam online</Link> or <Link href={'/lsat-exam-prep'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150'> LSAT practice exam</Link> , We make sure that our students ace their exams. We secure your data only with us so that your privacy will not be extended to other sources. So make your move now and join us Today!
                </p>


            </div>
            
        </>
    )
}