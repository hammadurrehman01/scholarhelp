import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

function LsatFaq() {
  return (
    <div className='max-w-screen-xl mx-auto '>
    <div className='py-6'>
        <h2 className='font-extrabold md:text-4xl text-2xl text-center'>Frequently Asked Questions</h2>
        <h3 className='font-semibold pt-2 md:text-3xl text-xl text-center'> Check out some of the important questions that have been asked the most</h3>
        <div className='my-5 '>
            <Accordion type="single" collapsible defaultValue='item-1' className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <h4 className='font-semibold text-lg md:text-xl'>How hard is the LSAT exam? </h4>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className='font-medium text-sm md:text-base'>Because it places a strong focus on thinking and analytical abilities, the LSAT is regarded as one of the most difficult standardized examinations.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                    <h4 className='font-semibold text-lg md:text-xl'>What is the most difficult exam, LSAT or MCAT?  </h4>
                    </AccordionTrigger>
                    <AccordionContent>
                    <p className='font-medium text-sm md:text-base'>The MCAT is easy to understand; it necessitates a thorough understanding of intricate medical and scientific concepts, which makes it more challenging than the LSAT exam.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>  <h4 className='font-semibold text-lg md:text-xl'>How good are the 170 marks in the LSAT exam?  </h4></AccordionTrigger>
                    <AccordionContent>
                    <p className='font-medium text-sm md:text-base'>A score of 170 on the LSAT is nearly universally regarded as a respectable score. It places you in the 2-3% of test takers who achieve this level. It won&apos;t, however, ensure that you get into a prestigious law school.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>  <h4 className='font-semibold text-lg md:text-xl'> How much do I need to get admission to Harvard?  </h4></AccordionTrigger>
                    <AccordionContent>
                    <p className='font-medium text-sm md:text-base'>The typical LSAT score for new students at Harvard is 174, whereas the lower 25th percent is 170 and the upper 75th percent is 176.</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
</div>
  )
}

export default LsatFaq