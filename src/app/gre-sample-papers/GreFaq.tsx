import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

function GreFaq() {
    return (
        <div className='max-w-screen-xl mx-auto '>
            <div className='py-6'>
                <h2 className='font-extrabold md:text-4xl text-2xl text-center'>Frequently Asked Questions</h2>
                <h3 className='font-semibold pt-2 md:text-3xl text-xl text-center'> Check out some of the important questions that have been asked the most.</h3>
                <div className='my-5 '>
                    <Accordion type="single" collapsible defaultValue='item-1' className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <h4 className='font-semibold text-lg md:text-xl'> How hard is the GRE exam? </h4>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className='font-medium text-sm md:text-base'>Every exam has its significant value. It all depends on the preparation of a student and how well they prepared for it. One of the sections might be challenging while the other may be easy.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                            <h4 className='font-semibold text-lg md:text-xl'> What numbers are considered to be good in the GRE? </h4>
                            </AccordionTrigger>
                            <AccordionContent>
                            <p className='font-medium text-sm md:text-base'>Collectively more than 75% or higher is considered a good score, compiling 158+ for quantitative, 159+ for verbal, and 4.5 for writing.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>  <h4 className='font-semibold text-lg md:text-xl'> How costly is the GRE exam? </h4></AccordionTrigger>
                            <AccordionContent>
                            <p className='font-medium text-sm md:text-base'>The fee varies from location to location, ranging from 150$ to 210$. This fee is required to register yourself for the examination.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger> 
                             <h4 className='font-semibold text-lg md:text-xl'> What are the consequences of failing the GRE exam?</h4></AccordionTrigger>
                            <AccordionContent>
                            <p className='font-medium text-sm md:text-base'>There is no such thing as failure in the GRE exam. You’re always eligible to take a re-test in order to achieve better results.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default GreFaq