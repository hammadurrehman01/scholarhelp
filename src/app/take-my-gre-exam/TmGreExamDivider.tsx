import React from 'react'
import { CtaChat } from '../(Home)/_components/HeroSection'

function TmGreExamDivider() {
  return (
    <div className='mt-4'>
    <div style={{backgroundImage:"url('/imgs/bg_lcd.webp')",backgroundSize:'cover',backgroundPosition:'center'}}
    className='bg-fixed py-10 rounded-xl'>
        <div className=' mx-auto max-w-screen-xl p-5'>
            <div className='text-center'>
                <h2 className='font-extrabold text-white text-xl lg:text-[28px]'>Online Exam Help from Ph.D & Master Level Experts</h2>
                
            </div>
            <div className='flex justify-center'>
            <CtaChat/>
            </div>
        </div>
    </div>
</div>
  )
}

export default TmGreExamDivider