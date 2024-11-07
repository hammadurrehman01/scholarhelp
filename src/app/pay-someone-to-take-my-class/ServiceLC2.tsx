"use client"
import { ArrowRightIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import ServiceDivider from './ServiceDivider';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css';

function ServiceLC2() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
      });
    
      useEffect(() => {
        Aos.init({
          duration: 800,
          disable: "mobile",
          offset: 100,
        });
      }, [inView]);

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
            <div  ref={ref} data-aos='fade-up'>
                <div className='mx-auto max-w-screen-xl mt-10'>
                    <div className='h-[2px] w-full bg-zinc-800'></div>
                    <div className='p-5'>
                        <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950   '>What Makes Students Search with ‘pay someone to do my online class’ </h2>
                        <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>Today’s learners choose flexible options for their academic journey due to their luxurious lifestyle; they prefer online platforms instead of physical classes. Actually, they require physical effort along with daily traveling, so that’s why they need online courses. For this reason, we have set up a perfect online classes platform for our learners where we ensure support and flexibility frequently. We have hired experts to take online courses on students’ behalf. While online learning is convenient and preferable, we maintain effective time management and self-discipline, which can be helpful for students with demanding schedules and personal or employment obligations. </p>


                        <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                            Can I Hire Someone to Take Online Classes to Offer Me Extra Classes</h3>
                        <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>Significantly, some students may find it difficult to understand the course content or struggle with particular courses with physical classes, so they need extra assistance through online classes where they seek professional help to achieve high grades. </p>

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

export default ServiceLC2


function DynamicContent2() {
    return (
        <>
            <div className='mx-auto max-w-screen-xl mt-5'>
                <div className='p-5'>
                    <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                    I need to Pay Someone to Take My Class Affordable and Focus on Student Learning Objective </h3>

                    <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>While teaching through online classes, our instructor set a goal of achieving students&apos; learning objectives. Actually, these objectives evaluate how much students&apos; skills are improved through this online lesson. However, if you’re looking to pay someone for <Link href={'/take-my-ged-for-me'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150 '> “Do my GED online”</Link>  or any other exam services, then this is the right learning platform for you. </p>

                    <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                    Utilize Marking Scheme and Subject Exam Resources </h3>

                    <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Our online lectures are designed with effective strategies and relevant sources. The instructors strictly follow the relevancy of the topic while delivering the lecture and ensure their explanations meet with the marking scheme and exam resources that is  </p>

                    <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                    Pay Someone to Take My Class and Priorities Lesson Tasks while Delivering According to the Students Approach </h3>

                    <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Our instructors break down their lectures in steps to get positive outcomes and reach students approach. This trick allows them to make students concepts step by step from basic to advanced levels. </p>

                    <h3 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
                    Can the Instructor Arrange Activities? Im Ready to pay someone to take my class</h3>
                    <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Your search about ‘Pay Someone to Take My Class’ ends now because of our online classes service.Because our instructor use different strategies to create impact on students and improve their learning skills </p>

                    <div className='flex items-center mt-3 '>
                    <ArrowRightIcon />
                    <p className='ml-2 text-sm md:text-base text-muted-foreground'>Take Practice Exams and Assessment</p>
                </div>
                <div className='flex items-center mt-3 '>
                    <ArrowRightIcon />
                    <p className='ml-2 text-sm md:text-base text-muted-foreground'>Engaging Students Minds through Brainstorming Activities</p>
                </div>
                <div className='flex items-center mt-3 '>
                    <ArrowRightIcon />
                    <p className='ml-2 text-sm md:text-base text-muted-foreground'>Interacting Students’ Attention through Recalling Activities</p>
                </div>
                <div className='flex items-center mt-3 '>
                    <ArrowRightIcon />
                    <p className='ml-2 text-sm md:text-base text-muted-foreground'>Promoting Online Peer Review and Peer Activities</p>
                </div>

                    <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
                    What Guarantees I Will Get If I Pay Someone to Do My Online Course for Me?</h2>

                    <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Takingmyclassesonline.com has been offering its keen services to students for decades. Our online instructor helps students to sort out their academic issues and polish their skills. Your learning improvement and skills development are our responsibility. Furthermore, paying for our service will not disappoint you and ensure your academic success and high achievements.
                    </p>

                </div>
            </div>
            <ServiceDivider />
        </>
    )
}


function DynamicContent1() {
    return (
        <>

            <div >
                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'> Paying Someone to Take Online Class is a Flexible Option Now </h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>According to my observation, students could be unmotivated to participate in physical education regularly. Hiring someone to take online courses in these circumstances may be helpful and much-needed support because it enables them to manage their learning task more effectively with other commitments and guarantees. Also, they get the help they require to polish their academic skills. However, it is essential to use these online platforms to get professional assistance.  </p>

                <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
                Take My Online Course for Me </h2>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Pay someone to complete an online class is the best way to get online class services. Also, Improving and enhancing your learning skills through online classes by paying someone to take my online class is a flexible and frequent way. As well as, now you don’t need to pay someone to complete an online course after joining our online services. You just need to fill out an order form and utilize our online service. Also, You can
                <Link href={'/take-gmat-online-exam'} className='text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150 '> take your GMAT online</Link> with our expert support to help you to achieve the desired grades. Furthermore, your search for cheap online service with ‘paying someone to take my online class’ ends now because we offer the best online cheap and affordable services. Save your money and develop your learning skills through our instructors. </p>

                <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
               What are the Strategies of Our Online Instructors </h2>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>There are many challenging subjects for students, but if you have professional experts with the right strategies, you can get a grip on every subject and easily enhance your skills. While preparing the lesson, they proceed with the following strategy that will help you to achieve your desired grades:</p>

                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                Pay Someone to Take My Class and Design Lesson Planning For Preparing Engaging Content </h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Engaging content is the most effective part of a successful lesson plan. Actually, it is believed that positive outcomes of the lesson are produced with students engagement. For this reason, our instructor makes sure the lesson content is delivered in a way that engages students and encourages them to participate actively.</p>

                <h3 className='font-extrabold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
                Can I Pay Someone to Take My Class Legit to Design Scheme of Work for Me </h3>
                <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>We believe in good management, so that’s why we design a scheme of work for each subject. Therefore, because of the scheme of work, the online expert manages all the tasks easily. This strategy effectively grooms students skills and prepares them for exams.</p>


            </div>
            
        </>
    )
}
