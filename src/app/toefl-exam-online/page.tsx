import React from 'react'
import ToeflBanner from './ToeflBanner'
import ToeflLongContent from './ToeflLongContent'
import ToeflFlow from './ToeflFlow'
import ToeflPoints from './ToeflPoints'
import ToeflFormContent from './ToeflFormContent'
import ToeflLongContent2 from './ToeflLongContent2'
import ToeFlFAQ from './ToeFlFAQ'
import ToeflCoreFeature from './ToeflCoreFeature'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: ' Take My TOEFL Exam Online Service | Hire Expert TOEFL Tutor  ',
  description: 'Hire the expert to take your TOEFL exam online, whether it’s iBT, Essentials, ITP, Junior or a primary. Get success on your TOEFL exams and get 100% results.',
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/toefl-exam-online",
  },
};

function page() {
  return (
    <div>
    <ToeflBanner/>
    <ToeflLongContent/>
    <ToeflFlow/>
    <ToeflPoints/>
    <ToeflFormContent/>
    <ToeflCoreFeature/>
    <ToeflLongContent2/>
    <ToeFlFAQ/>
    </div>
  )
}

export default page