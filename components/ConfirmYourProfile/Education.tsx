import { useResumeData } from '@/context/ResumeDataContext';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

const Education = () => {
  const { resumeData, setResumeData } = useResumeData();
  const [isEditing, setIsEditing] = useState(false);
  const [education, setEducation] = useState(resumeData?.Education || []);

  const handleInputChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: field === 'currentlyEnrolled' ? !updatedEducation[index].currentlyEnrolled : value
    };
    setEducation(updatedEducation);
  };

  const handleDelete = (index) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
  };

  const handleAddEducation = () => {
    setEducation([...education, {
      instituteName: "",
      certificateOrDegree: "",
      degreeName: "",
      graduationYear: "",
      currentlyEnrolled: false
    }]);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (resumeData) {
      const updatedResumeData = {
        ...resumeData,
        Education: education,
      };
      setResumeData(updatedResumeData);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEducation(resumeData?.Education || []);
    setIsEditing(false);
  };

  return (
    <section className="w-full h-auto bg-[#FFFBFB] rounded-xl text-[0.9rem] p-3 md:p-6 text-[#1A212B]">
      <div className="flex justify-between items-center gap-3">
        <p className="font-caveat flex text-red text-[1.5rem] font-bold items-center gap-3">
          <span className="rounded-full border border-red p-[5px] w-10 h-10 flex justify-center items-center">
            <Image src="/Images/education.png" alt="logo" width={150} height={150} />
          </span>
          Education
        </p>
        {!isEditing && (
          <span className="cursor-pointer">
            <Image
              src="/Images/pencil.png"
              alt="logo"
              width={20}
              height={20}
              onClick={() => setIsEditing(true)}
            />
          </span>
        )}
      </div>

      <div className={`mt-3 ${isEditing ? "space-y-4" : "space-y-3"}`}>
        {isEditing ? (
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="border border-[#C9C9C9] rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Education {index + 1}</span>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Image src="/Images/delete.png" width={17} height={17} alt="delete" />
                  </button>
                </div>

                <div className="space-y-3">
                  <input
                    type="text"
                    value={edu.instituteName}
                    onChange={(e) => handleInputChange(index, 'instituteName', e.target.value)}
                    placeholder="Institute Name"
                    className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none"
                  />
                  <input
                    type="text"
                    value={edu.certificateOrDegree}
                    onChange={(e) => handleInputChange(index, 'certificateOrDegree', e.target.value)}
                    placeholder="Certificate/Degree"
                    className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none"
                  />
                  <input
                    type="text"
                    value={edu.degreeName}
                    onChange={(e) => handleInputChange(index, 'degreeName', e.target.value)}
                    placeholder="Degree Name"
                    className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none"
                  />
                  {!edu.currentlyEnrolled && (
                    <input
                      type="text"
                      value={edu.graduationYear}
                      onChange={(e) => handleInputChange(index, 'graduationYear', e.target.value)}
                      placeholder="Graduation Year"
                      className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none"
                    />
                  )}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={edu.currentlyEnrolled}
                      onChange={() => handleInputChange(index, 'currentlyEnrolled', !edu.currentlyEnrolled)}
                      className="w-4 h-4"
                    />
                    <label>Currently enrolled here</label>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center ml-4 gap-3 cursor-pointer" onClick={handleAddEducation}>
              <span className="bg-red w-6 h-6 rounded-full text-white flex justify-center items-center">
                <FaPlus />
              </span>
              <p className="text-blue">Add more education</p>
            </div>

            <div className="flex gap-2 w-full justify-end">
              <button
                onClick={handleCancel}
                className="px-4 py-2 border border-[#8C92AB] rounded-lg hover:bg-gray-100 transition-all ease-in-out duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 border border-[#8C92AB] rounded-lg hover:bg-gray-100 transition-all ease-in-out duration-300"
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div key={index} className="border border-[#C9C9C9] rounded-xl p-3.5 space-y-1">
                <h3 className="font-medium text-base text-black">{edu.instituteName}</h3>
                <p className="text-[#585E68]">{edu.degreeName}</p>
                <p>{edu.certificateOrDegree}</p>
                <p>{edu.currentlyEnrolled ? "I'm currently enrolled here" : edu.graduationYear}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {!isEditing && (
        <div
          className="flex items-center ml-4 mt-4 gap-3 cursor-pointer"
          onClick={handleAddEducation}
        >
          <span className="bg-red w-6 h-6 rounded-full text-white flex justify-center items-center">
            <FaPlus />
          </span>
          <p className="text-blue">Add more education</p>
        </div>
      )}
    </section>
  );
};

export default Education;