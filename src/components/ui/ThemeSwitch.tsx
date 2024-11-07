"use client"

import * as React from "react"


import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Toggle } from "./toggle"

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  return (
    <Toggle size={'sm'} variant="outline" onClick={() => { theme === "light" ? setTheme("dark") : setTheme("light") }} aria-label="Toggle italic">
    

     <Moon className={`${theme === "light" ? "block" : "hidden"} text-foreground w-5 h-5` }/> 
     <Sun className={`${theme === "light" ? "hidden" : "block"} text-foreground w-5 h-5`} />
    </Toggle>
  )
}
