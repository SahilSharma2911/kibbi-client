"use client"

import React, { useEffect, useState } from 'react'
import Stepper from '../Resume/Stepper'
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import Experience from './Experience'
import Image from 'next/image'
import Skills from './Skills'
import LicenseCertification from './LicenseCertification'
import Link from 'next/link'
import { useResumeContext } from '@/context/ResumeContext'
import axios from 'axios'
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation'
import { useResumeData } from '@/context/ResumeDataContext'

const ConfirmYourProfile = () => {
    const { setResumeData } = useResumeData();
    const router = useRouter();
    const handleUploadAnother = () => {
        router.push('/resume?from=confirm')
    }
    const { resumes, selectedResumeIndex } = useResumeContext();
    const selectedResume = selectedResumeIndex !== null ? resumes[selectedResumeIndex] : null;
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    const popupVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
    };

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const parseResume = async () => {
            if (!selectedResume?.file) {
                setIsLoading(false);
                return;
            }

            const formData = new FormData();
            formData.append('file', selectedResume.file);

            try {
                const response = await axios.post('/api/parse-resume', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                setResumeData(response.data);
                console.log("API Response:", response.data);
            } catch (error) {
                console.error("Failed to parse resume:", error);
            } finally {
                setIsLoading(false);
            }
        };

        parseResume();
    }, [selectedResume]);

    if (isLoading) {
        return (
            <main className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="text-center">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status"></div>
                    <p className="text-gray-700 mt-4">Loading your profile...</p>
                </div>
            </main>
        );
    }

    return (
        <main className="py-10 font-sans px-[1rem] md:px-[3rem] lg:px-[6rem]">
            <section className="bg-white px-4 py-7 rounded-2xl">
                <h1 className=' font-caveat text-red font-bold text-2xl md:text-3xl pb-6'>Confirm your profile</h1>
                <Stepper />
                <div className='w-full mt-7 md:mt-12 flex flex-col lg:flex-row gap-8'>
                    {/* left side  */}
                    <div className='w-full lg:w-[50%] space-y-3 font-sans font-medium md:px-2'>
                        <h3 className='font-medium'>View Resume</h3>
                        <Image
                            src={"/Images/resume.png"}
                            alt='logo'
                            width={500}
                            height={500}
                            className="object-contain w-full border-8 rounded-md border-[#D9D9D9]"
                        />
                    </div>
                    {/* right side  */}
                    <div className='w-full lg:w-[50%] mt-3 md:mt-10 space-y-3'>
                        <PersonalInfo />
                        <Education />
                        <Experience />
                        <Skills />
                        <LicenseCertification />
                    </div>
                </div>
                <div className="w-full flex justify-end items-center mt-7 gap-3">
                    <button
                        className="text-sm bg-[#979797] hover:bg-[#868686] transition duration-300 rounded-lg py-2.5 px-5 text-white"
                        onClick={openPopup}
                    >
                        Upload Another Resume
                    </button>
                    <Link href={"/resume/confirm-your-profile"}>
                        <button className="text-sm bg-[#D9292F] hover:bg-[#b22225] transition duration-300 rounded-lg py-2.5 px-5 text-white">
                            Next
                        </button>
                    </Link>
                </div>

                {/* Popup modal */}
                <AnimatePresence>
                    {isPopupOpen && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="bg-white rounded-lg p-6 w-96"
                                variants={popupVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-lg font-semibold mb-4">Confirm Your Profile</h2>
                                <p className="mb-4">Are you sure you want to upload another resume?</p>
                                <div className="flex justify-end gap-4">
                                    <button
                                        onClick={() => {
                                            handleUploadAnother();
                                            closePopup();
                                        }}
                                        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                                    >
                                        Upload Another Resume
                                    </button>
                                    <button
                                        className="bg-gray-300 hover:bg-gray-400 transition duration-300 rounded-lg py-2 px-4"
                                        onClick={closePopup}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

        </main>
    )
}

export default ConfirmYourProfile
