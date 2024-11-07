import { Facebook, Instagram, LinkedinIcon, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'



const Footer = () => {

  return (
    <div className=''>
        <div  className='bg-gradient-to-b from-blue-200 via-violet-200 to-zinc-100 dark:bg-gradient-to-b dark:from-purple-900 dark:via-indigo-900 dark:to-zinc-950 grid lg:grid-cols-6 grid-cols-1 p-5 container  '>
          <div className=' col-span-2 p-4'>
          <Link href={'/'} className='flex items-center gap-2'>
          <img className="block dark:hidden" src={'/assets/weblogo.png'} width={80} height={80} alt="logo" />
          <Image className="dark:block hidden" src={'/assets/weblogodark.png'} width={80} height={80} alt="logo"></Image>
            <div className='font-bold md:text-xl text-lg  '>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</div>
            </Link>
            <div className='font-medium mt-4  text-sm'>Taking My Classes Online is one of the most trusted websites across the USA, essential to provide students with effective exam resources and guide them through academic success. Our expert teams are well-versed in various fields to help you in online classes, assignments, quizzes, and exams.</div>

          </div>
          <div className='p-4'>
            <div className='font-bold text-lg md:text-xl'>Explore</div>
            <ul className='md:mt-3 mt-1  '>
              <li className='font-medium  mt-1  text-sm dark:hover:text-gray-100  hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"/"} >Home</Link> </li>
              <li className='font-medium  mt-1  text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"/about-us"} >About Us</Link> </li>
              <li className='font-medium  mt-1  text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"/contact-us"} >Contact Us </Link> </li>            
              <li className='font-medium  mt-1  text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"/reviews"} >Reviews </Link> </li>            
              <li className='font-medium  mt-1  text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"/order-now"} >Order Now </Link> </li>            
            </ul>
          </div>

          <div className='p-4'>
            <div className='font-bold text-lg md:text-xl'>Services</div>
            <ul className='md:mt-3 mt-1  '>
              <li className='font-medium   mt-1  text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"/take-my-exam"} >Take My Exam</Link> </li>
              <li className='font-medium   mt-1  text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"/take-my-gre-exam"} >Take My GRE Exam</Link> </li>
              <li className='font-medium   mt-1  text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"/take-gmat-online-exam"} >Take GMAT Online Exam</Link> </li>
              <li className='font-medium   mt-1  text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"/lsat-exam-prep"} >Take LSAT Exam Online</Link> </li>
              <li className='font-medium   mt-1  text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={'/toefl-exam-online'}>Toefl Exam Online</Link> </li>
              <li className='font-medium   mt-1  text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={'/take-my-teas-exam-for-me'}>Take my Teas Exam For me</Link></li>
              <li className='font-medium   mt-1  text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={'/hesi-exam'}>Hesi Exam</Link></li>
              <li className='font-medium   mt-1  text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={'/take-my-ged-for-me'}>Take My GED For Me</Link></li>
              <li className='font-medium   mt-1  text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={'/pte-academic-online'}>PTE Academic Online</Link></li>
              <li className='font-medium   mt-1  text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={'/pay-someone-to-take-my-class'}>Pay Someone To Take My Class</Link></li>
            
            </ul>
          </div>

          
          <div className='p-4'>
            <div className='font-bold text-lg md:text-xl+'>Legal Info</div>
            <ul className='md:mt-3 mt-1 '>
              <li className='font-medium   mt-1  text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"/terms-and-conditions"} >Terms & Conditions</Link> </li>
              <li className='font-medium   mt-1  text-sm dark:hover:text-gray-100 hover:scale-105 transition ease-in duration-150 delay-150'><Link href={"/privacy-policy"} >Privacy Policy</Link> </li>
          
            
            </ul>
          </div>

          <div className='p-4'>
            <div className='font-bold md:text-xl text-lg'> Our Socials</div>
            <div className='flex items-center gap-3 mt-2 text-muted-foreground'>
              <Instagram className=' mt-1  text-sm dark:hover:text-white transition ease-in duration-200 delay-150' />
              <Facebook className=' mt-1  text-sm dark:hover:text-white transition ease-in duration-200 delay-150'/>
              <LinkedinIcon className=' mt-1  text-sm dark:hover:text-white transition ease-in duration-200 delay-150'/>
            </div>
            <div className='flex items-center mt-2'>
              <Image className='m-1' src={'/imgs/americanExpressIcon.webp'} width={40} height={40} alt='american'></Image>
              <Image className='m-1' src={'/imgs/masterCardIcon.webp'} width={40} height={40} alt='master'></Image>
              <Image className='m-1' src={'/imgs/payPal.webp'} width={40} height={40} alt='paypal'></Image>
              <Image className='m-1' src={'/imgs/visa.webp'} width={40} height={40} alt='visa'></Image>
            </div>
            <div className='mt-3'>
              <Image className='rounded-lg' src={'/imgs/dmca-protected.png'} width={170} height={170} alt='dmca'></Image>
            </div>
          </div>

        </div>
        <div className=' container py-4 bg-zinc-900 text-center text-zinc-200  mt-1  text-sm '>Copyrights © 2024 All Rights Reserved by {process.env.NEXT_PUBLIC_WEBSITE_NAME}
        </div>
      </div>
  
  )
}

export default Footer