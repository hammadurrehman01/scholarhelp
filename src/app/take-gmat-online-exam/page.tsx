import React from 'react'
import TGmatBanner from './TGmatBanner'
import TGMATLongContent from './TGMATLongContent'
import TGmatFlow from './TGmatFlow'
import TGmatPoints from './TGmatPoints'
import TGmatFormContent from './TGmatFormContent'
import TGmatCf from './TGmatCf'
import TGmatLC2 from './TGmatLC2'
import TGmatFAQ from './TGmatFAQ'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: ' Hire an Expert to Take My GMAT Exam for Me | Surety A+ Result ',
  description: 'Takingmyclassesonline.com offers take my GMAT exam for me with Installment fees option, Location must be mention of your area for taking the online exam.',
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/take-gmat-online-exam",
  },
};

function page() {
  return (
    <div>
    <TGmatBanner/>
    <TGMATLongContent/>
    <TGmatFlow/>
    <TGmatPoints/>
    <TGmatFormContent/>
    <TGmatCf/>
    <TGmatLC2/>
    <TGmatFAQ/>
    </div>
  )
}

export default page