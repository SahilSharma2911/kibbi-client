import { useResumeData } from '@/context/ResumeDataContext';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { LuX } from "react-icons/lu";

interface Education {
  instituteName: string;
  certificateOrDegree: string;
  degreeName: string;
  graduationYear: string;
  currentlyEnrolled: boolean;
}

interface EducationProps {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

const Education: React.FC<EducationProps> = ({ isEditing, setIsEditing }) => {
  const { resumeData, setResumeData } = useResumeData();
  const [education, setEducation] = useState(resumeData?.Education || []);

  const handleInputChange = (index: number, field: keyof Education, value: string | boolean) => {
    const updatedEducation = [...education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: field === 'currentlyEnrolled' ? !updatedEducation[index].currentlyEnrolled : value
    };
    setEducation(updatedEducation);
  };

  const handleDelete = (index: number) => {
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

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [indexToDelete, setIndexToDelete] = useState<number | null>(null);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
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

      <div className={`mt-3 ${isEditing ? "space-y-4" : "space-y-3"}`}>
        {isEditing ? (
          <div className="border border-[#C9C9C9] rounded-[10px] p-4 space-y-3">
            {education.map((edu, index) => (
              <div key={index} className={`mb-3 ${index !== education.length - 1 ? 'border-b-[3px] border-[#E7E7E7] pb-2.5' : ''
                }`}>
                <div className="flex justify-between items-center">
                  <span className="text-[#D9292F] font-medium">Education {index + 1}</span>
                  <button
                    onClick={() => {
                      setIndexToDelete(index);
                      openPopup();
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Image src="/Images/delete.png" width={17} height={17} alt="delete" />
                  </button>
                </div>

                <div className="mt-3 space-y-1">
                  <div className='w-full'>
                    <h4 className='text-[#1D1D1F] block mb-1'>Institute Name</h4>
                    <input
                      type="text"
                      value={edu.instituteName}
                      onChange={(e) => handleInputChange(index, 'instituteName', e.target.value)}
                      placeholder="Institute Name"
                      className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none mb-2"
                    />
                  </div>

                  <div className='w-full'>
                    <h4 className='text-[#1D1D1F] block mb-1'>Certificate/Degree</h4>
                    <input
                      type="text"
                      value={edu.certificateOrDegree}
                      onChange={(e) => handleInputChange(index, 'certificateOrDegree', e.target.value)}
                      placeholder="Certificate/Degree"
                      className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none mb-2"
                    />
                  </div>

                  <div className='w-full'>
                    <h4 className='text-[#1D1D1F] block mb-1'>Degree Name</h4>
                    <input
                      type="text"
                      value={edu.degreeName}
                      onChange={(e) => handleInputChange(index, 'degreeName', e.target.value)}
                      placeholder="Degree Name"
                      className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none mb-2"
                    />
                  </div>

                  {!edu.currentlyEnrolled && (
                    <div className='w-full'>
                      <h4 className='text-[#1D1D1F] block mb-1'>Graduation Year</h4>
                      <input
                        type="text"
                        value={edu.graduationYear}
                        onChange={(e) => handleInputChange(index, 'graduationYear', e.target.value)}
                        placeholder="Graduation Year"
                        className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none mb-2"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={edu.currentlyEnrolled}
                      onChange={() => handleInputChange(index, 'currentlyEnrolled', !edu.currentlyEnrolled)}
                      className="w-4 h-4 accent-[#D9292F]"
                    />
                    <label className='text-[#1D1D1F]'>Currently enrolled here</label>
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
                {edu.instituteName && (
                  <h3 className="font-medium text-base text-black">{edu.instituteName}</h3>
                )}
                {edu.degreeName && (
                  <p className="text-[#585E68]">{edu.degreeName}</p>
                )}
                {edu.certificateOrDegree && (
                  <p className="text-[#585E68]">{edu.certificateOrDegree}</p>
                )}
                {edu.currentlyEnrolled ? (
                  <p className="text-[#585E68]">Present</p>
                ) : (
                  edu.graduationYear && (
                    <p className="text-[#585E68]">{edu.graduationYear}</p>
                  )
                )}
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
              <div className='relative text-lg font-sans text-red font-semibold mb-4 mx-6 mt-6 text-[1.5rem] w-full'>
                <h4 className="w-[85%]">Are you sure you want to remove this education entry?</h4>
                <button
                  onClick={closePopup}
                  className='absolute top-1 right-12 text-black hover:text-gray-600 font-bold text-xl'
                  aria-label="Close"
                >
                  <LuX />
                </button>
              </div>

              <hr />
              <p className='text-[#1A212B] ml-4 mt-2'>This action cannot be undone.</p>
              <div className="flex justify-end gap-4 p-6">
                <button
                  className="text-sm bg-[#D9292F] hover:bg-[#b22225] transition duration-300 rounded-lg py-2.5 px-5 text-white"
                  onClick={() => {
                    if (indexToDelete !== null) {
                      handleDelete(indexToDelete);
                    }
                    closePopup();
                  }}
                >
                  Confirm Removal
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;