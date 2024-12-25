"use client";

import React, { useState } from "react";
import Stepper from "./Stepper";
import { FaFilePdf } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";

interface Resume {
  name: string;
  date: Date;
  size: string;
}

const Upload = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  // const [showModal, setShowModal] = useState(false);
  // const [selectedResume, setSelectedResume] = useState<number | null>(null);
  const [selectedResumeIndex, setSelectedResumeIndex] = useState<number | null>(null);
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const newResume: Resume = {
        name: file.name,
        date: new Date(),
        size: `${(file.size / 1024).toFixed(2)} kb`,
      };
      setResumes([newResume, ...resumes]);
    }
  };

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <section className="pb-5 md:pb-7 font-sans px-[1rem] md:px-[3rem] lg:px-[6rem]">
      <div className="bg-white px-4 py-7 rounded-2xl">
        <Stepper />

        {/* Upload Section */}
        <div className="font-sans text-[1rem] mt-6 md:mt-10">
          <h3>Upload Your Resume</h3>
          <div className="mt-7">
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
                {/* <IoImageOutline size={40} /> */}
                <span className="mt-2">
                  Drop your resume here, or{" "}
                  <span className="hover:underline text-sky ">Click to upload</span>
                </span>
              </label>
            </div>
            <div className="mt-4">
              <h2>Or select your current resume</h2>
              {resumes.map((resume, index) => (
                <div
                  key={index}
                  className="flex w-full cursor-pointer"
                  onClick={() => setSelectedResumeIndex(index)}
                >
                  <div className="relative flex items-center mr-2">
                    <div
                      className={`w-4 h-4 rounded-full border transition-colors duration-200 ease-in-out
                ${selectedResumeIndex === index ? 'border-[#D9292F]' : 'border-gray-300'}`}
                    >
                      <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-2 h-2 rounded-full transition-all duration-200 ease-in-out
                  ${selectedResumeIndex === index ? 'bg-[#D9292F] scale-100' : 'bg-transparent scale-0'}`}
                      />
                    </div>
                  </div>
                  <div
                    className={`flex items-center justify-between p-3 border-[1.5px] rounded-lg mt-2 w-full
              transition-colors duration-200 ease-in-out
              ${selectedResumeIndex === index ? 'border-[#D9292F]' : 'border-[#F1F1F1]'}`}
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
                    <div className="text-gray-500 flex flex-col items-end gap-1 relative inli">
                      <span className="text-slate-500" >
                        <BsThreeDotsVertical />
                      </span>
                      {/* Modal */}
                      {/* {showModal && (
                        <div className="absolute top-0 left-full ml-2 bg-white shadow-lg rounded-md p-4">
                          <p className="text-slate-700">Modal Content</p>
                        </div>
                      )} */}
                      <span className="text-[0.6rem]">{resume.size}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upload;
