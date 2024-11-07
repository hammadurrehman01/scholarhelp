"use client"
import { ArrowRightIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Divider from './Divider'
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css';

function LongContent() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
      });
    
      useEffect(() => {
        Aos.init({
          duration: 800,
          disable: "mobile",
          offset: 100,
        });
      }, [inView]);
    const [showMore, setShowMore] = useState(false);

    const handleButtonClick = () => {
        if (showMore) {
          // Scroll to the top of the page
          window.scrollTo({  top: 2700, behavior: 'smooth' });
        }
        setShowMore(!showMore);
      };

    return (
        <>
        <div ref={ref}  data-aos='fade-up'>
            <div className='mx-auto max-w-screen-xl mt-10'>
                <div className='h-[2px] w-full bg-zinc-800'></div>
                <div className='p-5'>
                    <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950   '>How Much to Pay Someone to Take My Class </h2>
                    <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>Your academic success is our mission. At takingmyclassesonline.com, we guarantee you the fulfillment of your academic requirements. Furthermore, we ensure customized help to achieve your academic goals and improve through your online classes. Moving on, our online instructors and professional teachers play a vital role in achieving academic distinction. Our service aims to stand out from competitors through active and engaged online classes. If you are looking for an expert to take your online classes, then you don’t need to think about <Link href={'/pay-someone-to-take-my-class'} className=' text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150'> ‘pay someone to take online class’.</Link>  Just join our classes because we are here to help you achieve your objective and grow your learning journey. Believing in us, our online classes offer hands-on assistance and support so you can remove any academic hurdle.</p>

                   
                    <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
                        Why Choose takingmyclassesonline.com to Take My Online Classes? </h2>
                    <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>While deciding,  takingmyclassesonline.com will surely be a perfect decision as it stands for creativity and trustworthiness. The core of our staff is based on experts who are well-versed in the applied field and committed to helping you achieve your targeted goals. With takingmyclassesonline.com, we allow you to appreciate that your academic issues take preferences over other tasks. Consequently, our online classes relieve your stress and give you piece of mind and other engagements. We offer a regular and proper schedule and design your lesson system so your classes are engaging and finished on according to the appropriate schedule. </p>

                    {showMore ? <DynamicContent1 /> : null}
                    
                </div>

                {showMore ? <DynamicContent2 /> : null}
            </div>
        
        <div className='flex justify-center items-center mt-3'>
        <button
          className='px-5 py-2 rounded-xl bg-violet-500 font-medium text-zinc-100'
          onClick={handleButtonClick}
        >
          {showMore ? 'Read less' : 'Read More'}
        </button>
         </div>
 
        
            </div>

        </>
    )
}

export default LongContent


function DynamicContent2() {
  return (
    <>
    <div className='mx-auto max-w-screen-xl mt-5'>
    <div className='p-5'>
        <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
            Why do students often say do my online class? </h2>

        <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>When you have to travel a long way to reach your university and the long journey makes you tired before reporting to the department, in this situation, you prefer online classes instead of physical classes. Furthermore, you can overlook your submissions due to a lack of time. Consider yourself in a situation where you are seeking an online degree from a college and have more than three courses in parallel. Will you handle two subjects in parallel? What if one of the physical classes is not as interesting as it may look? Hence, the burden of physical classes can be troublesome for people who are already short on time. Our online classes can take the burden off your shoulders and help you ace multiple online classes simultaneously. </p>

        <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
            Engaging and Effective Learning Environment for Online Classes </h2>

        <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>If you are looking for someone to ‘take online classes for me’, we provide a leading and top-ranked online class platform where every student does matter, and it is easy to enhance your learning skills. Furthermore, we provide <Link href={'/take-gmat-online-exam'} className=' text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150'>  GMAT exam online test preparation</Link>. Also, we build an effective environment for developing your studies and securing high grades. Besides quality education, we prioritize our schedule and deadlines when we take your online class. Moreover, an online class helper ensures you complete your course outlines in a timely manner. You will be notified by email by our online instructor. We guarantee grades A* and distinction through our online services, as well as our online class help service comes with grade guarantees. We are committed to providing the best assistance with your online classes if you are thinking about ‘take my online course for me’. Furthermore, we arrange some learning activities for students that develop their learning approach, and through this way, an engaging environment is established that gives fruitful results to take class online. Lastly, our online courses require you to do group projects and interact with your peers. Our professional online class instructor polishes your skills through innovative ideas and unique teaching methodology. </p>

        <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
            Hire Our Online Instructor & Avoid scammers</h2>

        <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>It has been observed that when students search with ‘take my math class for me,’ they come across scammers and they lose their money and time as well. We ve been in the industry for years and have seen it all regarding scams. There are sites with representatives with English names but strange accents on the phone. You cant just hire someone while searching with ‘take my class online for me’. Many scams pretend they will help but really want nothing more than to scam and blackmail unsuspecting victims. </p>

        <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
            Why Join Our Taking My Classes Online Best Platform</h2>

        <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>It has been observed that when After reaching our online classes platform, selecting the best platform for polishing your skills and developing your learning journey is the easiest task. Now, you don’t need to search with ‘take online course for me.’ We are the best option for your academic journey to innovate your minds and enhance your learning approach. The following leading key figures make us the best choice for your online classes.  </p>

        <h3 className='font-bold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'> Do My Classes for Me with Affordable and Cheap Packages</h3>
        <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Our packages have been adjusted to consider your financial burdens when pursuing ‘take my online classes’ or ‘Do My Classes for Me’. You can use our live support service to discuss the price or just write,<Link href={'/take-my-gre-exam'} 
        className=' text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150'>‘How much is it to take the GRE?’ </Link> Within seconds, you will get a reply and the price information. Our prices are affordable and reasonable, making it accessible for clients to buy and utilize our classs services. Those students who are struggling financially, can have opportunities to utilize our online classes services. We also ensure maintaining quality while delivering cheap writing services.  </p>

        <h3 className='font-bold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
            Looking for Someone to Take My Class for Me Online for Dealing My Exams Deadlines</h3>
        <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Normally, the assessment dates are quite strict. You may lose the chance if the deadlines pass. Now, searching with ‘take my class for me online’ ends after encountering our online service. Our experts’ live support is available 24/7 to provide you with reliable online class service as well. Here, you can develop your learning skills and carry your chances.</p>

        <h3 className='font-bold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
            I Need Someone to Take a Class for Me and Share a Perfect Solution for My Academic Concerns</h3>

        <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>Previously, it has been observed that students face confusion while taking online service ‘take a class for me’ because they usually lose their focus and attention while joining online classes. But now, you don’t need to worry about this issue because our expert instructors are experienced in creating engaging lessons, and students wont get bored. They will enjoy and be engaged while taking their online classes.
            Due to our online classes platform, you dont need to panic if your subject coursework is difficult and you are looking for ‘take my classes for me.’ Our instructors will resolve this issue and help out with your problems. They will design your course outlines according to the universities’ requirements and guidelines.</p>

        <h3 className='font-bold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3'>
        Looking for a Professional and Experienced Expert Instructor to take my online classes</h3>

        <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>We have well-experienced online instructors who have supported and assisted students and fulfilled their course curriculum through online classes. They have also provided online guidance and tutoring to learners in different exam preparations.The criteria for handling student group activities are different. Each instructor has his own specific criteria, requirements, and standards. Fortunately, our expert writers are well aware of and updated with students curriculum and assessment patterns. They carefully tackle these things and serve you as demanded through their interactive online sessions.
        </p>

        <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>
        How to Get Our Online Classes Services</h2>

        <p className='font-medium text-muted-foreground md:text-base text-sm pt-4'>You just need to fill out the order form and add the details about your required classes, subjects, and exams. Also, you need to complete the payment procedure. We will link you with an online instructor who will take your online classes and help you ace our exam. Enjoy our service and get a piece of mind.
        </p>

    </div>
</div>
 
  </>
  )
}


function DynamicContent1() {
  return (
    <>
 
    <div > 
        <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3'>The Evaluation of Online Classes System Over Education System </h2>
    <p className='font-medium text-muted-foreground md:text-base text-sm pt-4 '>Today’s world is moving towards virtual opportunities. With the advent of AI, technology, and better internet connections worldwide, taking online classes has become common. You can enrol in an online class anywhere. If you write on Google <Link href={'/take-my-exam'} className=' text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150' >
    ‘do my exam online’</Link> , you will find a number of services. You only need a laptop and an internet connection to access the classes. Moreover, we now witness virtual universities offering online courses instead of virtual classes. Lastly, this evaluation signifies the value of online classes.  </p>

    <div className='flex items-center mt-3 '>
        <ArrowRightIcon />
        <p className='ml-2 text-sm md:text-base text-muted-foreground'>Online classes provide an opportunity to access a greater number of students anywhere in the world</p>
    </div>
    <div className='flex items-center mt-3 '>
        <ArrowRightIcon />
        <p className='ml-2 text-sm md:text-base text-muted-foreground'>Online class enrollment is cheaper than a regular physical class</p>
    </div>
    <div className='flex items-center mt-3 '>
        <ArrowRightIcon />
        <p className='ml-2 text-sm md:text-base text-muted-foreground'>Big companies consider online degrees as good as formal education</p>
    </div>
    <div className='flex items-center mt-3 '>
        <ArrowRightIcon />
        <p className='ml-2 text-sm md:text-base text-muted-foreground'>Save your money through online classes. You do not need to spend thousands on regular university classes</p>
    </div>
    <div className='flex items-center mt-3 '>
        <ArrowRightIcon />
        <p className='ml-2 text-sm md:text-base text-muted-foreground'>Through online platforms, you can enrol yourself in other countries universities without a passport</p>
    </div>
    <div className='flex items-center mt-3 '>
        <ArrowRightIcon />
        <p className='ml-2 text-sm md:text-base text-muted-foreground'>The paradigm of physical classes shifts in online education</p>
    </div>
    <div className='flex items-center mt-3 '>
        <ArrowRightIcon />
        <p className='ml-2 text-sm md:text-base text-muted-foreground'>Online courses are a flexible and stress-free option</p>
    </div>
    <div className='flex items-center mt-3 '>
        <ArrowRightIcon />
        <p className='ml-2 text-sm md:text-base text-muted-foreground'>There is no need to commute and travel for online classes </p>
    </div>
</div>
<Divider />
</>
  )
}

