import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

function GmatFaq() {
  return (
    <div className='max-w-screen-xl mx-auto '>
    <div className='py-6'>
        <h2 className='font-extrabold md:text-4xl text-2xl text-center'>Frequently Asked Questions</h2>
        <h3 className='font-semibold pt-2 md:text-3xl text-xl text-center'> Check out some of the important questions that have been asked the most</h3>
        <div className='my-5 '>
            <Accordion type="single" collapsible defaultValue='item-1' className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <h4 className='font-semibold text-lg md:text-xl'> Is the GMAT examination hard?</h4>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className='font-medium text-sm md:text-base'>The Graduate Management Admission Test, or GMAT, is often regarded as a difficult test. The average GMAT score is between the 52nd and 55th percentile, at 574.51 out of 800, or 71.8% which is quite a challenging task to achieve.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                    <h4 className='font-semibold text-lg md:text-xl'> What is considered good marks in the GMAT exams? </h4>
                    </AccordionTrigger>
                    <AccordionContent>
                    <p className='font-medium text-sm md:text-base'>Averaging more than 70% is considered to be a good mark, which can be earned after effective preparation.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>  <h4 className='font-semibold text-lg md:text-xl'>What is the syllabus of the GMAT?  </h4></AccordionTrigger>
                    <AccordionContent>
                    <p className='font-medium text-sm md:text-base'>Arithmetic, algebra, geometry, reading comprehension, critical thinking, and sentence correction are all covered in the GMAT curriculum</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
</div>
  )
}

export default GmatFaq