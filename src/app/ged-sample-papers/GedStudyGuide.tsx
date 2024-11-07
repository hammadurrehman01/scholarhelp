import { CircleChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function GedStudyGuide() {
  return (
    <div className='max-w-screen-xl mx-auto py-10 px-5 '>
    <div className='grid lg:grid-cols-3 grid-cols-1  rounded-xl bg-gray-200 dark:bg-zinc-800'>
        <div className=' px-5 col-span-2 pt-6 '>
            <h2 className='py-4 font-bold md:text-3xl text-xl '>Explore the Effective Guide Tips For GED exam</h2>
            <h3 className='font-semibold md:text-2xl text-lg'>Take Valuable Help from the GED sample paper and achieve the desirable result</h3>

            <div className='grid lg:grid-cols-2 grid-cols-1  '>
            <div className='pt-5  '>
                <Link target='_blank' rel='noopener noreferrer' href={'/Sample Papers & Study Guides/Study Guides/GED/GED_Study-Guide_Math.pdf'} className='rounded-lg px-4 py-2 bg-purple-600 text-zinc-200  hover:bg-gradient-to-r from-slate-900 to-violet-900 transition ease-in duration-500 delay-500 '>Download the Study Guide for Math</Link>
            </div>
            <div className='pt-5  '>
                <Link target='_blank' rel='noopener noreferrer' href={'/Sample Papers & Study Guides/Study Guides/GED/GED_Study-Guide_RLA.pdf'} className='rounded-lg px-4 py-2 bg-purple-600 text-zinc-200  hover:bg-gradient-to-r from-slate-900 to-violet-900 transition ease-in duration-500 delay-500 '>Download the Study Guide for RLA</Link>
            </div>
            <div className='pt-5  '>
                <Link target='_blank' rel='noopener noreferrer' href={'/Sample Papers & Study Guides/Study Guides/GED/GED_Study-Guide_Science.pdf'} className='rounded-lg px-4 py-2 bg-purple-600 text-zinc-200  hover:bg-gradient-to-r from-slate-900 to-violet-900 transition ease-in duration-500 delay-500 '>Download the Study Guide for Science</Link>
            </div>
            <div className='pt-5  '>
                <Link target='_blank' rel='noopener noreferrer' href={'/Sample Papers & Study Guides/Study Guides/GED/GED_Study-Guide_Social-Studies.pdf'} className='rounded-lg px-4 py-2 bg-purple-600 text-zinc-200  hover:bg-gradient-to-r from-slate-900 to-violet-900 transition ease-in duration-500 delay-500 '>
                Download the Study Guide for Social Studies</Link>
            </div>
            </div>

        </div>
        <div className=' px-3 py-4 col-span-1 '>
            <div>
                <Image className='rounded-lg' src={'/imgs/ged-study-guide.jpg'} width={200} height={200} alt='ged'></Image>
            </div>
        </div>
    </div>
    <h2 className='text-center pt-6 font-extrabold md:text-3xl text-xl '>Effective Ways Of Study </h2>
    <p className='text-center pt-2 font-medium '>The success in GED determines the effort that you’ve put into work. It is also mandatory to analyze the structure and techniques that you’re performing to get better results. This might affect the preparation process. One of the effective ways to prepare for the GED exams is to analyze the sample paper, which can provide confidence on how to do the exam, and practice GED exercises to boost your preparation for the exam.</p>


    <ul className='pt-5 font-medium text-sm md:text-base'>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GED/1001-GED-Practice-Questions-For-Dummies-by-Stuart-Donnelly.pdf' passHref target='_blank' rel='noopener noreferrer'>
            1001-GED-Practice-Questions-For-Dummies-by-Stuart-Donnelly.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GED/GED_OnlineTest_R2.pdf' passHref target='_blank' rel='noopener noreferrer'>
          GED_OnlineTest_R2.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GED/ged_sample_practice_test.pdf' passHref target='_blank' rel='noopener noreferrer'>
          ged_sample_practice_test.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GED/GED_Study-Guide_Science.pdf' passHref target='_blank' rel='noopener noreferrer'>
          GED_Study-Guide_Science.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GED/GED-Mathematical-Reasoning-Practice-Test-1.pdf' passHref target='_blank' rel='noopener noreferrer'>
          GED-Mathematical-Reasoning-Practice-Test-1.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GED/GED-Test-Preparation.pdf' passHref target='_blank' rel='noopener noreferrer'>
          GED-Test-Preparation.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GED/practice-math-test-1.pdf' passHref target='_blank' rel='noopener noreferrer'>
          practice-math-test-1.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GED/practice-math-test-2.pdf' passHref target='_blank' rel='noopener noreferrer'>
          practice-math-test-2.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GED/practice-reading-test-2.pdf' passHref target='_blank' rel='noopener noreferrer'>
          practice-reading-test-2.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GED/practice-social-studies-test-1.pdf' passHref target='_blank' rel='noopener noreferrer'>
          practice-social-studies-test-1.pdf
          </Link>
        </li>

      </ul>
    
</div>
  )
}

export default GedStudyGuide