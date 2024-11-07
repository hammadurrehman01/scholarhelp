import React from 'react'
import TmtBanner from './TmtBanner'
import TmtLongContent from './TmtLongContent'
import TmtFlow from './TmtFlow'
import TmtPoints from './TmtPoints'
import TmtFormContent from './TmtFormContent'
import TmtCoreFeatures from './TmtCoreFeatures'
import TmtLongContent2 from './TmtLongContent2'
import TmtFaq from './TmtFaq'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hire to Take My TEAS Test for Me | 100% Great Results Surety ',
  description: `Are you still struggling on your Teas exams? don't you worry  because we offers take my TEAS exams online. Get a free quote at takingmyclassesonline.com!`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/take-my-teas-exam-for-me",
  },
};

function page() {
  return (
    <div>
        <TmtBanner/>
        <TmtLongContent/>
        <TmtFlow/>
        <TmtPoints/>
        <TmtFormContent/>
        <TmtCoreFeatures/>
        <TmtLongContent2/>
        <TmtFaq/>
    </div>
  )
}

export default page