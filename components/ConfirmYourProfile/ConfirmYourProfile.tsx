"use client"

import React, { useEffect, useState } from 'react'
import Stepper from '../Resume/Stepper'
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import Experience from './Experience'
// import Image from 'next/image'
import Skills from './Skills'
import LicenseCertification from './LicenseCertification'
import Link from 'next/link'
import { useResumeContext } from '@/context/ResumeContext'
import axios from 'axios'
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation'
import { useResumeData } from '@/context/ResumeDataContext'
import toast from 'react-hot-toast'
import ViewResume from './ViewResume'

const ConfirmYourProfile = () => {
    const { setResumeData } = useResumeData();
    const router = useRouter();
    const handleUploadAnother = () => {
        router.push('/resume?from=confirm')
    }
    const { resumes, selectedResumeIndex } = useResumeContext();
    const selectedResume = selectedResumeIndex !== null ? resumes[selectedResumeIndex] : null;

    const [isEditingList, setIsEditingList] = useState([false, false, false, false, false]);

    const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isEditingList.includes(true)) {
            e.preventDefault();
            toast.dismiss();
            toast("Please finish editing all fields before proceeding", {
                icon: "⚠️ ",
                style: {
                    borderRadius: "10px",
                },
            });
        }
    };

    const handleEditingChange = (index: number, value: boolean) => {
        setIsEditingList((prevState) => {
            const newState = [...prevState];
            newState[index] = value;
            return newState;
        });
    };

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    const popupVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
    };

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const parseResume = async () => {
            if (!selectedResume?.file) {
                setError(true);
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
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        parseResume();
    }, [selectedResume]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) {
        return (
            <main className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-gray-100">
                <div className="text-center">
                    <div className="flex justify-center items-center">
                        <svg
                            className="animate-spin h-8 w-8 text-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    </div>

                    <p className="font-medium text-lg mt-4">Loading your profile...</p>
                </div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-gray-100">
                <div className="text-center">
                    <p className="font-medium text-lg">Something went wrong. Please try again.</p>
                    <Link href="/resume" className='mt-4 px-4 py-2 hover:underline text-sky rounded '>
                        Back to Confirm Resume
                    </Link>
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
                    <div className='w-full lg:w-[50%] space-y-3 font-sans font-medium md:px-2 hidden lg:block'>
                        <h3 className='font-medium'>View Resume</h3>
                        {/* <Image
                            src={"/Images/resume.png"}
                            alt='logo'
                            width={500}
                            height={500}
                            className="object-contain w-full border-8 rounded-md border-[#D9D9D9]"
                        /> */}
                        <ViewResume />
                    </div>
                    {/* right side  */}
                    <div className='w-full lg:w-[50%] mt-3 md:mt-10 space-y-3'>
                        <PersonalInfo
                            isEditing={isEditingList[0]}
                            setIsEditing={(value) => handleEditingChange(0, value)}
                        />
                        <Education
                            isEditing={isEditingList[1]}
                            setIsEditing={(value) => handleEditingChange(1, value)}
                        />
                        <Experience
                            isEditing={isEditingList[2]}
                            setIsEditing={(value) => handleEditingChange(2, value)}
                        />
                        <Skills
                            isEditing={isEditingList[3]}
                            setIsEditing={(value) => handleEditingChange(3, value)}
                        />
                        <LicenseCertification
                            isEditing={isEditingList[4]}
                            setIsEditing={(value) => handleEditingChange(4, value)}
                        />
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
                        <button className="text-sm bg-[#D9292F] hover:bg-[#b22225] transition duration-300 rounded-lg py-2.5 px-5 text-white"
                            onClick={handleNextClick}>
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
                                className="bg-white rounded-lg w-[95%] lg:w-[50%] "
                                variants={popupVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-lg font-sans text-red font-semibold mb-4 mx-6 mt-6 text-[1.5rem] ">Are You Sure? This Will Override Your Data.</h2>
                                <hr />
                                <div className='bg-white px-4 pb-6 pt-1 rounded-2xl'>

                                    <div className=' font-sans text-[0.9rem]'>
                                        <h3 className=' mb-4'>
                                            You’ve selected a new resume. If you continue, our system will:
                                        </h3>

                                        {/* points  */}
                                        <ul className=' font-normal space-y-4'>
                                            <li className=' flex items-center gap-3'>
                                                <span className=' w-6 h-6 p-2 font-architects bg-yellow rounded-full flex items-center justify-center font-extrabold'>01.</span>
                                                Parse the new resume
                                            </li>
                                            <li className=' flex items-center gap-3'>
                                                <span className=' w-6 h-6 p-2 font-architects bg-yellow rounded-full flex items-center justify-center font-extrabold'>02.</span>
                                                Override your current profile data with the updated information from the resume
                                            </li>
                                            <li className=' flex items-center gap-3'>
                                                <span className=' w-6 h-6 p-2 font-architects bg-yellow rounded-full flex items-center justify-center font-extrabold'>03.</span>
                                                Any existing edits in your profile will be replaced
                                            </li>
                                        </ul>

                                        <p className=' mt-4'>
                                            If you’d like to keep your current profile, cancel and upload the resume later.
                                        </p>

                                    </div>
                                </div>
                                <div className="flex justify-end gap-4 p-6">
                                    <button
                                        onClick={closePopup}
                                        className="text-sm bg-[#979797] hover:bg-[#868686] transition duration-300 rounded-lg py-2.5 px-5 text-white"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="text-sm bg-[#D9292F] hover:bg-[#b22225] transition duration-300 rounded-lg py-2.5 px-5 text-white"
                                        onClick={() => {
                                            handleUploadAnother();
                                            closePopup();
                                        }}
                                    >
                                        Confirm and Continue
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
