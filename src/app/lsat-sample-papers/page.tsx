import React from 'react'
import LsatSampleContent from './LsatSampleContent'
import LsatStudyGuide from './LsatStudyGuide'
import LsatFaq from './LsatFaq'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free LSAT Sample Paper for your practice',
  description: `Practice for the LSAT with expert-developed LSAT sample papers. Improve your reasoning skills and be well-prepared for a successful law school admission journey!`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/lsat-sample-papers",
  },
};

function page() {
  return (
    <div>
        <LsatSampleContent/>
        <LsatStudyGuide/>
        <LsatFaq/>
    </div>
  )
}

export default page