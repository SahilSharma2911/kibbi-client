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
import { MdMailOutline } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { IoEarth } from "react-icons/io5"
import { PiDotOutlineFill } from "react-icons/pi";


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
                        <div className="object-contain w-full border-8 rounded-md border-[#D9D9D9] p-6 flex  gap-10 ">
                            {/* left side  */}
                            <div className=' flex flex-col gap-4 font-Poppins w-6/12'>

                                {/* Name  */}
                                <div>
                                    <h3 className=' font-Poppins  text-[2rem] font-extrabold'>HOWARD ONG</h3>
                                    <p className=' font-Poppins text-[1.1rem]'>Financial Analyst</p>
                                </div>

                                {/* My Contact  */}
                                <div>

                                    <h3 className="text-[0.8rem] text-[#a28b91] underline decoration-2 decoration-[#a28b91] underline-offset-8 font-bold">My Contact</h3>
                                    <ul className=' mt-4 text-[0.6rem]'>
                                        <li className=' flex items-center gap-1'>
                                            <span> <MdMailOutline /> </span>
                                            hello@youremail.com
                                        </li>
                                        <li className=' flex items-center gap-1'>
                                            <span> <LuPhoneCall /> </span>
                                            +123-456-9560
                                        </li>
                                        <li className=' flex items-center gap-1'>
                                            <span> <FaLocationDot /> </span>
                                            hello@youremail.com
                                        </li>
                                        <li className=' flex items-center gap-1'>
                                            <span> <IoEarth /> </span>
                                            hello@youremail.com
                                        </li>
                                    </ul>

                                </div>

                                {/* Hard skill  */}
                                <div>
                                    <h3 className="text-[0.8rem] text-[#a28b91] underline decoration-2 decoration-[#a28b91] underline-offset-8 font-bold">Hard Skill</h3>
                                    <ul className=' list-disc  mt-4 text-[0.6rem] ml-3'>
                                        <li>
                                            Financial modeling and reporting
                                        </li>
                                        <li>
                                            Data mining and analysis
                                        </li>
                                        <li>
                                            Financial accounting
                                        </li>
                                        <li>
                                            Business Valuation
                                        </li>
                                        <li>
                                            Advanced SAS proficiency
                                        </li>
                                    </ul>
                                </div>

                                {/* Education Background  */}
                                <div>
                                    <h3 className="text-[0.8rem] text-[#a28b91] underline decoration-2 decoration-[#a28b91] underline-offset-8 font-bold">Education Background</h3>
                                    <div className=' mt-4'>
                                        <div className=' flex gap-2'>
                                            <span>
                                                <PiDotOutlineFill />
                                            </span>
                                            <div className=' flex flex-col font-Poppins font-light text-[0.6rem] '>
                                                <span className=' font-semibold'>
                                                    Borcelle Business School
                                                </span>
                                                Masters in Accounting
                                                <br />
                                                Completed in 2016
                                            </div>

                                        </div>

                                        <div className=' flex gap-2'>
                                            <span>
                                                <PiDotOutlineFill />
                                            </span>
                                            <div className=' flex flex-col font-Poppins font-light text-[0.6rem] '>
                                                <span className=' font-semibold'>
                                                    Borcelle Business School
                                                </span>
                                                Masters in Accounting
                                                <br />
                                                Completed in 2016
                                            </div>

                                        </div>

                                        <div className=' flex gap-2'>
                                            <span>
                                                <PiDotOutlineFill />
                                            </span>
                                            <div className=' flex flex-col font-Poppins font-light text-[0.6rem] '>
                                                <span className=' font-semibold'>
                                                    Borcelle Business School
                                                </span>
                                                Masters in Accounting
                                                <br />
                                                Completed in 2016
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                {/* About Me  */}
                                <div >

                                    <h3 className="text-[0.8rem] text-[#a28b91] underline decoration-2 decoration-[#a28b91] underline-offset-8 font-bold">About Me</h3>
                                    <p className=' mt-4 text-[0.6rem] w-9/12'>
                                        Dedicated and detail-oriented Financial Analyst with 10
                                        years of experience. Eager to apply proven-budget maximization skills for Bank of Brocelle in monitoring, maintaining, and completing client billing and
                                        reconciliations. Special interest in achieving the
                                        millennial market and helping with retirement and
                                        general financial planning.
                                    </p>

                                </div>
                            </div>

                            {/* right side  */}
                            <div className=' w-6/12'>




                                {/* Professional Experience  */}
                                <div className=' mt-8'>

                                    <h3 className="text-[0.8rem] text-[#a28b91] underline decoration-2 decoration-[#a28b91] underline-offset-8 font-bold">Professional Experience</h3>

                                    <div className=' text-[0.6rem] '>

                                        {/* first experience  */}

                                        <div>

                                            <p className=' mt-4 font-semibold'>Ginyard International Co. | Financial Analyst 2020 - Present</p>

                                            <h3>Key responsibilities:</h3>
                                            <ul className=' list-disc ml-6'>
                                                <li>Analyze current and past financial data</li>
                                                <li>Analyze current and past financial data</li>
                                                <li>Analyze current and past financial data</li>
                                                <li>Analyze current and past financial data</li>
                                                <li>Analyze current and past financial data</li>
                                                <li>Analyze current and past financial data</li>
                                            </ul>
                                        </div>

                                        {/* second experience  */}

                                        <div>

                                            <p className=' mt-4 font-semibold'>Ingoude Company | Junior/Investment Analyst
                                                2015 - 2020
                                            </p>

                                            <h3>Key responsibilities:</h3>
                                            <ul className=' list-disc ml-6'>
                                                <li>Looked at financial performance and identified trends</li>
                                                <li>Explored various investment opportunities</li>
                                            </ul>
                                        </div>

                                        {/* third experience  */}

                                        <div>

                                            <p className=' mt-4 font-semibold'>Timmerman Industries | Financial Analyst Intern
                                                2012 - 2015
                                            </p>

                                            <h3>Key responsibilities:</h3>
                                            <ul className=' list-disc ml-6'>
                                                <li>Analyzed financial data</li>
                                                <li>Observed financial performance and identified trends</li>
                                                <li>
                                                    Prepared reports on the above information and reported the insights
                                                </li>
                                            </ul>
                                        </div>



                                    </div>




                                </div>

                                {/* About Me  */}
                                <div className=' mt-8'>

                                    <h3 className="text-[0.8rem] text-[#a28b91] underline decoration-2 decoration-[#a28b91] underline-offset-8 font-bold">About Me</h3>
                                    <ul className=' mt-4 text-[0.6rem]'>
                                        <li className=' flex items-center gap-1'>
                                            <span> <MdMailOutline /> </span>
                                            hello@youremail.com
                                        </li>
                                        <li className=' flex items-center gap-1'>
                                            <span> <LuPhoneCall /> </span>
                                            +123-456-9560
                                        </li>
                                        <li className=' flex items-center gap-1'>
                                            <span> <FaLocationDot /> </span>
                                            hello@youremail.com
                                        </li>
                                        <li className=' flex items-center gap-1'>
                                            <span> <IoEarth /> </span>
                                            hello@youremail.com
                                        </li>
                                    </ul>

                                </div>



                            </div>

                        </div>

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
                                className="bg-white rounded-lg  w-[50%] "
                                variants={popupVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-lg font-sans text-red font-semibold mb-4 ml-6 mt-6 text-[1.5rem] ">Are You Sure? This Will Override Your Data.</h2>
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
                                <div className="flex justify-end gap-4 p-4">
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
