import React from 'react'
import Order from './Order'
import { TopicProvider } from '../TopicContext'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Order Now | Taking My Classes Online',
  description: `Taking my classes online order form with complete details. So, hire professionals to take my class online. ⭐⭐⭐⭐⭐`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/order-now",
  },
};

function Page() {
  return (
    <div>
      <TopicProvider>
        <Order/>
      </TopicProvider>
 
    </div>
  )
}

export default Page