import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

function GedFaq() {
  return (
    <div className='max-w-screen-xl mx-auto '>
    <div className='py-6'>
        <h2 className='font-extrabold md:text-4xl text-2xl text-center'>Frequently Asked Questions</h2>
        <h3 className='font-semibold pt-2 md:text-3xl text-xl text-center'> Check out some of the important questions that have been asked the most</h3>
        <div className='my-5 '>
            <Accordion type="single" collapsible defaultValue='item-1' className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <h4 className='font-semibold text-lg md:text-xl'> What kind of questions have been asked in the GED Exam?</h4>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className='font-medium text-sm md:text-base'>The standard multiple-choice, drag-and-drop, fill-in-the-blank, hot spot, and drop-down questions are included in Parts 1 and 3 of the test. The written essay in part two has a 45-minute time limit. There are no interruptions in the Social Studies test because it consists of a single section</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                    <h4 className='font-semibold text-lg md:text-xl'> How hard is the GED exam? </h4>
                    </AccordionTrigger>
                    <AccordionContent>
                    <p className='font-medium text-sm md:text-base'>It depends on the individual&apos;s preparation for the exams and how he tackles the exam. The GED exam evaluates students to write down the two opposing arguments and compose an essay that evaluates both of the processes.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>  <h4 className='font-semibold text-lg md:text-xl'> Can I use the calculator? </h4></AccordionTrigger>
                    <AccordionContent>
                    <p className='font-medium text-sm md:text-base'>Yes! You can use the simple calculator. However, any kind of smart gadget is not allowed in the examination centre.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger> 
                     <h4 className='font-semibold text-lg md:text-xl'> What is the easiest subject in the GED exam? </h4></AccordionTrigger>
                    <AccordionContent>
                    <p className='font-medium text-sm md:text-base'>Many students begin with the reasoning subtest in language arts and move on to mathematics as their final subtest.</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
</div>
  )
}

export default GedFaq