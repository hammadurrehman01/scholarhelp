import { CircleChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function LsatStudyGuide() {
  return (
    <div className='max-w-screen-xl mx-auto py-10 px-5 '>
    <div className='grid lg:grid-cols-3 grid-cols-1  rounded-xl bg-gray-200 dark:bg-zinc-800'>
        <div className=' px-5 col-span-2 pt-8 '>
            <h2 className='py-4 font-bold md:text-3xl text-xl '>Check out the LSAT Exam Paper Guide</h2>
            <h3 className='font-semibold md:text-2xl text-lg'>Get Detailed study guide from the latest LSAT sample paper</h3>
            <div className='pt-5  '>
            <Link target='_blank' rel='noopener noreferrer' href={'/Sample Papers & Study Guides/Study Guides/LSAT/LSAT Self-Study Plan 2024-2025.pdf'} className='rounded-lg px-4 py-2 bg-purple-600 text-zinc-200  hover:bg-gradient-to-r from-slate-900 to-violet-900 transition ease-in duration-500 delay-500 '>Download the Study Guide</Link>
            </div>
        </div>
        <div className=' px-3 py-4 col-span-1 '>
            <div>
                <Image className='rounded-lg' src={'/imgs/lsat-study-guide.PNG'} width={200} height={200} alt='gmat'></Image>
            </div>
        </div>
    </div>
    <h2 className='text-center pt-6 font-extrabold md:text-3xl text-xl '>Tips and Techniques for Preparation for the LSAT exam </h2>
    <p className='text-center pt-2 font-medium '>Preparing for the LSAT exam is difficult. However, we have developed a list of simple procedures that will allow you to complete your preparations quickly. Fortunately, it needs your attention to detail, focus, and prioritization, which will bring you to your preferred law university. You should begin your preparation by completing law tasks that will help you clarify your concepts and doubts. In addition, we have discussed several strategies that will help you prepare for the GMAT exam. </p>

    <ul className='pt-5 font-medium text-sm md:text-base'>
        <li className='flex items-center py-2'> <CircleChevronRight className='mr-3 w-5 h-5'/> Task timetable: Create a comprehensive timetable and write down all topics. Write the issues in the order of precedence that require your attention.</li>
        <li className='flex items-center py-2'> <CircleChevronRight className='mr-3 w-5 h-5'/>Practice: Make sure to complete the topic exercises and go over the subject subjects on a regular basis. This will help you clear your mind and increase your learning abilities.</li>
        <li className='flex items-center py-2'> <CircleChevronRight className='mr-3 w-5 h-5'/>Guidelines from an Expert: Obtaining professional guidance can assist you in your preparation while also condensing the curriculum for you based on the value of the topic in relation to the test. </li>

    </ul>

    <ul className='pt-5 font-medium text-sm md:text-base'>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/LSAT/LSAT-Sample-Paper-1.pdf' passHref target='_blank' rel='noopener noreferrer'>
          LSAT-Sample-Paper-1
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/LSAT/LSAT-Sample-Paper-2.pdf' passHref target='_blank' rel='noopener noreferrer'>
          LSAT-Sample-Paper-2
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/LSAT/LSAT-Sample-Paper-3.pdf' passHref target='_blank' rel='noopener noreferrer'>
          LSAT-Sample-Paper-3
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/LSAT/LSAT-Sample-Paper-4.pdf' passHref target='_blank' rel='noopener noreferrer'>
          LSAT-Sample-Paper-4
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/LSAT/LSAT-Sample-Paper-5.pdf' passHref target='_blank' rel='noopener noreferrer'>
          LSAT-Sample-Paper-5
          </Link>
        </li>
   
        
    

      </ul>

</div>
  )
}

export default LsatStudyGuide