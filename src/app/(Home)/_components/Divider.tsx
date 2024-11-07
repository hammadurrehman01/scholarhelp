import React from 'react'
import { CtaChat } from './HeroSection'


function Divider() {
  return (
    <div className='mt-4'>
        <div style={{backgroundImage:"url('/imgs/bg_lcd.webp')",backgroundSize:'cover',backgroundPosition:'center'}}
        className='bg-fixed py-10 rounded-xl'>
            <div className=' mx-auto max-w-screen-xl p-5'>
                <div className='text-center'>
                    <h2 className='font-extrabold text-white text-xl lg:text-[28px]'>Let our exam helper take care of your online exam! Get in touch with us today!</h2>
                    
                </div>
                <div className='flex justify-center'>
                <CtaChat/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Divider