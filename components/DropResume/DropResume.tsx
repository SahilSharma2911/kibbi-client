"use client"
import React, { useRef, useState } from 'react'
import Stepper from '../Resume/Stepper'
import Section1 from './Section1'
import Section2 from './Section2'
import Link from 'next/link'
// hello
interface FormRef {
    submit: () => void;
}

const DropResume = () => {
    const formRef = useRef<FormRef>(null);
    const [currentSection, setCurrentSection] = useState(1);

    const handleNext = () => {
        formRef.current?.submit();
        setCurrentSection(2);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Render different content based on currentSection
    const renderSection = () => {
        switch (currentSection) {
            case 1:
                return (
                    <>
                        <Section1 ref={formRef} />
                        <div className="w-full flex justify-end items-center mt-28">
                            <Link href={"/resume/confirm-your-profile"}>
                                <button className="text-sm bg-[#979797] hover:bg-[#868686] transition duration-300 rounded-lg py-2.5 px-5 text-white mr-3">
                                    Back
                                </button>
                            </Link>
                            <button
                                onClick={handleNext}
                                className="text-sm bg-[#D9292F] hover:bg-[#b22225] transition duration-300 rounded-lg py-2.5 px-5 text-white"
                            >
                                Next
                            </button>
                        </div>
                    </>
                );
            case 2:
                return <Section2 />;
            default:
                return <Section1 ref={formRef} />;
        }
    };

    return (
        <main className="py-10 font-sans px-[1rem] md:px-[3rem] lg:px-[6rem]">
            <section className="bg-white px-2 md:px-4 py-7 rounded-2xl">
                <h1 className='font-caveat text-red font-bold text-2xl md:text-3xl pb-6'>
                    Drop your resume
                </h1>
                <Stepper />
                <Section1 />
                {/* <Section2 /> */}
            </section>
        </main>
    )
}

export default DropResume