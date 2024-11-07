import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './FormTab'
import Image from 'next/image';
import { Star, StarHalf } from 'lucide-react';

function ReviewTabs() {
  const reviews = [
    {
      name: 'Rebecca Steve',
      text: `Exams are one of the toughest and can change the course of one’s education journey. I was struggling to grasp the concepts but then I came across these tutors. They made the whole learning journey fun and exciting. I didn't just manage to clear my exam but I did so with flying colours. `,
      rating: 4.5,
    },
    {
      name: 'Robert Harry',
      text: `I usually study late at night as I have a day job. The problem for me is that I couldn't clear my queries late at night so I needed someone who would be there 24/7. This website solved my problems as their tutors are available round the clock. Now, with my concepts clear, I am ready for my exams.`,
      rating: 4.5,
    },
    {
      name: 'Noah Solomon',
      text: `Not only are they efficient, they are affordable too. I prepared for my exams within a tight budget and there was no compromise on quality at all. Highly recommended`,
      rating: 4.5,
    },
    {
      name: 'Sarah Gough',
      text: `I passed my exams with exceptional grades. This was not a possibility before but when I availed the services of this website, I knew I was in safe hands. Thanks a ton!`,
      rating: 4,
    },
    {
      name: 'Darren Mitchell',
      text: `If I was to give this website a nickname, it would be exam-busters! Superduper expertise over nearly all subjects. I say this out loud that if you want to prepare for your exams then contact these guys!`,
      rating: 5,
    },
    {
      name: 'Maria Warren',
      text: `No need to take physical classes. These folks help you with your exam online. Comfort and excellence at their finest.`,
      rating: 4.5,
    },

  
  ];
  const reviews2 = [
    {
      name: 'Damien',
      text: `I was looking for online classes to help with my BS studies and luckily came across this service. Their engaging lectures and focus on my specific subjects greatly enhanced my understanding and boosted my learning skills.`,
      rating: 4.5,
    },
    {
      name: 'Conor',
      text: `Choosing their online exam service was one of the best decisions I've made. They provide a highly helpful, customized, and dedicated service. `,
      rating: 4.5,
    },
    {
      name: 'Robbie',
      text: `I have used taking my classes online service countless times. They made things so easy for me while I worked and took care of my other tasks. They are reliable and affordable for online learning development.`,
      rating: 4.5,
    },
    {
      name: 'Rory',
      text: `I have used the Taking My Classes Online service numerous times, and they made the process so simple for me while I managed my work and other responsibilities. They are dependable and offer affordable options for online exam assistance.`,
      rating: 4.5,
    },
    {
      name: 'Carlos',
      text: `I'm very pleased with their online exam services and highly recommend them. The staff is incredibly accommodating and professional, and I truly value their dedication and hard work.`,
      rating: 4.5,
    },
    {
      name: 'George',
      text: ` An outstanding and unique online exam service! Their affordable packages were a lifesaver for me when I was struggling financially. Thanks to their budget-friendly option, I could easily access the support I needed. `,
      rating: 4.5,
    },
  
  ];
  const reviews3 = [
    {
      name: 'Lyla peter',
      text: `I was feeling very nervous and anxious because my LSAT test was looming. However, somehow, I landed on their website and ordered their LSAT services. Trust me, They exceeded my expectations. They handled my exam well and completed it on time, making me very happy.`,
      rating: 5,
    },
    {
      name: 'Jemma Maizie',
      text: `This is the first time that I have had online LSAT exam help. I didn't have much faith in online services before, but these guys completed my LSAT exam and organized the online exam very well. They completed the task ahead of schedule. I would suggest you all try their services too. `,
      rating: 4.5,
    },
    {
      name: 'Harper Jack',
      text: `I had an online logical reasoning test, which was quite difficult; I understood some things, and Takingmyclassesonline.com helped everything else. My experience is amazing; their LSAT exam service is very good.`,
      rating: 5,
    },
    {
      name: 'Jaxon Parker',
      text: `Their support is truly amazing. They listened to me carefully, understood all my requirements in detail and implemented them. They finished my LSAT exam 10 minutes before the scheduled time. If you are a student and want to get into a good school, I would recommend that you take their LSAT exam help services. Their team is very professional, and because of them, I have got good marks.`,
      rating: 4.5,
    },
    {
      name: 'Cooper Easton',
      text: `I wanted to get admission to law school but wasn’t Prepared for the LSAT test. When I found out about Takingmyclassesonline.com. I immediately placed an order. Their LSAT exam helper gave me a lot of confidence that I would pass the test, and indeed, I did. With their help, I got excellent grades on the LSAT test.`,
      rating: 4.5,
    },
    {
      name: 'Hailee Jenny',
      text: ` I was not sure I would ever pass the LSAT exam. I was very worried, but when I ordered their LSAT test help service and got full marks, I was very satisfied with their excellent service. Their team is truly amazing, and I would recommend that everyone hire them. `,
      rating: 4.5,
    },
  
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} fill="currentColor" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" fill="currentColor" />);
    }
  
    for (let i = stars.length; i < 5; i++) {
      stars.push(<Star key={`empty-${i}`} />);
    }
  
    return stars;
  };

  const ReviewCard = ({ name, text,rating }:{name:string,text:string,rating:number}) => (
    <div className='group'>
      <div className='w-full  bg-muted/50  rounded-xl border-[2px] scale-95 group-hover:scale-100 group-hover:shadow-xl transition ease-in duration-200 delay-200 '>
        <div className="flex items-center p-2 mt-3">
          <div className="flex items-center bg-white rounded-full w-12 h-12 overflow-hidden">
            <Image className="object-cover blur-sm" src={'/imgs/tp-rating-1.png'} alt="rating" width={44} height={64} />
          </div>
          <div className='flex-col ml-4'>
            <p className='text-[16px] font-bold'>{name}</p>
            <div className='flex items-center mt-1 text-yellow-500 fill-amber-400'>{renderStars(rating)}</div>
          </div>
        </div>
        <p className=' p-2 font-medium  text-sm'>{text}</p>
        <div className='border-b-2 border-muted translate-y-2 w-full'></div>
        <div className="flex items-center p-2 mt-3">
          <div className="flex items-center bg-white rounded-full w-12 h-12 overflow-hidden">
            <Image className="object-cover" src={'/assets/weblogo.png'} alt="rating" width={44} height={64} />
          </div>
          <div className='flex-col ml-4'>
            <div className='text-[16px] font-bold'>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</div>
            <div className='text-gray-500 font-medium text-sm'>{process.env.NEXT_PUBLIC_WEBSITE_NAME}.com</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className='py-10 max-w-screen-xl mx-auto'>
        <h2 className='text-center text-3xl font-extrabold my-4 '>Our Client’s Review</h2>
        <div>
          <Tabs defaultValue='1'>
            <TabsList className='flex flex-col md:flex-row'>
              <TabsTrigger value="1">Take My Exam</TabsTrigger>
              <TabsTrigger value="2">Take My GRE Exam</TabsTrigger>
              <TabsTrigger value="3">Take LSAT Exam Online</TabsTrigger>
            </TabsList>
            <TabsContent value='1'>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-5 '>
              {reviews.map((review, index) => (
          <ReviewCard key={index} name={review.name} text={review.text} rating={review.rating} />
        ))}
              </div>

            </TabsContent>
            <TabsContent value='2'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-5 '>
              {reviews2.map((review, index) => (
          <ReviewCard key={index} name={review.name} text={review.text} rating={review.rating} />
        ))}
              </div>

            </TabsContent>
            <TabsContent value='3'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-5'>
              {reviews3.map((review, index) => (
          <ReviewCard key={index} name={review.name} text={review.text} rating={review.rating} />
        ))}
              </div>

            </TabsContent>
          </Tabs>

        </div>
    </div>
  )
}

export default ReviewTabs

