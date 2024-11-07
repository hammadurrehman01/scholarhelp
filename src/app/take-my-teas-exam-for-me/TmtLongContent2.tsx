"use client"
import React, { useState } from 'react'
import TmGreExamDivider from '../take-my-gre-exam/TmGreExamDivider';
import Link from 'next/link';

function TmtLongContent2() {
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
                <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950   '>Take My Classes Online : A Step To Success </h2>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>Online education has become pivotal resources for students seeking flexibility and convenience. Takingmyclassesonline.com is offering a solution for every student to balance their academic and work life, allowing you to focus on studies without the constraint of a classroom setting.<Link href={'/'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150 '>“Take my classes for me” </Link>  Service will assure you to achieve exceptional marks in your exams. We have hired experts to take online courses on students’ behalf. We maintain an effective schedule, ensuring that every student gets the support they need to succeed.  </p>


                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                I Want to Pay Someone to Take My TEAS Test</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>Most of the students are unmotivated to participate in physical education regularly . While in this fast-paced world, there is a diverse range of options for learning. Well the most prominent is Online learning. Moreover, It not only helps to build learning concepts but also helps to develop more skills. However, Students also struggle to find the best assistance for their studies. In this case hiring some to give your exam will be a prominent solution to help you to achieve better results. Our experts not only help you to <Link href={'/toefl-exam-online'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150'> take the toefl test online</Link>  or any other exams and also assist you throughout your academic journey.</p>

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

export default TmtLongContent2

function DynamicContent2() {
    return (
        <>
            <div className='mx-auto max-w-screen-xl mt-5'>
                <div className='p-5'>
           

                    <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
                    Where can i take my TEAS test and Guarantee Good Marks</h2>

                    <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Takingmyclassesonline.com has been offering its services for over a decade. Our past records are the evidence of our success. Our main motto is to help every struggling student who is seeking guidance or finding a better learning platform for them. By joining us, you’re not only able to get good guides and good notes but we also make you our first priority which enables you to get the best service at an affordable price.
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
                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>Take My TEAS For Me At Cheap </h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>Discover “where can I take your TEAS test” for a smooth exam experience. Our expert instructors have been helping students for over a decade and helping them to achieve their goals and strengthening their weaknesses. We support every student and make their concept strong to help them to analyze the problem and to solve it. However, our service also helps students to take their TEAS exams, <Link href={'/take-my-gre-exam'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150'> GRE test from home </Link> and many more exams to help them to achieve higher grades.
                </p>

                <h3 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
                Strategies of Our Online Instructors</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>We hire professional and highly certified instructors which helps to strengthen your grip on your academic program. They arrange engaging content and dynamic activities to help students to polish their skills and enhance their research work. Take my TEAS exam for me Reviews often highlight the performance of the service and its support to students to help them succeed in their academic life.</p>

                <h3 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
                What Are The Objectives Of Lesson Planning</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Our aim is to provide every student with valuable education which helps them in sorting out their stress and queries. This platform has many services including <Link href={'/hesi-exam'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150 '> “take my HESI exam for me”</Link>  and many more to help you to achieve better results.</p>

                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                Advantages Of Marking Scheme And Subject Exam Resources </h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Our online experts used different learning strategies and relevant sources. While giving the lecture, the instructors pay careful attention to the topics applicability and make sure their justifications fit the scoring criteria.</p>

                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                Exam Resources for Effective Tutoring</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Our instructors ensure that every student prevails exam resources which helps them to improve their exam results and also helps them to rejuvenate their thinking capability. However, We ensure that your personal data is kept safe with us and protected from third-party websites.</p>
                </p>


            </div>
            
        </>
    )
}