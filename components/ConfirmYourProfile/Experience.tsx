import { useResumeData } from '@/context/ResumeDataContext';
import Image from 'next/image'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { motion } from "framer-motion";

interface WorkExperience {
  position: string;
  companyName: string;
  location: string;
  startDate: string;
  endDate: string;
  currentlyWork: boolean;
  responsibilities: string;
}

interface ExperienceProps {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}


const Experience: React.FC<ExperienceProps> = ({ isEditing, setIsEditing }) => {

  const { resumeData, setResumeData } = useResumeData();
  console.log("The work experience are:::", resumeData?.["Work Experience"]);
  const [experiences, setExperiences] = useState(resumeData?.["Work Experience"] || []);
  const handleInputChange = (index: number, field: keyof WorkExperience, value: string | boolean) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = { ...updatedExperiences[index], [field]: value };
    setExperiences(updatedExperiences);
  };

  const handleDelete = (index: number) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  const handleAddExperience = () => {
    setExperiences([...experiences, {
      position: "",
      companyName: "",
      location: "",
      startDate: "",
      endDate: "",
      currentlyWork: false,
      responsibilities: ""
    }]);
  };

  const handleSave = () => {
    if (resumeData) {
      const updatedResumeData = {
        ...resumeData,
        "Work Experience": experiences,
      };
      setResumeData(updatedResumeData);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setExperiences(resumeData?.["Work Experience"] || []);
    setIsEditing(false);
  };

  const formatToMonthYear = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const formatToHTMLDate = (monthYearString: string) => {
    if (!monthYearString) return '';
    const date = new Date(monthYearString);
    return date.toISOString().split('T')[0];
  };

  return (
    <section className="w-full h-auto bg-[#FFFBFB] rounded-xl text-[0.9rem] p-3 md:p-6 text-[#585E68]">
      <div className="flex justify-between items-center gap-3">
        <p className="font-caveat flex text-red text-[1.5rem] font-bold items-center gap-3">
          <span className="rounded-full border border-red p-[8px] w-10 h-10 flex justify-center items-center">
            <Image src={"/Images/work-exp.png"} alt="logo" width={150} height={150} />
          </span>
          Work Experience
        </p>
        {!isEditing && (
          <motion.span
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Image
              src="/Images/pencil.png"
              alt="logo"
              width={20}
              height={20}
              onClick={() => setIsEditing(true)}
            />
          </motion.span>
        )}
      </div>

      <div className={`mt-3 ${isEditing ? "border border-[#C9C9C9] rounded-[10px] p-2 md:p-4" : ""}`}>
        {isEditing ? (
          <div>
            {experiences.map((experience, index) => (
              <div key={index} className={`mb-3 ${index !== experiences.length - 1 ? 'border-b-[3px] border-[#E7E7E7] pb-2.5' : ''
                }`}>
                <div className="flex justify-between items-center">
                  <span className='text-[#D9292F] font-medium'>Experience {index + 1}</span>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Image src={"/Images/delete.png"} width={17} height={17} alt="delete" />
                  </button>
                </div>

                <div className="mt-3 space-y-1">
                  <div className='w-full'>
                    <h4 className='text-[#1D1D1F] block mb-1'>Position</h4>
                    <input
                      type="text"
                      placeholder="Position"
                      value={experience.position}
                      onChange={(e) => handleInputChange(index, "position", e.target.value)}
                      className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full outline-none mb-2"
                    />
                  </div>
                  <div className='w-full'>
                    <h4 className='text-[#1D1D1F] block mb-1'>Company Name</h4>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={experience.companyName}
                      onChange={(e) => handleInputChange(index, "companyName", e.target.value)}
                      className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full outline-none mb-2"
                    />
                  </div>
                  <div className='w-full'>
                    <h4 className='text-[#1D1D1F] block mb-1'>Location</h4>
                    <input
                      type="text"
                      placeholder="Location"
                      value={experience.location}
                      onChange={(e) => handleInputChange(index, "location", e.target.value)}
                      className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full outline-none mb-2"
                    />
                  </div>
                  <div className='flex flex-col md:flex-row gap-1 md:gap-5'>
                    <div className='w-full md:w-1/2'>
                      <h4 className='text-[#1D1D1F] block mb-1'>Start Date</h4>
                      <input
                        type="date"
                        placeholder="Start Date"
                        value={experience.startDate ? formatToHTMLDate(experience.startDate) : ''}
                        onChange={(e) => {
                          const formattedDate = formatToMonthYear(e.target.value);
                          handleInputChange(index, "startDate", formattedDate);
                        }}
                        className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full outline-none mb-2"
                      />
                    </div>
                    <div className='w-full md:w-1/2'>
                      {!experience.currentlyWork && (
                        <>
                          <h4 className='text-[#1D1D1F] block mb-1'>End Date (If Applicable)</h4>
                          <input
                            type="date"
                            placeholder="End Date"
                            value={experience.endDate ? formatToHTMLDate(experience.endDate) : ''}
                            onChange={(e) => {
                              const formattedDate = formatToMonthYear(e.target.value);
                              handleInputChange(index, "endDate", formattedDate);
                            }}
                            className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full outline-none mb-2"
                          />
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full">
                    <input
                      type="checkbox"
                      checked={experience.currentlyWork}
                      onChange={(e) => handleInputChange(index, "currentlyWork", e.target.checked)}
                      className="w-4 h-4 accent-[#D9292F]"
                    />
                    <label className='font-medium text-[#1D1D1F]'>I currently work here</label>
                  </div>


                  <div className='w-full mt-3'>
                    <h4 className='text-[#1D1D1F] block mb-1'>Responsibilities</h4>
                    <textarea
                      placeholder="Responsibilities"
                      value={experience.responsibilities}
                      onChange={(e) => handleInputChange(index, "responsibilities", e.target.value)}
                      className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full min-h-[130px] outline-none"
                    />
                  </div>


                </div>
              </div>
            ))}

            <div className="flex items-center ml-4 mt-4 gap-3 cursor-pointer" onClick={handleAddExperience}>
              <span className="bg-red w-6 h-6 rounded-full text-white flex justify-center items-center">
                <FaPlus />
              </span>
              <p className="text-blue">Add more experience</p>
            </div>

            <div className="mt-3 flex gap-2 w-full justify-end">
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
          <div>
            {experiences.map((experience, index) => (
              <div key={index} className="border border-[#C9C9C9] rounded-[10px] p-3.5 mt-3 space-y-1">
                {experience.companyName && (
                  <h3 className="font-medium text-base text-black">{experience.companyName}</h3>
                )}
                {experience.position && (
                  <p className="text-[#585E68] font-medium">{experience.position}</p>
                )}
                {experience.startDate && (
                  <p className="text-[#585E68] font-medium">
                    {experience.startDate}
                    {experience.currentlyWork
                      ? " - Present"
                      : experience.endDate && ` - ${experience.endDate}`
                    }
                  </p>
                )}
                {experience.responsibilities && (
                  <ul className="list-disc">
                    <li className="text-[#585E68] ml-6">{experience.responsibilities}</li>
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {!isEditing && (
        <div
          className="flex items-center ml-4 mt-4 gap-3 cursor-pointer"
          onClick={() => {
            handleAddExperience();
            setIsEditing(true);
          }}
        >
          <span className="bg-red w-6 h-6 rounded-full text-white flex justify-center items-center">
            <FaPlus />
          </span>
          <p className="text-blue">Add more experience</p>
        </div>
      )}
    </section>
  );
};

export default Experience;
