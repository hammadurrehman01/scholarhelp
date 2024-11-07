import { CheckCheckIcon, HomeIcon, Package2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function ThankYouContact() {
  return (
    <div style={{backgroundImage:"url('/imgs/bg-thank-order.webp')",backgroundSize:'cover',backgroundPosition:'center'}} className="flex  flex-col items-center justify-center h-screen bg-background px-4 pb-24 pt-32 md:pt-2 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-screen-xl text-center scale-90 md:scale-100">
      <div className="inline-flex items-center rounded-full bg-violet-600 px-4 py-2 font-semibold text-zinc-200">
        <CheckCheckIcon className="mr-2 h-5 w-5" />
        <span>Thank You for Contacting Us</span>
      </div>
      <h1 className="mt-6 text-xl font-medium tracking-tight text-zinc-100  sm:text-2xl">
      Our experts will get in touch with you shortly.</h1>
      <p className="pt-3  mx-auto text-sm font-medium text-zinc-100 sm:text-base">
      Thank you for visiting! We’re grateful for the opportunity to connect with you and share our offerings. Your support means the world to us, and we’re committed to delivering exceptional service every step of the way. If you have any questions or feedback, please don’t hesitate to reach out—we’re here to help. Stay tuned for updates, exclusive content, and special offers designed just for you. Until then, thank you again for being a part of our community. We look forward to serving you and making a positive impact in all that we do.
</p>
      <div className="mt-6 flex flex-col items-center md:flex-row justify-center gap-4">
      <Link href="/" className="flex items-center justify-center hover:scale-105 transition ease-in duration-200 delay-200 py-3 bg-zinc-200 dark:bg-zinc-900 w-[200px] text-black dark:text-zinc-100 border-[2px] border-black dark:border-white rounded-lg" prefetch={false}>
           <HomeIcon className='mr-2'/> Return To Home
        </Link>
      <Link href="/" className="flex items-center justify-center hover:scale-105 transition ease-in duration-200 delay-200 py-3 bg-zinc-200 dark:bg-zinc-900 w-[200px] text-black dark:text-zinc-100 border-[2px] border-black dark:border-white rounded-lg" prefetch={false}>
           <Package2 className='mr-2'/> Order Now
        </Link>
      </div>
    </div>
  </div>
  )
}

export default ThankYouContact