import { useResumeData } from '@/context/ResumeDataContext';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactInfo {
  Phone: string;
  Email: string;
  LinkedIn: string;
  Address: string;
}

interface PersonalInfo {
  summary: string;
  contactInfo: ContactInfo;
  firstName: string;
  lastName: string;
}

interface PersonalInfoProps {
  isAnyEditing: boolean;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ isAnyEditing, isEditing, setIsEditing }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const { resumeData, setResumeData } = useResumeData();
  const [personalInfo, setPersonalInfo] = useState({
    summary: resumeData?.summary || "",
    contactInfo: resumeData?.["Contact Information"] || {
      Phone: "",
      Email: "",
      LinkedIn: "",
      Address: ""
    },
    firstName: resumeData?.["First Name"] || "",
    lastName: resumeData?.["Last Name"] || "",
  });

  const handleInputChange = (
    field: keyof PersonalInfo,
    value: string,
    nestedField?: keyof ContactInfo
  ) => {
    if (nestedField) {
      setPersonalInfo(prev => ({
        ...prev,
        contactInfo: {
          ...prev.contactInfo,
          [nestedField]: value
        }
      }));
    } else {
      setPersonalInfo(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSave = () => {
    if (resumeData) {
      const updatedResumeData = {
        ...resumeData,
        summary: personalInfo.summary,
        "Contact Information": personalInfo.contactInfo,
        "First Name": personalInfo.firstName,
        "Last Name": personalInfo.lastName
      };
      setResumeData(updatedResumeData);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setPersonalInfo({
      summary: resumeData?.summary || "",
      contactInfo: resumeData?.["Contact Information"] || {
        Phone: "",
        Email: "",
        LinkedIn: "",
        Address: ""
      },
      firstName: resumeData?.["First Name"] || "",
      lastName: resumeData?.["Last Name"] || "",
    });
    setIsEditing(false);
  };

  return (
    <section className="w-full h-auto bg-[#FFFBFB] rounded-xl text-[0.9rem] p-3 md:p-6 text-[#1A212B]">
      <div className="flex justify-between items-center gap-3">
        <p className="font-caveat flex text-red text-2xl font-bold items-center gap-3">
          <span className="rounded-full border border-red p-[9px] w-10 h-10">
            <Image src="/Images/persoanl-info.png" alt="logo" width={100} height={100} />
          </span>
          Personal Information
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

      <div className=" flex flex-col gap-2">
        {isEditing ? (
          <div className="space-y-3 mt-4">
            {/* First Name and Last Name row */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-full md:w-1/2">
                <label className="block mb-1 text-[#1D1D1F]">First Name</label>
                <input
                  type="text"
                  value={personalInfo.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="First Name"
                  className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full outline-none"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block mb-1 text-[#1D1D1F]">Last Name</label>
                <input
                  type="text"
                  value={personalInfo.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Last Name"
                  className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full outline-none"
                />
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <label className="block mb-1 text-[#1D1D1F]">Summary</label>
              <textarea
                value={personalInfo.summary}
                onChange={(e) => handleInputChange('summary', e.target.value)}
                placeholder="Write your professional summary"
                className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full outline-none min-h-[130px]"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block mb-1 text-[#1D1D1F]">Address</label>
              <input
                type="text"
                value={personalInfo.contactInfo.Address}
                onChange={(e) => handleInputChange('contactInfo', e.target.value, 'Address')}
                placeholder="Enter your address"
                className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full outline-none"
              />
            </div>

            {/* Email and Phone row */}
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-1/2">
                <label className="block mb-1 text-[#1D1D1F]">Email</label>
                <input
                  type="email"
                  value={personalInfo.contactInfo.Email}
                  onChange={(e) => handleInputChange('contactInfo', e.target.value, 'Email')}
                  placeholder="Enter your email"
                  className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full outline-none"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block mb-1 text-[#1D1D1F]">Phone</label>
                <input
                  type="tel"
                  value={personalInfo.contactInfo.Phone}
                  onChange={(e) => handleInputChange('contactInfo', e.target.value, 'Phone')}
                  placeholder="Enter your phone number"
                  className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full outline-none"
                />
              </div>
            </div>

            {/* LinkedIn */}
            <div className="w-full md:w-1/2">
              <label className="block mb-1 text-[#1D1D1F]">LinkedIn</label>
              <input
                type="text"
                value={personalInfo.contactInfo.LinkedIn}
                onChange={(e) => handleInputChange('contactInfo', e.target.value, 'LinkedIn')}
                placeholder="Enter your LinkedIn profile"
                className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-2 w-full justify-end mt-6">
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
          <div className="mt-3 w-full">
            <div className="space-y-1">
              {(personalInfo.firstName || personalInfo.lastName) && (
                <h3 className="font-medium text-base text-black">
                  {personalInfo.firstName} {personalInfo.lastName}
                </h3>
              )}
              {personalInfo?.contactInfo?.Email && <p>Email: {personalInfo.contactInfo.Email}</p>}
              {personalInfo?.contactInfo?.Phone && <p>Phone number: {personalInfo.contactInfo.Phone}</p>}
            </div>

            {/* Conditional rendering based on isAnyEditing */}
            {isAnyEditing && !isExpanded ? (
              <div className="mt-2 w-full justify-center items-center">
                <button
                  onClick={handleToggle}
                  className="text-[#0483F8] underline w-full"
                >
                  Click to view all information
                </button>
              </div>
            ) : (
              <ul className="list-disc flex flex-col gap-2 pl-7 mt-2">
                {personalInfo.summary && <li>{personalInfo.summary}</li>}
                {personalInfo?.contactInfo?.Address && <li>Address: {personalInfo.contactInfo.Address}</li>}
                {personalInfo?.contactInfo?.LinkedIn && <li>LinkedIn: {personalInfo.contactInfo.LinkedIn}</li>}
              </ul>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PersonalInfo;