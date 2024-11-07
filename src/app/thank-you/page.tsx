import { Loader2 } from 'lucide-react'
import { Metadata } from 'next';
import dynamic from 'next/dynamic'
import React from 'react'
const ThankOrder = dynamic(() => import('./ThankOrder'),{ssr:false,
  loading:()=><Loading/>,
})

export const metadata: Metadata = {
  title: 'Thank You for Your Ordered | Taking My Classes Online',
  description: `Thank you for your order! We appreciate your purchase and are excited to serve you. Check your email, WhatsApp, or SMS for confirmation details.`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/thank-you",
  },
};

function page() {
  return (
    <div>
        <ThankOrder/>
    </div>
  )
}

export default page

function Loading(){
  return (
<div className='flex justify-center items-center text-4xl bg-background h-screen '><Loader2 className='animate-spin mr-2 w-10 h-10'/> Loading...  </div>)
}