"use client"
import { createContext, useContext, ReactNode, useState } from 'react';

interface ContactInformation {
  Address: string;
  Phone: string;
  Email: string;
  LinkedIn: string;
}

interface Education {
  instituteName: string;
  certificateOrDegree: string;
  degreeName: string;
  graduationYear: string;
  currentlyEnrolled: boolean;
}

interface WorkExperience {
  position: string;
  companyName: string;
  location: string;
  startDate: string;
  endDate: string;
  currentlyWork: boolean;
  responsibilities: string;
}

interface Certification {
  documentType: string;
  documentName: string;
  issuer: string;
  issueDate: string;
  expiryDate: string;
  certificateImage: string;
}

interface ResumeData {
  "First Name": string;
  "Last Name": string;
  summary: string;
  "Contact Information": ContactInformation;
  Skills: string[];
  Education: Education[];
  "Work Experience": WorkExperience[];
  Certifications: Certification[];
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