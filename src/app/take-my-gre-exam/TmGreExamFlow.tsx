"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { CtaButtons } from '../(Home)/_components/HeroSection';

function TmGreExamFlow() {
    const [activeTab, setActiveTab] = useState("1"); 

    useEffect(() => {
      const timer = setInterval(() => {
        setActiveTab((prevTab) => {
          const nextTab:any = {
            "1": "2",
            "2": "3",
            "3": "1",
          };
          return nextTab[prevTab]; 
        });
      }, 3000);
  
      return () => clearInterval(timer);
    }, []);
  return (
    <div data-aos="zoom-in"  className='mx-auto max-w-screen-xl mt-10'>
    <h2 className='text-center text-xl md:text-4xl font-extrabold dark:text-zinc-100 text-violet-950'> How Does My Online Class Service Work?</h2>
    <h3 className='text-center text-lg md:text-2xl font-extrabold dark:text-zinc-100 text-violet-950'>
    Just One Click Away to Get Frictionless Online Classes
    </h3>

      <div className='  mt-8'>
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="1">1</TabsTrigger>
        <TabsTrigger value="2">2</TabsTrigger>
        <TabsTrigger value="3">3</TabsTrigger>
      </TabsList>

      <TabsContent value="1">
        <div className='grid lg:grid-cols-2 grid-cols-1 p-5'>
          <div   className=''>
            <div className='flex justify-center items-center'>
              <Image  src={"/imgs/workflow.webp"} loading='eager' width={600} height={400} alt='workflow'></Image>
            </div>
          </div>
          <div   className=''>
            <div className='flex justify-start items-center mt-5 lg:mt-20'>
              <h4 className='text-lg md:text-2xl font-bold dark:text-zinc-100 text-indigo-900 '>Place Your Order</h4>
            </div>
            <p className='mt-2 md:mt-4 md:text-xl text-sm font-medium dark:text-zinc-100 text-indigo-900'>Provide complete details about your classes and specify your requirements by filling out the order form.</p>
            <CtaButtons/>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="2">
         <div className='grid lg:grid-cols-2 grid-cols-1 p-5'>
          <div    className=''>
            <div className='flex justify-center items-center'>
              <Image src={"/imgs/workflow_2.webp"} loading='eager' width={600} height={400} alt='workflow'></Image>
            </div>
          </div>
          <div className=''>
            <div className='flex justify-start items-center mt-5 lg:mt-20'>
            <h4 className='text-lg md:text-2xl font-bold dark:text-zinc-100 text-indigo-900 '>Make a Prepayment</h4>
            </div>
            <p className='mt-2 md:mt-4 md:text-xl text-sm font-medium dark:text-zinc-100 text-indigo-900'>Complete a payment procedure so that our online instructor can start working.</p>
            <CtaButtons/>
          </div>
        </div>
        </TabsContent>

      <TabsContent value="3">
           <div className='grid lg:grid-cols-2 grid-cols-1 p-5'>
          <div    className=''>
            <div className='flex justify-center items-center'>
              <Image src={"/imgs/workflow_4.webp"} loading='eager' width={600} height={400} alt='workflow'></Image>
            </div>
          </div>
          <div className=''>
            <div className='flex justify-start items-center mt-5 lg:mt-20'>
            <h4 className='text-lg md:text-2xl font-bold dark:text-zinc-100 text-indigo-900 '>
            Ace Your Exam</h4>
            </div>
            <p className='mt-2 md:mt-4 md:text-xl text-sm font-medium dark:text-zinc-100 text-indigo-900'>
            As an expert assigned to you relevant to your requirements, you will be notified by email.</p>
            <CtaButtons/>
          </div>
        </div>
        </TabsContent>


    </Tabs>
    </div>

  </div>
  )
}

export default TmGreExamFlow