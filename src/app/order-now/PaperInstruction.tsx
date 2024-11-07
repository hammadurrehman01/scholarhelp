"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { useTopic } from '../TopicContext'
import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'



function PaperInstruction({ onNext, onPrevious }: { onNext: () => void, onPrevious: () => void }) {
    const { subject, setSubject, language, setLanguage, source, setSource, format, setFormat, referencing, setReferencing, file, addFiles, deleteFile, } = useTopic();

    const handleSubject = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSubject(event.target.value);
    };
    const handleLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value);
    };
    const handleSource = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSource(parseInt(event.target.value));
    };
    const handleFormat = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormat(event.target.value);
    };
    const handleReferencing = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setReferencing(event.target.value);
    };
    const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files // File input se pehla file le raha hai
        if (file !== null) {
            addFiles(file); // File ko context ya state mein set karna
        }
    };

 
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Paper Instructions</CardTitle>
                    <CardDescription>
                        Select your services and move to the Contact Details tab to finalize your form..
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">

                    <div className="space-y-1">
                        <Label htmlFor="subjectarea">Subject Area</Label>
                        <select
                            className='rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base'
                            name="subject" defaultValue={subject} onChange={handleSubject} required aria-label='subject'>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Sociology">Sociology</option>
                            <option value="Biology">Biology</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Education">Education</option>
                            <option value="Criminology">Criminology</option>
                            <option value="Economics">Economics</option>
                            <option value="Finance">Finance</option>
                            <option value="Law">Law</option>
                            <option value="Accounting">Accounting</option>
                            <option value="Geology">Geology</option>
                            <option value="Nursing">Nursing</option>
                            <option value="Architecture">Architecture</option>
                            <option value="Environmental Science">Environmental Science</option>
                            <option value="Business Studies">Business Studies</option>
                            <option value="English Literature">English Literature</option>
                            <option value="Health Sciences">Health Sciences</option>
                            <option value="Language Studies">Language Studies</option>
                            <option value="Computer Science">Computer Science</option>
                        </select>
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="language">Preferred Language Style</Label>
                        <select
                            className='rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base'
                            name="language" defaultValue={language} onChange={handleLanguage} required aria-label='language'>
                            <option value="English (U.K)">English (U.K)</option>
                            <option value="English (U.S)">English (U.S)</option>
                        </select>
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="sources">Number Sources</Label>
                        <select
                            className='rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base'
                            name="source" onChange={handleSource} defaultValue={source} required aria-label='source'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                        </select>
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="format">Paper Format</Label>
                        <select
                            className='rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base'
                            name="format" onChange={handleFormat} defaultValue={format} required aria-label='format'>
                            <option value="Double Spaced">Double Spaced</option>
                            <option value="Single Spaced">Single Spaced</option>
                        </select>
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="referencing">Referencing Style</Label>
                        <select
                            className='rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base'
                            name="referencing" onChange={handleReferencing} defaultValue={referencing} required aria-label='referencing'>
                            <option value="APA Referencing">APA Referencing</option>
                            <option value="Harvard Referencing">Harvard Referencing</option>
                            <option value="MLA Referencing">MLA Referencing</option>
                            <option value="Turabian Referencing">Turabian Referencing</option>
                            <option value="Vancouver Referencing">Vancouver Referencing</option>
                            <option value="CBE Referencing">CBE Referencing</option>
                            <option value="Not applicable">Not applicable</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="space-y-4">
                        <Label htmlFor="file">Select Your File</Label>
                        <Input
                            multiple
                            onChange={handleFile}
                            className=' h-12 rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base'
                            name="file" type='file' required aria-label='file'>
                        </Input>
                        {file.length > 0 && file.map((fileObj: File, index: number) => (
                            <div className='p-3 border-2 border-secondary flex justify-between rounded-xl' key={index}>
                                {fileObj.name} 
                                <Button variant={"ghost"} size={"icon"} onClick={() => deleteFile(index)}>
                                    <Trash2 className='w-5 h-5 hover:text-red-500 transition ease-in duration-200' />
                                </Button>
                            </div>
                        ))}
                    </div>

                </CardContent>
                <div className='flex justify-between'>
                    <button onClick={onPrevious} className='py-3 rounded-lg bg-purple-600 text-white text-center m-4 w-[100px] hover:scale-105 transition ease-in duration-200 font-medium'>
                        PREVIOUS
                    </button>
                    <button onClick={onNext} className='py-3 rounded-lg bg-purple-600 text-white text-center m-4 w-[100px] hover:scale-105 transition ease-in duration-200 font-medium'>
                        NEXT
                    </button>
                </div>
            </Card>
        </div>
    )
}

export default PaperInstruction