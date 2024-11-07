import React from 'react'
import TmGreExamBanner from './TmGreExamBanner'
import TmGreExamLC from './TmGreExamLC'
import TmGreExamFlow from './TmGreExamFlow'
import TmGreExamPoints from './TmGreExamPoints'
import TmGreExamFc from './TmGreExamFc'
import TmGreExamLC2 from './TmGreExamLC2'
import TmGreExamFAQ from './TmGreExamFAQ'
import TmGreCf from './TmGreCf'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: ' Get the Best PTE Academic Online Exam  | A+ Score Guaranteed ',
  description: 'Secure and accurate PTE test at home, by preparation of takingmyclassesonline.com with their mock test, sample papers, and proper guidance to the students.',
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/take-my-gre-exam",
  },
};

function page() {
  return (
    <div>
    <TmGreExamBanner/>
    <TmGreExamLC/>
    <TmGreExamFlow/>
    <TmGreExamPoints/>
    <TmGreExamFc/>
    <TmGreCf/>
    <TmGreExamLC2/>
    <TmGreExamFAQ/>
    </div>
  )
}

export default page