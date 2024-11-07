import React from 'react';
import TmeBanner from './TmeBanner';
import TmeLc from './TmeLc';
import TakeMyExamFlow from './TakeMyExamFlow';
import TakeMyExamPoints from './TakeMyExamPoints';
import TmeFormContent from './TmeFormContent';
import TakeMyExamCF from './TakeMyExamCF';
import TakeMyExamLC2 from './TakeMyExamLC2';
import TmeFaq from './TmeFaq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire #1 Take My Online Exam Help | Do My Online Exam Helper',
  description: 'There is a higher success rate in your academic path to hire “take my online exam for me” service who provide exams support. We have a variety of tutors available.',
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/take-my-exam",
  },
};

function Page() {
  return (
    <div>
      <TmeBanner />
      <TmeLc />
      <TakeMyExamFlow />
      <TakeMyExamPoints />
      <TmeFormContent />
      <TakeMyExamCF />
      <TakeMyExamLC2 />
      <TmeFaq />
    </div>
  );
}

export default Page;