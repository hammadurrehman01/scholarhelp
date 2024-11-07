import React from 'react'

function TGmatCf() {
  return (
    <div data-aos='zoom-in' className='mx-auto max-w-screen-xl mt-10'>
    <h2  className='text-center font-extrabold text-xl md:text-[33px]  '>Core Features</h2>
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 py-5'>
        <div data-aos='flip-right' className='group'>
            <div className='h-[300px] border-[4px] border-muted-foreground rounded-tl-[50px] scale-90 group-hover:scale-95 lg:scale-95 lg:group-hover:scale-100 group-hover:rounded-tr-[50px] group-hover:rounded-bl-[50px] group-hover:rounded group-hover:shadow-2xl transition ease-in duration-200 delay-200  rounded-br-[50px] bg-gradient-to-t from-violet-500 via-purple-200 to-zinc-100 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] '>
                <h3 className='pt-10 text-center font-bold text-lg md:text-2xl'>Learner-Centered Lecture</h3>
                <p className='py-4 px-2 text-center font-medium  text-sm md:text-base '>The instructors focus on creating high quality content to provide support for student needs. The
central-learning lectures are scheduled as per student need as they don’t feel any disturbance in their everyday life.
</p>
            </div>
        </div>


        <div data-aos='flip-left' className='group'>
            <div className='h-[300px] border-[4px] border-muted-foreground rounded-tr-[50px] scale-90 group-hover:scale-95 lg:scale-95 lg:group-hover:scale-100 group-hover:rounded-tl-[50px] group-hover:rounded-br-[50px] group-hover:rounded group-hover:shadow-2xl transition ease-in duration-200 delay-200  rounded-bl-[50px] bg-gradient-to-t from-violet-500 via-purple-200 to-zinc-100 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] '>
                <h3 className='pt-10 text-center font-bold text-lg md:text-2xl'>24/7 Support</h3>
                <p className='py-4 px-2 text-center font-medium text-sm md:text-base  '>We prioritize our students and value their time for us. That&apos;s why we offer 24/7 support, ensuring they can focus on their education without added stress.</p>
            </div>
        </div>


        <div data-aos='flip-right' className='group'>
            <div className='h-[300px] border-[4px] border-muted-foreground rounded-tl-[50px] scale-90 group-hover:scale-95 lg:scale-95 lg:group-hover:scale-100 group-hover:rounded-tr-[50px] group-hover:rounded-bl-[50px] group-hover:rounded group-hover:shadow-2xl transition ease-in duration-200 delay-200  rounded-br-[50px] bg-gradient-to-t from-violet-500 via-purple-200 to-zinc-100 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] '>
                <h3 className='pt-10 text-center font-bold text-lg md:text-2xl'>Professional Teaching Methodology</h3>
                <p className='py-4 text-center font-medium px-2 text-sm md:text-base  '>Hiring one of our experts will definitely gain you profit in your academic journey. Our expert instructors are highly certified and are skilled in various methodologies, providing valuable support for both your studies and exam preparation.</p>
            </div>
        </div>

    </div>
</div>
  )
}

export default TGmatCf