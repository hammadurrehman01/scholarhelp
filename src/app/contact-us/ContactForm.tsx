"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import EmailAction2 from '../(backend)/action/emailAction2';
import { Loader2Icon } from 'lucide-react';




function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();
    const [pending, setPending] = useState(false);



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setPending(true);

        // Convert form data to FormData object
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', message);

        try {
            // Send the FormData to the EmailAction2 function
            const result = await EmailAction2(null, formData);

            // Check for success or error in the response
            if (result.success) {
                console.log('Form Submitted Successfully');
                router.push('/thank-you-for-contact');
            } else {
                console.error(result.error);
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <div className='mx-auto max-w-screen-xl py-10 '>
            <div className='grid lg:grid-cols-2 grid-cols-1 p-5'>
                <div className='' data-aos='fade-up'>
                    <div className='pt-5 text-3xl md:text-4xl font-extrabold text-center'>
                        Let&apos;s talk about everything!
                    </div>
                    <div className='pt-3 text-base md:text-lg text-muted-foreground text-center'>
                        Got questions? We are here to help! Contact us today.
                    </div>
                    <div className='flex justify-center mt-3'>
                        <Image src={'/imgs/Contact_us_form.webp'} width={600} height={400} alt='form'></Image>
                    </div>
                </div>
                <div className='' data-aos='fade-down'>
                    <form onSubmit={handleSubmit}>
                        <div className='mt-10'>
                            <div className='w-[400px] rounded-xl'>
                                <input
                                    className='py-3 w-full px-3 rounded-xl md:text-base text-sm bg-transparent outline-none border-[2px] border-muted-foreground'
                                    type="text"
                                    name='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    placeholder='Enter your Name'
                                />
                            </div>
                            <div className='w-[400px] rounded-xl mt-3'>
                                <input
                                    className='py-3 w-full px-3 rounded-xl md:text-base text-sm bg-transparent outline-none border-[2px] border-muted-foreground'
                                    type="email"
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder='Enter your Email'
                                />
                            </div>
                            <div className='w-[400px] rounded-xl mt-3'>
                                <input
                                    className='py-3 w-full px-3 rounded-xl md:text-base text-sm bg-transparent outline-none border-[2px] border-muted-foreground'
                                    type="text"
                                    name='subject'
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                    placeholder='Enter your Subject'
                                />
                            </div>
                            <div className='w-[400px] rounded-xl mt-3'>
                                <textarea
                                    className='bg-transparent outline-none border-[2px] border-muted-foreground pb-36 pt-4 rounded-lg w-full px-3 text-sm md:text-base'
                                    name='message'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    placeholder='Write Your Message'
                                />
                            </div>
                            <button type="submit" disabled={pending} className="flex items-center py-3 px-8 rounded-lg md:text-base text-sm mt-3 border-[2px] bg-gradient-to-r from-indigo-900 to-violet-800 text-white hover:scale-105 hover:shadow-lg transition ease-in duration-200 delay-200">
                                {pending ? (
                                    <>
                                        <Loader2Icon className="animate-spin mr-2 h-5 w-5" />{" "}
                                        <p>Submitting...</p>
                                    </>
                                ) : (
                                    "Submit"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm

