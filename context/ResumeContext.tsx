"use client"
import React, { createContext, useContext, useState } from "react";

interface Resume {
    name: string;
    date: Date;
    size: string;
    file: File;
}

interface ResumeContextType {
    resumes: Resume[];
    setResumes: React.Dispatch<React.SetStateAction<Resume[]>>;
    selectedResumeIndex: number | null;
    setSelectedResumeIndex: React.Dispatch<React.SetStateAction<number | null>>;
    showModalIndex: number | null;
    setShowModalIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [resumes, setResumes] = useState<Resume[]>([]);
    const [selectedResumeIndex, setSelectedResumeIndex] = useState<number | null>(null);
    const [showModalIndex, setShowModalIndex] = useState<number | null>(null);

    return (
        <ResumeContext.Provider
            value={{
                resumes,
                setResumes,
                selectedResumeIndex,
                setSelectedResumeIndex,
                showModalIndex,
                setShowModalIndex,
            }}
        >
            {children}
        </ResumeContext.Provider>
    );
};

export const useResumeContext = () => {
    const context = useContext(ResumeContext);
    if (!context) {
        throw new Error("useResumeContext must be used within a ResumeProvider");
    }
    return context;
};
