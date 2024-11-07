import React from 'react'

function GedCoreFeatures() {
  return (
    <div data-aos='zoom-in' className='mx-auto max-w-screen-xl mt-10'>
    <h2  className='text-center font-extrabold text-xl md:text-[33px]  '>Key Features</h2>
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 py-5'>
        <div data-aos='flip-right' className='group'>
            <div className='h-[300px] border-[4px] border-muted-foreground rounded-tl-[50px] scale-90 group-hover:scale-95 lg:scale-95 lg:group-hover:scale-100 group-hover:rounded-tr-[50px] group-hover:rounded-bl-[50px] group-hover:rounded group-hover:shadow-2xl transition ease-in duration-200 delay-200  rounded-br-[50px] bg-gradient-to-t from-violet-500 via-purple-200 to-zinc-100 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] '>
                <h3 className='pt-10 text-center font-bold text-lg md:text-2xl'>Student-Oriented Lectures</h3>
                <p className='py-4 px-2 text-center font-medium  text-sm md:text-base '>Our expert instructors understand the needs of students in the learning process. While they design engaging lectures and arrange extra curricular activities to make more engagement of a student in their subjects.</p>
            </div>
        </div>


        <div data-aos='flip-left' className='group'>
            <div className='h-[300px] border-[4px] border-muted-foreground rounded-tr-[50px] scale-90 group-hover:scale-95 lg:scale-95 lg:group-hover:scale-100 group-hover:rounded-tl-[50px] group-hover:rounded-br-[50px] group-hover:rounded group-hover:shadow-2xl transition ease-in duration-200 delay-200  rounded-bl-[50px] bg-gradient-to-t from-violet-500 via-purple-200 to-zinc-100 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] '>
                <h3 className='pt-10 text-center font-bold text-lg md:text-2xl'>Live Support 24/7 Available</h3>
                <p className='py-4 px-2 text-center font-medium text-sm md:text-base  '>Utilize our live help through our experts to have your questions answered. Then, begin your learning adventure with our tutor to acquire good marks.</p>
            </div>
        </div>


        <div data-aos='flip-right' className='group'>
            <div className='h-[300px] border-[4px] border-muted-foreground rounded-tl-[50px] scale-90 group-hover:scale-95 lg:scale-95 lg:group-hover:scale-100 group-hover:rounded-tr-[50px] group-hover:rounded-bl-[50px] group-hover:rounded group-hover:shadow-2xl transition ease-in duration-200 delay-200  rounded-br-[50px] bg-gradient-to-t from-violet-500 via-purple-200 to-zinc-100 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] '>
                <h3 className='pt-10 text-center font-bold text-lg md:text-2xl'>Effective Instructional Methods</h3>
                <p className='py-4 text-center font-medium px-2 text-sm md:text-base  '>Our online instructors are trained teachers who understand current teaching methods and how to help learners grow their abilities.</p>
            </div>
        </div>

    </div>
</div>
  )
}

export default GedCoreFeatures