import React from 'react'
import GedBanner from './GedBanner'
import GedLongContent from './GedLongContent'
import GedFlow from './GedFlow'
import GedPoints from './GedPoints'
import GedFormContent from './GedFormContent'
import GedCoreFeatures from './GedCoreFeatures'
import GedLongContent2 from './GedLongContent2'
import GedFaq from './GedFaq'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hire GED Test Help Online, Take My GED Exam | Get A+ Score',
  description: `We can make it possible by providing you take the GED test online in many areas covered. GED exam has been going to online administration, get the best tutor.`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/take-my-ged-for-me",
  },
};

function page() {
  return (
    <div>
        <GedBanner/>
        <GedLongContent/>
        <GedFlow/>
        <GedPoints/>
        <GedFormContent/>
        <GedCoreFeatures/>
        <GedLongContent2/>
        <GedFaq/>
    </div>
  )
}

export default page