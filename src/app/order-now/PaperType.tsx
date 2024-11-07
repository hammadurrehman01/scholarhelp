"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { useTopic } from '../TopicContext';





function PaperType({ onNext }: { onNext: () => void }) {

    interface DeadlineOption {
        value: string;
        label: string;
      }
      
      const generateDeadlineOptions = (): DeadlineOption[] => {
        return [
          { value: "30 days", label: "30 days" },
          { value: "29 days", label: "29 days" },
          { value: "28 days", label: "28 days" },
          { value: "27 days", label: "27 days" },
          { value: "26 days", label: "26 days" },
          { value: "25 days", label: "25 days" },
          { value: "24 days", label: "24 days" },
          { value: "23 days", label: "23 days" },
          { value: "22 days", label: "22 days" },
          { value: "21 days", label: "21 days" },
          { value: "20 days", label: "20 days" },
          { value: "19 days", label: "19 days" },
          { value: "18 days", label: "18 days" },
          { value: "17 days", label: "17 days" },
          { value: "16 days", label: "16 days" },
          { value: "15 days", label: "15 days" },
          { value: "14 days", label: "14 days" },
          { value: "13 days", label: "13 days" },
          { value: "12 days", label: "12 days" },
          { value: "11 days", label: "11 days" },
          { value: "10 days", label: "10 days" },
          { value: "9 days", label: "9 days" },
          { value: "8 days", label: "8 days" },
          { value: "7 days", label: "7 days" },
          { value: "6 days", label: "6 days" },
          { value: "5 days", label: "5 days" },
          { value: "4 days", label: "4 days" },
          { value: "3 days", label: "3 days" },
          { value: "2 days", label: "2 days" },
          { value: "1 day", label: "1 day" },
          { value: "12 hours", label: "12 hours" },
          { value: "8 hours", label: "8 hours" },
          { value: "4 hours", label: "4 hours" },
        ];
      };
    

    const totalPages = 200;
    const wordsPerPage = 250;


    const { topic,level,paper,quality,deadline,setTopic, selectedValue, setSelectedValue, setLevel, setPaper, setQuality, setDeadline } = useTopic(); // Get the update function from context

    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTopic(event.target.value); // Update the topic in context
    };
    const handleLevel = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLevel(event.target.value); // Update the topic in context
    };
    const handlePaper = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPaper(event.target.value); // Update the topic in context
    };
    const handleQuality = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setQuality(event.target.value); // Update the topic in context
    };
    const handleDeadline = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDeadline(event.target.value); // Update the topic in context
    };
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(parseInt(event.target.value)); // Update the state with selected value
    };

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Paper Type</CardTitle>
                    <CardDescription>
                        Select your services and move to the next tab to continue filling out your form.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">

                    <div className="space-y-1">
                        <Label htmlFor="topic">Your Topic</Label>
                        <input
                            id="topic"
                            name='topic'
                            defaultValue={topic}
                            placeholder='Enter Topic'
                            onChange={handleChange}
                            required
                            className="rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base"
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="academic">Academic Level</Label>
                        <select
                            className='rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base'
                            name="academic" defaultValue={level} onChange={handleLevel} required aria-label='academic'>
                            <option value="Undergraduate">Undergraduate</option>
                            <option value="Highschool">High School</option>
                            <option value="Master">Master</option>
                            <option value="Doctoral">Doctoral</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="typeofpaper">Type Of Paper</Label>
                        <select
                            className='rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base'
                            name="service" defaultValue={paper} onChange={handlePaper} required aria-label='service'>
                            <option value="Dissertation">Dissertation</option>
                            <option value="Assignment">Assignment Writing </option>
                            <option value="Essay">Essay</option>
                            <option value="Research Paper writing">Research Paper writing</option>
                            <option value="Coursework">Coursework</option>
                            <option value="Editing">Editing </option>
                            <option value="Case Study">Case Study</option>
                            <option value="Resume / CV">Resume / CV</option>
                            <option value="Term Paper">Term Paper</option>
                            <option value="Online Exam Quizzes">Online Exam Quizzes</option>
                            <option value="Homework">Homework</option>
                            <option value="Formatting">Formatting</option>
                            <option value="Proofreading">Proofreading</option>
                            <option value="Annotated Bibliography">Annotated Bibliography</option>
                            <option value="Speech/Presentation">Speech/Presentation</option>
                            <option value="PowerPoint Presentation">PowerPoint Presentation</option>
                            <option value="Thesis">Thesis</option>
                            <option value="Thesis Proposal">Thesis Proposal</option>
                            <option value="Dissertation Chapter- Abstract">Dissertation Chapter- Abstract</option>
                            <option value="Dissertation Chapter-Introduction Chapter">Dissertation Chapter-Introduction Chapter</option>
                            <option value="Dissertation Chapter-Literature Review">Dissertation Chapter-Literature Review</option>
                            <option value="Dissertation Chapter-Methodology">Dissertation Chapter-Methodology</option>
                            <option value="Dissertation Chapter- Result">Dissertation Chapter- Result</option>
                            <option value="Dissertation Chapter-Discussion">Dissertation Chapter-Discussion</option>
                            <option value="Book Report">Book Report</option>
                            <option value="Book Review">Book Review</option>
                            <option value="Movie Review">Movie Review</option>
                            <option value="Research Proposal">Research Proposal</option>
                            <option value="Admission Sevices - Editing">Admission Sevices - Editing</option>
                            <option value="Article">Article</option>
                            <option value="Article Critique">Article Critique</option>
                            <option value="Admission Essays">Admission Essays</option>
                            <option value="Psychology">Psychology</option>
                            <option value="Religious studies">Religious studies</option>
                            <option value="Shakespeare">Shakespeare</option>
                            <option value="Sociology">Sociology</option>
                            <option value="Statistics">Statistics</option>
                            <option value="Technology">Technology</option>
                            <option value="Web, High tech">Web, High tech</option>
                            <option value="Womens and gender studies">Womens and gender studies</option>
                            <option value="Zoology">Zoology</option>
                            <option value="Thesis Writing">Thesis Writing</option>
                            <option value="Custom essay writing">Custom essay writing</option>
                            <option value="College Essay writing">College Essay writing</option>
                            <option value="Write my Paper">Write my Paper</option>
                            <option value="Zoology">Zoology</option>
                            <option value="College Paper">College Paper</option>
                            <option value="Online Exam Quizzes">Online Exam Quizzes</option>
                            <option value="Resume writing">Resume writing</option>
                            <option value="Business letter writing">Business letter writing</option>
                            <option value="SEO Optimized Articles">SEO Optimized Articles</option>
                            <option value="Blog Writing">Blog Writing</option>
                            <option value="Web Content Writing">Web Content Writing</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="pageCount">Number Of Pages</label>
                        <select value={selectedValue} onChange={handleSelectChange}
                            className="rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base"
                            name="pageCount"
                            required
                            aria-label="pageCount"
                        >
                            {Array.from({ length: totalPages }, (_, index) => {
                                const pageCount = index + 1;
                                const wordCount = pageCount * wordsPerPage;
                                return (

                                    <option key={pageCount} value={pageCount}>
                                        {`${pageCount} Page${pageCount > 1 ? 's' : ''} / ${wordCount} Words`}
                                    </option>


                                );
                            })}
                        </select>
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="Paper Quality">Paper Quality</Label>
                        <select
                            className='rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base'
                            name="paperquality" defaultValue={quality} onChange={handleQuality} required aria-label='PaperQuality'>
                            <option value="Standard Quality">Standard Quality</option>
                            <option value="Premium Quality">Premium Quality</option>

                        </select>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="Deadline">Deadline</label>
                        <select
                            className="rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base"
                            name="deadline"
                            onChange={(e) => setDeadline(e.target.value)}
                            required
                            aria-label="Deadline"
                            defaultValue={deadline}
                        >
                            {generateDeadlineOptions().map((option, index) => (
                                <option key={index} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                </CardContent>
                <div className='flex justify-end '>
                    <button onClick={onNext} className='py-3 rounded-lg bg-purple-600 text-white text-center m-4 w-[100px] hover:scale-105 transition ease-in duration-200 font-semibold'>NEXT</button>
                    </div>
            </Card>
      
        </div>
    )
}

export default PaperType