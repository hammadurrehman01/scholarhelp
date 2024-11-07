"use client"
import Aos from 'aos';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import 'aos/dist/aos.css';
import { BookMarkedIcon, Pointer } from 'lucide-react';

function TermSection() {
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
        <h2 className='pt-10 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Expounding on Definitions</h2>
        <h3 className='pt-3 font-bold text-xl md:text-2xl'data-aos='flip-up'>Deciphering</h3>

        <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >The capitalized words have certain values, while the following definitions also contain the same significant values, whether they are in singular or plural form.</p>


      <h3 className='pt-3 font-bold text-xl md:text-2xl'data-aos='flip-up'>Terminologies</h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >Regarding these Terms and Conditions:</p>
      
      <ul className='font-medium space-y-3 ' data-aos='flip-down'>
        <li> <span className='font-bold text-lg'> Company:</span>  The terms (&quot;US,&quot; &quot;We,&quot; and &quot;The Company&quot;) refer to our logistics company that identifies us.</li>
        <li> <span className='font-bold text-lg'> Gadget:</span>   We are easily accessible to reach from cell phones and any computer.</li>
        <li> <span className='font-bold text-lg'> Terms of Service: </span>   referenced (as &quot;Terms&quot;) indicate these Terms and Conditions that constitute the whole agreement between You and the Company regarding the use of the Service.</li>
        <li> <span className='font-bold text-lg'> Third-Party Social Media Platform: </span>  Ensuring safeguarding your data and making it secure so no one can access your personal information</li>
        <li> <span className='font-bold text-lg'>Website:</span>   The company refers to anime products that can be easily accessible from all over the USA.</li>
      </ul>

      <h3 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Recognition</h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >These are the terms and conditions which help us to give you our best services. To use and get access to the Service, you must accept and comply with these Terms and Conditions. All users, visitors, and other individuals who access or use the Service are subject to these Terms and Conditions. By agreeing to our terms and conditions, you’re eligible to use our services without any hassle.</p>

      <h3 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Connections to Other Websites</h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >Our Service may include hyperlinks to third-party websites or services that are not owned or managed by the Company. The Company accepts no responsibility for the privacy practices, content, or policies of third-party websites or services over which it has no control.</p>

      <h3 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Cancellation</h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >We can cancel your subscription and Your access instantly, with no previous warning or responsibility, if you are found guilty of using our website for some other work. We operate our website 24/7 so that you can get the best services, be aware of doing such scams with us!</p>

      <h3 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Limitation of Liability</h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >The Company and its suppliers&quot; total responsibility under any term of these Terms, regardless of any damages You may experience, shall be limited to the amount You have paid through the Service, or USD 100 if You have not made any purchases through the Service.
 </p>
      <h3 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Notice
      </h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >You are receiving the service &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; with all flaws and defects and without any warranty of any kind from the Company. As allowed by law, the Corporation extends any services permissible by law, and the Company and its Affiliates disclaim any claims relating to the Service, including the implied warranties of merchantability and fitness for a specific purpose.
 </p>

      <h3 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Applicable Law
      </h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >Without regard to any restrictions about conflicts of law, the country&quot;s laws shall govern these Terms and your use of the Service. While using the Application, you might also be governed by other local, state, federal, or international laws.
 </p>

      <h3 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Resolution of Disputes
      </h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >If you have any complaints about our services, we&quot;re here to resolve your issues and ensure you have the best shopping experience possible.
 </p>

      <h3 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Compliance with USA Law
      </h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >You affirm that (i) you do not reside in a nation under USA embargo or listed as a &quot;terrorist-supporting&quot; country, and (ii) you are not included in any USA government-restricted party list.
 </p>

      <h2 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Severability and Waiver of Rights
      </h2>
      <h3 className='pt-3 font-extrabold text-xl md:text-2xl'data-aos='flip-up'>Disconnection
      </h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >If any term of these Terms turns out to be unlawful or invalid, it will be modified and considered to achieve the provision&quot;s goals to the fullest degree permitted by relevant law.
 </p>
      <h3 className='pt-3 font-extrabold text-xl md:text-2xl'data-aos='flip-up'>Waiver
      </h3>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >Unless it’s clearly stated otherwise, if a party chooses to overlook a breach or doesn’t enforce their rights right away, that doesn’t prevent them from doing so in the future
 </p>

      <h2 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Translation and Clarification
      </h2>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >If we make these Terms and Conditions available to You through our Service, they may have been translated. In the event of a disagreement, you agree that the original English text will prevail.
 </p>

      <h2 className='pt-3 font-extrabold text-2xl md:text-3xl'data-aos='flip-up'>Modifications to These Terms and Conditions</h2>
      <p className='py-3  font-medium md:text-lg text-sm'data-aos='flip-down' >If a modification is important, we will make reasonable attempts to provide not less than thirty days&quot; notice until any additional conditions take effect. We shall assess what constitutes a substantial change in our sole discretion.
 </p>

    </div>
  )
}

export default TermSection