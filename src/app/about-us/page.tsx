import React from 'react'
import AboutBanner from './AboutBanner'
import AboutProcess from './AboutProcess'
import AboutVision from './AboutVision'
import AboutNumbers from './AboutNumbers'
import 'aos/dist/aos.css';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Taking My Classes Online which is Rated No.1 in terms of their quality work.',
  description: `Being in the business for 10 years. Taking My Classes Online has many positive reviews from the clients. Concern with us and get more information about us.`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/about-us",
  },
};


function Page() {
  return (
    <div  >
    <AboutBanner/>
    <AboutProcess/>
    <AboutNumbers/>
    <AboutVision/>
    </div>
  )
}

export default Page