import React from 'react'
import HesiBanner from './HesiBanner'
import HesiExamLC from './HesiExamLC'
import HesiFlow from './HesiFlow'
import HesiPoints from './HesiPoints'
import HesiFormContent from './HesiFormContent'
import HesiCoreFeatures from './HesiCoreFeatures'
import HesiLC2 from './HesiLC2'
import HesiFaq from './HesiFaq'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hire Expert for HESI A2 Exam | Take My HESI Test for Me Online ',
  description: `Are you seeking for a reliable and trustworthy way to take my HESI exam OR A2 online! From takingmyclassesonline.com with experts with tailored study plans.`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/hesi-exam",
  },
};

function page() {
  return (
    <div>
        <HesiBanner/>
        <HesiExamLC/>
        <HesiFlow/>
        <HesiPoints/>
        <HesiFormContent/>
        <HesiCoreFeatures/>
        <HesiLC2/>
        <HesiFaq/>
    </div>
  )
}

export default page