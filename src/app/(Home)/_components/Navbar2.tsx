'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ThemeSwitch } from '@/components/ui/ThemeSwitch'
import Image from 'next/image'


export default function Navbar2() {

    const services = [
        { title: "Take My Exam", href: "/take-my-exam" },
        { title: "Take My GRE Exam", href: "/take-my-gre-exam" },
        { title: "Take GMAT Online Exam", href: "/take-gmat-online-exam" },
        { title: "Take LSAT Exam Online", href: "/lsat-exam-prep" },
        { title: "Toefl Exam Online", href: "/toefl-exam-online" },
        { title: "Take my Teas Exam For me", href: "/take-my-teas-exam-for-me" },
        { title: "Hesi Exam", href: "/hesi-exam" },
        { title: "Take My GED For Me", href: "/take-my-ged-for-me" },
        { title: "PTE Academic Online", href: "/pte-academic-online" },
        { title: "Pay Someone To Take My Class", href: "/pay-someone-to-take-my-class" },
    ]

    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [mobileDropdowns, setMobileDropdowns] = React.useState({ services: false, samples: false })
    const [servicesOpen, setServicesOpen] = React.useState(false)
    const [samplesOpen, setSamplesOpen] = React.useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const toggleMobileDropdown = (dropdown: 'services' | 'samples') => {
        setMobileDropdowns(prev => ({
            ...prev,
            [dropdown]: !prev[dropdown]
        }))
    }
    return (
        <nav className="fixed z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between py-2">
                <div className="flex items-center">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <img className="block dark:hidden" src={'/assets/weblogo.png'} width={80} height={80} alt="logo" />
                        <Image className="dark:block hidden" src={'/assets/weblogodark.png'} width={80} height={80} alt="logo" />
                        <span className="hidden font-bold xl:inline-block">{process.env.NEXT_PUBLIC_WEBSITE_NAME}</span>
                    </Link>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:items-center">
                    <div className="flex space-x-4">
                        <Button variant="ghost" asChild>
                            <Link className='hover:text-violet-500 hover:font-semibold' href="/">Home</Link>
                        </Button>
                        <DropdownMenu open={servicesOpen} onOpenChange={setServicesOpen}>
                            <div className='group'
                                onMouseEnter={() => setServicesOpen(true)}
                                onMouseLeave={() => setServicesOpen(false)}
                            >
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="inline-flex items-center group-hover:text-violet-500 group-hover:font-semibold">
                                        Services
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                                    {services.map((service, index) => (
                                        <DropdownMenuItem
                                            key={index}
                                            className='font-medium dark:text-zinc-200 text-zinc-800 hover:text-purple-500 dark:hover:text-purple-400 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                        >
                                            <Link href={service.href}>{service.title}</Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </div>
                        </DropdownMenu>
                        <Button variant="ghost" asChild>
                            <Link className='hover:text-violet-500 hover:font-semibold' href="/contact-us">Contact Us</Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link className='hover:text-violet-500 hover:font-semibold' href="/about-us">About Us</Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link className='hover:text-violet-500 hover:font-semibold' href="/reviews">Reviews</Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link className='hover:text-violet-500 hover:font-semibold' href="/order-now">Order Now</Link>
                        </Button>
                        <DropdownMenu open={samplesOpen} onOpenChange={setSamplesOpen}>
                            <div
                                onMouseEnter={() => setSamplesOpen(true)}
                                onMouseLeave={() => setSamplesOpen(false)}
                            >
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="inline-flex items-center hover:text-violet-500 hover:font-semibold">
                                        Samples
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='grid gap-3 p-4 lg:grid-cols-2 lg:w-[400px]'>
                                    <DropdownMenuItem className='font-medium dark:text-zinc-200 text-zinc-800 hover:text-purple-500 dark:hover:text-purple-400 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                        <Link href="/gre-sample-papers">GRE Sample Papers</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className='font-medium dark:text-zinc-200 text-zinc-800 hover:text-purple-500 dark:hover:text-purple-400 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                        <Link href="/ged-sample-papers">GED Sample Paper</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className='font-medium dark:text-zinc-200 text-zinc-800 hover:text-purple-500 dark:hover:text-purple-400 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                        <Link href="/gmat-sample-papers">GMAT Sample Paper</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className='font-medium dark:text-zinc-200 text-zinc-800 hover:text-purple-500 dark:hover:text-purple-400 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                        <Link href="/lsat-sample-papers">LSAT Sample Paper</Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </div>
                        </DropdownMenu>
                        <ThemeSwitch />
                    </div>
                </div>
                <div className="flex items-center lg:hidden">
                    <Button variant="ghost" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
                </div>
            </div>
        </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Button variant="ghost" className="block w-full text-left hover:scale-105 hover:bg-violet-500 rounded-lg transition ease-in duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                            <Link href="/" className="block">Home</Link>
                        </Button>
                        <div>
                            <Button
                                variant="ghost"
                                className="flex w-full items-center justify-between hover:scale-105 hover:bg-violet-500 rounded-lg transition ease-in duration-200"
                                onClick={() => toggleMobileDropdown('services')}
                            >
                                Services
                                <ChevronRight className={`h-4 w-4 transition-transform ${mobileDropdowns.services ? 'rotate-90' : ''}`} />
                            </Button>
                            {mobileDropdowns.services && (
                                <div className="pl-4">
                                    {services.map((service, index) => (
                                        <Button
                                            key={index}
                                            variant="ghost"
                                            className="block w-full text-left hover:scale-105 hover:bg-violet-500 rounded-lg transition ease-in duration-200"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <Link href={service.href} className="block">
                                                {service.title}
                                            </Link>
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Button variant="ghost" className="block w-full text-left hover:scale-105 hover:bg-violet-500 rounded-lg transition ease-in duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                            <Link href="/contact-us/" className="block">Contact Us</Link>
                        </Button>
                        <Button variant="ghost" className="block w-full text-left hover:scale-105 hover:bg-violet-500 rounded-lg transition ease-in duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                            <Link href="/about-us" className="block">About Us</Link>
                        </Button>
                        <Button variant="ghost" className="block w-full text-left hover:scale-105 hover:bg-violet-500 rounded-lg transition ease-in duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                            <Link href="/reviews" className="block">Reviews</Link>
                        </Button>
                        <Button variant="ghost" className="block w-full text-left hover:scale-105 hover:bg-violet-500 rounded-lg transition ease-in duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                            <Link href="/order-now" className="block">Order Now</Link>
                        </Button>
                        <div>
                            <Button
                                variant="ghost"
                                className="flex w-full items-center justify-between hover:scale-105 hover:bg-violet-500 rounded-lg transition ease-in duration-200"
                                onClick={() => toggleMobileDropdown('samples')}
                            >
                                Samples
                                <ChevronRight className={`h-4 w-4 transition-transform ${mobileDropdowns.samples ? 'rotate-90' : ''}`} />
                            </Button>
                            {mobileDropdowns.samples && (
                                <div className="pl-4">
                                    <Button variant="ghost" className="block w-full text-left hover:scale-105 hover:bg-violet-500 rounded-lg transition ease-in duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Link href="/gre-sample-papers" className="block">GRE Sample Papers</Link>
                                    </Button>
                                    <Button variant="ghost" className="block w-full text-left hover:scale-105 hover:bg-violet-500 rounded-lg transition ease-in duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Link href="/ged-sample-papers" className="block">GED Sample Paper</Link>
                                    </Button>
                                    <Button variant="ghost" className="block w-full text-left hover:scale-105 hover:bg-violet-500 rounded-lg transition ease-in duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Link href="/gmat-sample-papers" className="block">GMAT Sample Paper</Link>
                                    </Button>
                                    <Button variant="ghost" className="block w-full text-left hover:scale-105 hover:bg-violet-500 rounded-lg transition ease-in duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Link href="/lsat-sample-papers" className="block">LSAT Sample Paper</Link>
                                    </Button>
                                </div>
                            )}
                        </div>
                        <div className='ml-3 pt-4'>
                        <ThemeSwitch />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}