"use client";

import React, { useState } from "react";
import Stepper from "./Stepper";
import { FaFilePdf } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";



interface Resume {
  name: string;
  date: Date; // Changed this to Date type
  size: string;
}

const Upload = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const newResume: Resume = {
        name: file.name,
        date: new Date(), // Keep this as a Date object
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
    <section className="pb-5 md:pb-7 font-sans px-[1rem] md:px-[3rem] lg:px-[6rem] mt-6 p-3">
      <div className="bg-white px-4 py-6 rounded-2xl">
        <Stepper />

        {/* Upload Section */}
        <div className="font-sans text-[1rem]">
          <h3>Upload Your Resume</h3>
          <div>
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
                <IoImageOutline size={40} />
                <span className="mt-2">
                  Drop your resume here, or{" "}
                  <span className="hover:underline text-sky ">Click to upload</span>
                </span>
              </label>
            </div>
            <div className="mt-4">
              <h2>Or select your current resume</h2>
              {resumes.map((resume, index) => (

                <div key={index} className="flex w-full ">
                  <input type="radio" name="resume" className="mr-2" />
                  <div className="flex items-center justify-between p-2 border-b border-gray-300 mt-2 w-full "
                  >
                    <div className="flex items-center">
                      <div className="flex items-center gap-3">
                        <span className="text-red text-[2.5rem]">
                          <FaFilePdf />
                        </span>
                        <p className="flex flex-col">
                          <span>{resume.name}</span>
                          <span className="text-[0.6rem] text-slate">
                            Uploaded on {formatDate(resume.date)}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="text-gray-500 flex flex-col items-end gap-1">
                      <span className=" text-slate"> <BsThreeDotsVertical /> </span>
                      <span className=" text-[0.6rem]">{resume.size}</span>
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
