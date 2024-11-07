import React from 'react'
import GreSampleContent from './GreSampleContent'
import StudyGuide from './StudyGuide'
import GreFaq from './GreFaq'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GRE Sample Paper with Proper Guide',
  description: `Prepare with our GRE sample papers designed for effective practice and score improvement. Access high-quality questions and boost your confidence before test day.`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/gre-sample-papers",
  },
};

function page() {
  return (
    <div>
    <GreSampleContent/>
    <StudyGuide/>
    <GreFaq/>
    </div>
  )
}

export default page