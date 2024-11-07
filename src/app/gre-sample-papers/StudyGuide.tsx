import { CircleChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function StudyGuide() {
  return (
    <div className='max-w-screen-xl mx-auto py-10 px-5 '>
        <div className='grid lg:grid-cols-3 grid-cols-1  rounded-xl bg-gray-200 dark:bg-zinc-800'>
            <div className=' px-5 col-span-2 pt-6 '>
                <h2 className='py-4 font-bold md:text-3xl text-xl '>Check Out Gre Sample Paper</h2>
                <h3 className='font-semibold md:text-2xl text-lg'>Get detailed paper to help you out in preparation for the GRE exam</h3>
                <div className='pt-5  '>
                    <Link target='_blank' rel='noopener noreferrer' href={'/Sample Papers & Study Guides/Study Guides/GRE/gre-study-guide.pdf'} className='rounded-lg px-4 py-2 bg-purple-600 text-zinc-200  hover:bg-gradient-to-r from-slate-900 to-violet-900 transition ease-in duration-500 delay-500 '>Download the Study Guide</Link>
                </div>
            </div>
            <div className=' px-3 py-4 col-span-1 '>
                <div>
                    <Image className='rounded-lg' src={'/imgs/GRE-study-guide.jpg'} width={200} height={200} alt='gre'></Image>
                </div>
            </div>
        </div>
        <h2 className='text-center pt-6 font-extrabold md:text-3xl text-xl '>Take Expert Guidelines</h2>
        <p className='text-center pt-2 font-medium '>Every student has faced this issue in preparation for finding the live guide to help them clear their concept. However, it is a very crucial and very important phase where students find difficulty in answering practice exam questions. Moreover, taking guidance from experts is a must in order to be fully prepared for the GRE exam. </p>

        <ul className='pt-5 font-medium text-sm md:text-base'>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GRE/7643(www.entrance-exam.net)-GRE Sample Paper 1.pdf' passHref target='_blank' rel='noopener noreferrer'>
          7643(www.entrance-exam.net)-GRE Sample Paper 1.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GRE/gre-practice-test-1-quant-18-point.pdf' passHref target='_blank' rel='noopener noreferrer'>
          gre-practice-test-1-quant-18-point
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GRE/GRE-Prep-2018-Practice-Tests.pdf' passHref target='_blank' rel='noopener noreferrer'>
          GRE-Prep-2018-Practice-Tests.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GRE/gre-sample-paper 1.pdf' passHref target='_blank' rel='noopener noreferrer'>
          gre-sample-paper 1.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GRE/gre-sample-paper 2.pdf' passHref target='_blank' rel='noopener noreferrer'>
          gre-sample-paper 2.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GRE/gre-sample-paper 2.pdf' passHref target='_blank' rel='noopener noreferrer'>
          gre-sample-paper 2.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GRE/gre-sample-paper 3.pdf' passHref target='_blank' rel='noopener noreferrer'>
          gre-sample-paper 3.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GRE/gre-sample-paper 4.pdf' passHref target='_blank' rel='noopener noreferrer'>
          gre-sample-paper 4.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GRE/gre-sample-paper 5.pdf' passHref target='_blank' rel='noopener noreferrer'>
          gre-sample-paper 5.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GRE/gre-sample-paper 6.pdf' passHref target='_blank' rel='noopener noreferrer'>
          gre-sample-paper 6.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GRE/gre-sample-paper 7.pdf' passHref target='_blank' rel='noopener noreferrer'>
          gre-sample-paper 7.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GRE/gre-sample-paper 8.pdf' passHref target='_blank' rel='noopener noreferrer'>
          gre-sample-paper 8.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GRE/gre-sample-paper 9.pdf' passHref target='_blank' rel='noopener noreferrer'>
          gre-sample-paper 9.pdf
          </Link>
        </li>
        <li className='flex items-center py-2'>
          <CircleChevronRight className='mr-3 w-5 h-5' />
          <Link className='text-blue-500 hover:underline' href='/Sample Papers & Study Guides/GRE/gre-sample-paper 10.pdf' passHref target='_blank' rel='noopener noreferrer'>
          gre-sample-paper 10.pdf
          </Link>
        </li>
    

      </ul>

    </div>
  )
}

export default StudyGuide