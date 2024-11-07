import React from 'react'
import GmatSampleContent from './GmatSampleContent'
import GmatStudyGuide from './GmatStudyGuide'
import GmatFaq from './GmatFaq'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GMAT Sample Paper and Practice questions for you',
  description: `Get ready for the GMAT exam with high-quality GMAT sample papers that covers all the essential topics. Start practicing today and enhance your GMAT performance with focused preparation!`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/gmat-sample-papers",
  },
};

function page() {
  return (
    <div>
        <GmatSampleContent/>
        <GmatStudyGuide/>
        <GmatFaq/>
    </div>
  )
}

export default page