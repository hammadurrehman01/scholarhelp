import React from 'react'
import ServiceBanner from './ServiceBanner'
import ServiceLC from './ServiceLC'
import ServiceFlow from './ServiceFlow';
import ServicePoints from './ServicePoints';
import ServiceFormContent from './ServiceFormContent';
import ServiceCF from './ServiceCF';
import ServiceLC2 from './ServiceLC2';
import ServiceFaq from './ServiceFaq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: ' Get Pay Someone to Take My Online Class: High Grade Surety ',
  description: 'Get Pay someone to take your online class from takingmyclassesonline.com and get 50% off on the first order, stress-free experiences with expert writers.',
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/pay-someone-to-take-my-class",
  },
};


function Page() {
  return (
    <div>
        <ServiceBanner/>
        <ServiceLC/>
        <ServiceFlow/>
        <ServicePoints/>
        <ServiceFormContent/>
        <ServiceCF/>
        <ServiceLC2/>
        <ServiceFaq/>
    </div>
  )
}

export default Page