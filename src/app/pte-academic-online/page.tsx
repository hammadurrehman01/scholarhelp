import React from 'react'
import PteBanner from './PteBanner'
import PteLongContent from './PteLongContent'
import PteFlow from './PteFlow'
import PtePoints from './PtePoints'
import PteFormContent from './PteFormContent'
import PteCoreFeatures from './PteCoreFeatures'
import PteLongContent2 from './PteLongContent2'
import PteFaq from './PteFaq'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PTE Academic English Test Online | Guaranteed Best Score',
  description: `Get the complete guide to the PTE Academic Test online from the industry professionals for the USA. Helping to pass with 100% A+ Score guaranteed results.`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/pte-academic-online",
  },
};

function page() {
  return (
    <div>
        <PteBanner/>
        <PteLongContent/>
        <PteFlow/>
        <PtePoints/>
        <PteFormContent/>
        <PteCoreFeatures/>
        <PteLongContent2/>
        <PteFaq/>
    </div>
  )
}

export default page