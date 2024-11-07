import React from 'react'
import PrivacyBanner from './PrivacyBanner'
import PrivacySection from './PrivacySection'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strictly Followed the Full Privacy Policies of the Company',
  description: `Takingmyclassesonline.com privacy policy emphasizes on security for their customers. Which is legal and third-party intervention and strictly discouraged.`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/privacy-policy",
  },
};

function Page() {
  return (
    <div>
        <PrivacyBanner/>
        <PrivacySection/>
    </div>
  )
}

export default Page