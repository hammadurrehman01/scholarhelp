"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect, Dispatch, SetStateAction } from "react";


// Define the type for the context value
interface TopicContextType {
  topic: string;
  selectedValue: number;
  wordCount: number;
  level: string;
  paper: string;
  quality: string;
  deadline: string;
  subject: string;
  language: string;
  source: number;
  format: string;
  referencing: string;
  pricePerPage: number;
  totalPrice: number;
  file: File[];
  name: string;
  email: string;
  phone: string;
  country: string;
  notes: string;
  symbol: string;
  ppp: number;
  unit: string;
  setTopic: (newTopic: string) => void;
  setSelectedValue: (newSelectedValue: number) => void;
  setLevel: (newLevel: string) => void;
  setPaper: (newPaper: string) => void;
  setQuality: (newQuality: string) => void;
  setDeadline: (newDeadline: string) => void;
  setSubject: (newSubject: string) => void;
  setLanguage: (newLanguage: string) => void;
  setSource: (newSource: number) => void;
  setFormat: (newFormat: string) => void;
  setReferencing: (newReferencing: string) => void;
 addFiles: (prevFiles:FileList)=> void;
 deleteFile: (index:number)=> void
  setFile: ( newFiles : any)=> void
  setName: (newName: string) => void;
  setEmail: (newEmail: string) => void;
  setPhone: (newPhone: string) => void;
  setCountry: (newCountry: string) => void;
  setNotes: (newNotes: string) => void;
  setSymbol: (newSymbol: string) => void;
  setPpp: (newPpp: number) => void;
  setUnit: (newUnit: string) => void;
}

// Create the context with an initial value of undefined
const TopicContext = createContext<TopicContextType | undefined>(undefined);

// Create a Provider Component
export const TopicProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [topic, setTopic] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<number>(1); // Pages
  const [wordCount, setWordCount] = useState<number>(250); // Words per page
  const [level, setLevel] = useState<string>("undergraduate");
  const [paper, setPaper] = useState<string>("Dissertation");
  const [quality, setQuality] = useState<string>("Standard Quality");
  const [deadline, setDeadline] = useState<string>("10 days");
  const [subject, setSubject] = useState<string>("Chemistry");
  const [language, setLanguage] = useState<string>("English (U.K)");
  const [source, setSource] = useState<number>(10);
  const [format, setFormat] = useState<string>("Double Spaced");
  const [referencing, setReferencing] = useState<string>("Harvard Referencing");
  const [pricePerPage, setPricePerPage] = useState<number>(8); // Initial price per page
  const [totalPrice, setTotalPrice] = useState<number>(8 * selectedValue); // Total price
  const [name,setName] = useState<string>('');
  const [email,setEmail] = useState<string>('');
  const [phone,setPhone] = useState<string>('');
  const [country,setCountry] = useState<string>('United States');
  const [notes,setNotes] = useState<string>('');
  const [symbol, setSymbol] = useState<string>('');
  const [ppp, setPpp] = useState<number>(0);
  const [unit, setUnit] = useState<string>('');
  const [file, setFile] = useState<File[]>([]); 

  const addFiles = (newFiles: FileList) => {
    setFile((prevFiles: File[]) => {
      return [...prevFiles, ...Array.from(newFiles)]; // Convert FileList to array and add to existing files
    });
  };
  
  // Delete a file by index
  const deleteFile = (index: number) => {
    setFile((prevFiles: File[]) => {
      // Check if prevFiles is undefined or empty
      if (!prevFiles || prevFiles.length === 0) return prevFiles; 
      // Filter out the file at the given index
      return prevFiles.filter((_, i: number) => i !== index); 
    });
  };



// Update word count when selectedValue changes
useEffect(() => {
  if (selectedValue === 1) {
    setWordCount(300); // Initial value for 1 page
  } else if (selectedValue === 2) {
    setWordCount(500); // Exact value for 2 pages
  } else {
    setWordCount(500 + (selectedValue - 2) * 250); // Increment by 250 starting from 500 for 2 pages
  }
}, [selectedValue]);

  // Function to calculate price based on wordCount, deadline, format, and quality
  const calculatePrice = () => {
    let basePricePerPage = 8;

    // Adjust price based on deadline
    switch (deadline) {
        // Days between 10 to 30 will have a base price of 8
        case "10 days":
        case "11 days":
        case "12 days":
        case "13 days":
        case "14 days":
        case "15 days":
        case "16 days":
        case "17 days":
        case "18 days":
        case "19 days":
        case "20 days":
        case "21 days":
        case "22 days":
        case "23 days":
        case "24 days":
        case "25 days":
        case "26 days":
        case "27 days":
        case "28 days":
        case "29 days":
        case "30 days":
          basePricePerPage = 8;
          break;
      
        // 6 to 9 days will have a base price of 10
        case "6 days":
        case "7 days":
        case "8 days":
        case "9 days":
          basePricePerPage = 10;
          break;
      
        // 3 to 5 days will have a base price of 12
        case "3 days":
        case "4 days":
        case "5 days":
          basePricePerPage = 12;
          break;
      
        // 2 days will have a base price of 18
        case "2 days":
          basePricePerPage = 18;
          break;
      
        // 1 day will have a base price of 20
        case "1 day":
          basePricePerPage = 20;
          break;
      
        // 12 hours will have a base price of 24
        case "12 hours":
          basePricePerPage = 24;
          break;
      
        // 8 hours will have a base price of 29
        case "8 hours":
          basePricePerPage = 29;
          break;
      
        // 4 hours will have a base price of 34
        case "4 hours":
          basePricePerPage = 34;
          break;
      
        default:
          basePricePerPage = 8; // Default base price for any other deadline
      }

    // Adjust price if format is single spaced
    if (format === "Single Spaced") {
      basePricePerPage += 9;
    }

    // Adjust price if quality is premium
    if (quality === "Premium Quality") {
      basePricePerPage += 5;
    }

    // Set the price per page
    setPricePerPage(basePricePerPage);

    // Calculate the total price based on the number of pages
    const total = basePricePerPage * selectedValue;
    setTotalPrice(total);
  };

  // Update price whenever relevant values change
  useEffect(() => {
    calculatePrice();
  }, [selectedValue, deadline, format, quality]);

  return (
    <TopicContext.Provider
      value={{
        topic,
        setTopic,
        selectedValue,
        setSelectedValue,
        wordCount,
        level,
        setLevel,
        paper,
        setPaper,
        quality,
        setQuality,
        deadline,
        setDeadline,
        subject,
        setSubject,
        language,
        setLanguage,
        source,
        setSource,
        format,
        setFormat,
        referencing,
        setReferencing,
        file,
        setFile,
        addFiles,
        deleteFile,
        pricePerPage, // Price per page
        totalPrice, // Total price
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        country,
        setCountry,
        notes,
        setNotes,
        symbol,
        setSymbol,
        ppp,
        setPpp,
        unit,
        setUnit
      }}
    >
      {children}
    </TopicContext.Provider>
  );
};

// Create a custom hook for easier access to the context
export const useTopic = (): TopicContextType => {
  const context = useContext(TopicContext);
  if (!context) {
    throw new Error("useTopic must be used within a TopicProvider");
  }
  return context;
};
