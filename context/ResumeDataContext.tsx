"use client"
import { createContext, useContext, ReactNode, useState } from 'react';

interface ContactInformation {
  Address: string;
  Phone: string;
  Email: string;
  LinkedIn: string;
}

interface ResumeData {
  Name: string;
  "Contact Information": ContactInformation;
  Skills: string[];
  Education: string[];
  "Work Experience": string[];
  Certifications: string[];
  Languages: string[];
}

interface ResumeDataContextType {
  resumeData: ResumeData | null;
  setResumeData: (data: ResumeData) => void;
}

const ResumeDataContext = createContext<ResumeDataContextType | undefined>(undefined);

export function ResumeDataProvider({ children }: { children: ReactNode }) {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  return (
    <ResumeDataContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeDataContext.Provider>
  );
}

export function useResumeData() {
  const context = useContext(ResumeDataContext);
  if (context === undefined) {
    throw new Error('useResumeData must be used within a ResumeDataProvider');
  }
  return context;
}