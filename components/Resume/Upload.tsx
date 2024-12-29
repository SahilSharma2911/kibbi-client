"use client";

import React, { useEffect, useState } from "react";
import Stepper from "./Stepper";
import { FaFilePdf } from "react-icons/fa6";
import { BsThreeDotsVertical, BsX } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useResumeContext } from "@/context/ResumeContext";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const Upload = () => {
  const searchParams = useSearchParams()
  const {
    resumes,
    setResumes,
    selectedResumeIndex,
    setSelectedResumeIndex,
    showModalIndex,
    setShowModalIndex,
  } = useResumeContext();
  const selectedResume = selectedResumeIndex !== null ? resumes[selectedResumeIndex] : null;

  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!selectedResume) {
      e.preventDefault();
      toast("Please select your resume!", {
        icon: "📄",
        style: {
          borderRadius: "10px",
        },
      });
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const newResume = {
        name: file.name,
        date: new Date(),
        size: `${(file.size / 1024).toFixed(2)} kb`,
        file: file
      };
      setResumes([newResume, ...resumes]);
    }
  };

  const handleRemoveResume = (index: number) => {
    const updatedResumes = resumes.filter((_, i) => i !== index);
    setResumes(updatedResumes);
    setShowModalIndex(null);
    if (selectedResumeIndex === index) {
      setSelectedResumeIndex(null);
    }
  };

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const [isReturningFromConfirm, setIsReturningFromConfirm] = useState(false)

  useEffect(() => {
    // Check if we're returning from confirm page using URL parameter
    setIsReturningFromConfirm(searchParams.get('from') === 'confirm')
  }, [searchParams])

  return (
    <section className="pb-10 font-sans px-[1rem] md:px-[3rem] lg:px-[6rem]">
      <div className="bg-white px-4 py-5 md:py-7 rounded-2xl">
        <Stepper />

        <div className="font-sans text-[1rem] mt-6 md:mt-10">
          <h2 className="font-medium">Upload Your Resume</h2>
          <div className="mt-4 md:mt-7">
            <div className="border-dashed border-2 border-gray-300 p-6 text-center">
              <input
                type="file"
                className="hidden"
                id="file-upload"
                onChange={handleFileUpload}
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-slate flex flex-col items-center"
              >
                <Image src={"/Images/pdf-upload.png"} width={30} height={30} alt="pdf" />
                <span className="mt-2">
                  Drop your resume here, or{" "}
                  <span className="hover:underline text-sky font-medium">Click to upload</span>
                </span>
                <span className="mt-2 text-[#737992] text-sm">
                  For the best results, upload your resume in PDF, DOC, DOCX format. If you must use an image, ensure the text is clear
                </span>
              </label>
            </div>
            <div className="mt-6">
              <h2 className="font-medium">Or select your current resume</h2>
              {resumes.map((resume, index) => (
                <div key={index} className="flex w-full">
                  <div
                    className="relative flex items-center mr-2 cursor-pointer"
                    onClick={() => setSelectedResumeIndex(index)}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border transition-colors duration-200 ease-in-out ${selectedResumeIndex === index ? "border-[#D9292F]" : "border-gray-300"
                        }`}
                    >
                      <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-200 ease-in-out ${selectedResumeIndex === index ? "bg-[#D9292F] scale-100" : "bg-transparent scale-0"
                          }`}
                      />
                    </div>
                  </div>
                  <div
                    className={`flex items-center justify-between p-3 border-[1.5px] rounded-lg mt-2 w-full transition-colors duration-200 ease-in-out ${selectedResumeIndex === index ? "border-[#D9292F]" : "border-[#F1F1F1]"
                      }`}
                  >
                    <div className="flex items-center">
                      <div className="flex items-center gap-3">
                        <span className="text-[#D9292F] text-[2.5rem]">
                          <FaFilePdf />
                        </span>
                        <p className="flex flex-col">
                          <span>{resume.name}</span>
                          <span className="text-[0.6rem] text-slate-500">
                            Uploaded on {formatDate(resume.date)}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="text-gray-800 flex flex-col items-end gap-1 relative">
                      <button
                        className="text-slate-500"
                        onClick={() => setShowModalIndex(showModalIndex === index ? null : index)}
                      >
                        {showModalIndex === index ? (
                          <motion.span
                            key="cross"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <BsX />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="dots"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <BsThreeDotsVertical />
                          </motion.span>
                        )}
                      </button>
                      <AnimatePresence>
                        {showModalIndex === index && (
                          <motion.div
                            className="absolute top-5 -right-4 bg-white shadow-xl border rounded-md p-2 z-10"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                          >
                            <button
                              onClick={() => handleRemoveResume(index)}
                              className="text-red-500 hover:bg-red-50 px-3.5 py-1.5 rounded w-full justify-center items-center text-sm flex gap-1.5"
                            >
                              <Image src={"/Images/delete.png"} width={17} height={17} alt="delete" />
                              Remove
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <span className="text-[0.6rem]">{resume.size}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-end items-center mt-7">
              {isReturningFromConfirm ? (
                <>
                  <Link href={"#"}>
                    <button
                      className="text-sm bg-[#979797] hover:bg-[#868686] transition duration-300 rounded-lg py-2.5 px-5 text-white mr-3"
                    >
                      Resume My Work
                    </button>
                  </Link>
                  <Link href={"/resume/confirm-your-profile"}>
                    <button className="text-sm bg-[#D9292F] hover:bg-[#b22225] transition duration-300 rounded-lg py-2.5 px-5 text-white ">
                      Continue
                    </button>
                  </Link>
                </>

              ) : (
                <>

                  <Link href={"/resume/confirm-your-profile"} passHref>
                    <button
                      onClick={handleNextClick}
                      className="text-sm bg-[#D9292F] hover:bg-[#b22225] transition duration-300 rounded-lg py-2.5 px-5 text-white"
                    >
                      Next
                    </button>
                  </Link>
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upload;