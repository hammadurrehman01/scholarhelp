"use client"
import React, { useState } from 'react'
import TGmatDivider from '../take-gmat-online-exam/TGmatDivider';
import Link from 'next/link';

function HesiLC2() {
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
                <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950   '>Take My HESI Exam: Get Expert Help Today</h2>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>In our ever-changing world, there are several opportunities to study and enhance technical skills, but many students struggle to locate the right teachers for their needs. We recognize that some repercussions make it difficult for pupils to prepare for tests. Takingmyclassesonline.com, on the other hand, offers its customers first-rate test preparation services, including the HESI A2 nursing entrance exam and others. Join us now and enjoy the benefits of <Link href={'/pay-someone-to-take-my-class'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150 '>  pay someone to do my exam </Link> while achieving the desired results at an affordable price.</p>


                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                HESI Nursing Exit Exam Overview.</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>The HESI nursing exit exam is held to measure the knowledge of basic subjects in order to understand future nursing subjects. However, Many students struggle to pass this exam and some struggle to get the desired marks to get admission in their desired institute. If you’re wondering “how to pass HESI a2 exams”. Our expert instructors use different strategies to help you to ace your exams and help you with expert guidance throughout their academic life.</p>

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

export default HesiLC2

function DynamicContent2() {
    return (
        <>
            <div className='mx-auto max-w-screen-xl mt-5'>
                <div className='p-5'>
                    <h2 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                    Benefits Of Online Learning Service </h2>

                    <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Online platforms have become a very prominent way of learning and developing skills. With many solutions to your problems, you can easily access any information in no time. However, Determining the perfect solution to your needs can be challenging but not with us. Join us now and get incredible service at an affordable price. Our service includes,<Link href={'/'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150 '>“Take my class for me”</Link>  and many more services  to help students in their educational life. We also guarantee that the money will be returned in case our efforts do not bring the desired outcomes. Although, your information is safe with us, so that no third party gains access to personal information.  </p>

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
                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'> Nursing Entrance Exam Resources</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>The instructors are highly certified in diverse methodologies and are experienced in different exam formats enabling you to achieve better results in your exams. However, The instructors used different strategies to support students in preparing for their exams with various exam resources. However, Students who are applying to take HESI exams are likely to take admission in Chamberlain University which requires higher marks in HESI exams. The HESI test at Chamberlain is a critical assessment of nursing students knowledge and competence for clinical practice.
                </p>

                <h3 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
                HESI Exit Exam Help For Your Success </h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>HESI Exit Exam Help is required for nursing students who want to achieve and exhibit their clinical nursing subjects. However, The HESI Assessment Next Generation is designed to test critical thinking and expertise before graduating. To pass the HESI exams, it is mandatory to pass the 8 subjects which covers your general knowledge as well as determine your thinking capability to understand the aspect of clinical skills in a comprehensive way. One of the reasons to utilize our service is that we fulfill our commitment by achieving great results in their exams. </p>

                <h3 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
                Preparation For HESI Admission Assessment Exam (A2)</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>The HESI Admission Assessment Exam (A2) is an important step for future nursing students in determining their preparedness for a nursing school. Moreover, Takingmyclassesonline.com is known for their commendable commitment to pass every student who knocks the doors for help. We aim to provide the best assistance through our expert instructors to help them achieve their goal in life. However, Our instructors make HESI test taking strategies to help the students who are looking to pass the HESI exams with exceptional marks.</p>

                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                What are the Strategies For Taking HESI Critical Thinking Exam</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Are you looking to find someone who can “ Take My HESI Exams” while developing your learning skills? If so, You’re in the right spot to hire our expert to take your HESI exams for you. However, This service will not only benefit you with good marks but also help you throughout your academic career.</p>

                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                Building Your Confidence For The HESI Exams</h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>
                The instructors use many strategies to help students to pass their exams. However, some students failed to gain confidence while doing the exams. Furthermore, our experts held many curricular activities and practice exams to build their confidence of doing exams. The HESI A2 scoring system assesses students performance in multiple academic areas and provides a composite score that represents their overall preparation for nursing school. Avail our “Take my HESI exam” service and achieve better results in your exams.
                </p>


            </div>
            
        </>
    )
}