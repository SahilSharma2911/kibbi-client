"use client"
import React, { useState } from 'react'
import Stepper from '../Resume/Stepper'
import Section1 from './Section1'
import Section2 from './Section2'

const DropResume = () => {
    const [currentSection, setCurrentSection] = useState(1);

    const handleNext = () => {
        setCurrentSection(2);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Render different content based on currentSection
    const renderSection = () => {
        switch (currentSection) {
            case 1:
                return (
                    <Section1 onNext={handleNext} />
                );
            case 2:
                return (
                    <div className='pb-20 md:pb-44'>
                        <Section2 />
                    </div>
                )
            default:
                return <Section1 onNext={handleNext} />;
        }
    };

    return (
        <main className="py-10 font-sans px-[1rem] md:px-[3rem] lg:px-[6rem]">
            <section className="bg-white px-2 md:px-4 py-7 rounded-2xl">
                <h1 className='font-caveat text-red font-bold text-2xl md:text-3xl pb-6 px-2 md:px-0'>
                    Drop your resume
                </h1>
                <Stepper />
                {renderSection()}
            </section>
        </main>
    )
}

export default DropResume