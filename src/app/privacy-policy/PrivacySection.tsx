"use client"
import Aos from 'aos';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import 'aos/dist/aos.css';

function PrivacySection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 100,
    });
  }, [inView]);
  return (
    <div className='mx-auto max-w-screen-xl p-5' ref={ref} >
        <h2 className='pt-10 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Interpretation and Definitions</h2>
        <h3 className='pt-3 font-bold text-xl md:text-2xl'data-aos='flip-up'>Interpretation</h3>

        <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >The following capitalized words are valued more while the following definition has the same value whether they appear in singular or plural form.</p>


      <h3 className='pt-3 font-bold text-xl md:text-2xl'data-aos='flip-up'>Definitions</h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >The objective of the Privacy Policy:</p>
      
      <ul className='font-medium space-y-3 ' data-aos='flip-down'>
        <li> <span className='font-bold text-lg'> Account:</span>  Every user must have to create a unique account to access our services.</li>
        <li> <span className='font-bold text-lg'> Company:</span>   &ldquo;Us,&ldquo; &ldquo;We&ldquo; and &quot;The Company&quot; all refer to the same entity</li>
        <li> <span className='font-bold text-lg'> Cookies: </span>   Cookies refer to small files responsible for catching your browser history.</li>
        <li> <span className='font-bold text-lg'> Device: </span>  You can access this website through any electronic device ( Mobiles, Computer, Laptop, etc).</li>
        <li> <span className='font-bold text-lg'>Personal Data:</span> Ensure secure connection and ensure there is any information that relates to an identified or identifiable individual.</li>
        <li> <span className='font-bold text-lg'>Service:</span> They assist in providing the Service, carrying out associated duties, or helping to comprehend its usage. </li>
      </ul>

      <h2 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Gathering and Utilizing Your Personal Information</h2>
      <h3 className='pt-3 font-extrabold text-xl md:text-2xl'data-aos='flip-up'>Categories of Data Gathered</h3>
      <h4 className='pt-3 font-extrabold text-lg md:text-xl'data-aos='flip-up'>Personal Data</h4>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >We may require certain personal information from you when you use Our Services so that We can assist you with our best services.</p>

      <h3 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Usage Data
      </h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >Use of the Service results in the automated collection of Usage Data. This contains the IP address of your device,, the websites you visit, and the duration of your visits. We could also gather information on the kind of device you&quot;re using, its unique ID, and its operating system if you&quot;re using a mobile device. During your visit, your browser could provide extra information.</p>

      <h3 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Cookies and Tracking Technology
      </h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >To improve our services for you, we use cookies to track user activity on our website and gather personal information. We monitor your movement on our website through tracking technology to improve our data and mechanism.</p>

      <ul className='font-medium space-y-3 ' data-aos='flip-down'>
        <li> <span className='font-bold text-lg'> Cookies: </span>Your browser can be configured to either refuse all cookies or to alert you when one is being sent.</li>
        <li> <span className='font-bold text-lg'> Tracking Pixels (Web Beacons): </span>  The Company may use web beacons, which are tiny electronic files, in some portions of our service and emails.</li>
        <li> <span className='font-bold text-lg'>Necessary / Essential:</span> You cannot utilize some of the Website&quot;s features or gain access to its services without these Cookies. They help with user authentication and safeguard user accounts from unauthorized use</li>
        <li> <span className='font-bold text-lg'> Cookies Policy / Acceptance of Cookies Notice:</span>  You can access this website through any electronic device ( Mobiles, Computer, Laptop, etc).</li>
        <li> <span className='font-bold text-lg'>Functionality:</span>  These cookies enable us to remember your preferences on the website, such as your preferred language and login information, giving you a better-tailored experience and saving you the trouble of entering it every time you come.</li>
      </ul>

      <h3 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Utilization of Your Personal Information</h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >Your Data may be used for the following purposes by us:
 </p>

 <ul className='font-medium space-y-3 ' data-aos='flip-down'>
        <li> <span className='font-bold text-lg'> To deliver and sustain our services: </span>Your personal information would help to maintain our services and help us to relocate you via cookies.</li>
        <li> <span className='font-bold text-lg'>To fulfill the obligations of a contract: </span>   To make the relationship better, while giving you the proper information about your purchase using our services to get you in touch with every movement.</li>
        <li> <span className='font-bold text-lg'>To reach out to you: </span>  We might use your personal information to reach to our to tell you about our service update via email, calls, or through SMS.</li>
        <li> <span className='font-bold text-lg'>For additional purposes:</span> Your data helps us to analyze your interest, and usage trends and for the marketing campaign to get you with our best services.</li>

      </ul>

      <h3 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Preservation of Your Personal Data</h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >We preserve your data as long as it is necessary for the purposes outlined in this privacy policy. This helps to resolve issues and assist you with our best. This might help us with obligations, disputes, and for security reasons.
 </p>

      <h3 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Transmission of Your Data
      </h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >Your personal information might be stored in a server outside of your area, where data protection laws can vary. The company makes sure that your data is fully secure with our services so that no one can access your personal information.
 </p>

      <h3 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Disclosure of Your Data
      </h3>
      <h3 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Protection of Your Data
      </h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >Please keep in mind that no Internet transmission or storage technique is fully risk-free, even though we prioritize the protection of your data. Although we make every effort to secure your information using sensible safeguards, we are unable to provide 100% protection.
 </p>

      <h3 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Connections to Other Websites
      </h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >Our service may include links to third-party websites that we don&quot;t manage or control. Clicking on one of the links will take you to a third party&quot;s website. We suggest you read the privacy policy of a website before using our services
 </p>

      <h2 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Modifications to this Privacy Statement
</h2>
 
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >We update our services from time to time and so it will be in relation to the policy. We update this website whenever our Privacy Policy is modified and you will be aware of all changes, as we will send You a copy.
 </p>
 

    </div>
  )
}

export default PrivacySection


