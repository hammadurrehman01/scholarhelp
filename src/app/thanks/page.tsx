import { Loader2 } from 'lucide-react'
import { Metadata } from 'next';
import dynamic, { noSSR } from 'next/dynamic'
import React from 'react'
const ThankYou = dynamic(() => import('./ThankYou'),{ssr:false,
    loading:()=><Loading/>,
})


export const metadata: Metadata = {
  title: 'Thank You for Your Feedback | Taking My Classes Online',
  description: `customer feedback, improve service, thank you for feedback, user opinion, feedback form, customer satisfaction. `,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/thanks",
  },
};

function page() {
  return (
    <ThankYou/>  
  )
}



export default page


function Loading(){
    return (
<div className='flex justify-center items-center text-4xl bg-background h-screen '><Loader2 className='animate-spin mr-2 w-10 h-10'/> Loading...  </div>)
}