import React from 'react'
import LSATBanner from './LSATBanner'
import LSATLongContent from './LSATLongContent'
import LSATFlow from './LSATFlow'
import LSATPoints from './LSATPoints'
import LSATFormContent from './LSATFormContent'
import LSATCoreFeature from './LSATCoreFeature'
import LSATLongContent2 from './LSATLongContent2'
import LSATFaq from './LSATFaq'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: ' Hire Someone to take my LSAT Exam for Me: High Grade Result  ',
  description: 'Most of the schools required applicants to take the LSAT exam, for the fall admission. We offers the preparation of the same LSAT test at affordable prices.',
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/lsat-exam-prep",
  },
};

function page() {
  return (
    <div>
        <LSATBanner/>
        <LSATLongContent/>
        <LSATFlow/>
        <LSATPoints/>
        <LSATFormContent/>
        <LSATCoreFeature/>
        <LSATLongContent2/>
        <LSATFaq/>
    </div>
  )
}

export default page