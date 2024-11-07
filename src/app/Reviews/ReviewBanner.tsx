"use client"
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function ReviewBanner() {
    const [reviews, setReviews] = useState([
        { rating: 5, count: 900 },
        { rating: 4, count: 100 },
        { rating: 3, count: 50 },
        { rating: 2, count: 0 },
        { rating: 1, count: 0 },
      ])
      const totalReviews = reviews.reduce((acc, review) => acc + review.count, 0)
  return (

    <div className='w-full py-10'>
    <div className='bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]  '>
    <div className=" overflow-hidden grid md:grid-cols-2 items-center mx-auto max-w-screen-xl py-10">
      <div className=" ">
        <Image
          src="/imgs/reviews_bg.webp"
          loading='eager'
          alt="Product Image"
          width={800}
          height={600}
        />
      </div>
      <div className="p-6 md:p-10 grid gap-4">
        <h2 className="text-xl md:text-4xl font-bold  ">Client Reviews About Our Services</h2>
        <p className=' font-medium md:text-base text-sm '>Check out what our clients are saying about our services. See how our services provide satisfaction to them and discover why we are the most trusted website across the USA.</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
          </div>
          <span className="text-sm text-muted-foreground">
            {(reviews.reduce((acc, review) => acc + review.count * review.rating, 0) / totalReviews).toFixed(1)} out of
            5
          </span>
        </div>
        <div className="grid gap-2">
          {reviews.map((review, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {[...Array(review.rating)].map((_, index) => (
                <StarIcon key={index} className="w-4 h-4 fill-primary" />
              ))}
             {[...Array(5 - review.rating)].map((_, index) => (
                <StarIcon key={index} className="w-4 h-4 fill-muted stroke-muted-foreground" />
              ))}

              </div>
              <div className="flex-1 h-4 bg-muted rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full transition-all duration-500"
                  style={{ width: `${(review.count / totalReviews) * 100}%` }}
                />
              </div>
              <span className="text-sm text-muted-foreground">
                {review.count} ({((review.count / totalReviews) * 100).toFixed(0)}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default ReviewBanner