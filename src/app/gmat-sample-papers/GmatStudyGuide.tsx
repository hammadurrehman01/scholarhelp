import { CircleChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function GmatStudyGuide() {
  return (
    <div className='max-w-screen-xl mx-auto py-10 px-5 '>
    <div className='grid lg:grid-cols-3 grid-cols-1  rounded-xl bg-gray-200 dark:bg-zinc-800'>
        <div className=' px-5 col-span-2 pt-6 '>
            <h2 className='py-4 font-bold md:text-3xl text-xl '>Discover the Latest GMAT Sample Paper</h2>
            <h3 className='font-semibold md:text-2xl text-lg'>Take Valuable Guidelines In Preparation For the GMAT Exam</h3>
            <div className='pt-5  '>
                <Link target='_blank' rel='noopener noreferrer' href={'/Sample Papers & Study Guides/Study Guides/GMAT/gmat-study-guide.pdf'} className='rounded-lg px-4 py-2 bg-purple-600 text-zinc-200  hover:bg-gradient-to-r from-slate-900 to-violet-900 transition ease-in duration-500 delay-500 '>Download the Study Guide</Link >
            </div>
        </div>
        <div className=' px-3 py-4 col-span-1 '>
            <div>
                <Image className='rounded-lg' src={'/imgs/gmat-study-guide.jpg'} width={200} height={200} alt='gmat'></Image>
            </div>
        </div>
    </div>
    <h2 className='text-center pt-6 font-extrabold md:text-3xl text-xl '>Importance Of Sample Paper  </h2>
    <p className='text-center pt-2 font-medium '>Sample papers provide all the necessary guides for a student in order to prepare for the exam. The questions are also beneficial to analyze the paper pattern. However, it also identifies your weaker and stronger areas of the topic. Sample paper patterns could also help you to make strategies for managing time accordingly. Moreover, sample papers play an important role in order to guide you for the exam.</p>

    <ul className='pt-5 font-medium text-sm md:text-base'>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GMAT/gmat-sample-paper 1.pdf' passHref target='_blank' rel='noopener noreferrer'>
          gmat-sample-paper 1.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GMAT/gmat-sample-paper 2.pdf' passHref target='_blank' rel='noopener noreferrer'>
          gmat-sample-paper 2.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GMAT/gmat-sample-paper 3.pdf' passHref target='_blank' rel='noopener noreferrer'>
          gmat-sample-paper 3.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GMAT/gmat-sample-paper 4.pdf' passHref target='_blank' rel='noopener noreferrer'>
          gmat-sample-paper 4.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GMAT/gmat-sample-paper 5.pdf' passHref target='_blank' rel='noopener noreferrer'>
          gmat-sample-paper 5.pdf
          </Link>
        </li>
        
    

      </ul>

</div>
  )
}

export default GmatStudyGuide