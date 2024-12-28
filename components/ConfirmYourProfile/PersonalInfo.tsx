import { useResumeData } from '@/context/ResumeDataContext';
import Image from 'next/image';
import React, { useState } from 'react';

const PersonalInfo = () => {
  const { resumeData, setResumeData } = useResumeData();
  const [isEditing, setIsEditing] = useState(false);
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
    city: "Ho Chi Minh",
    province: "Binh Thanh",
    postalCode: "",
    eligibleToWork: "Yes"
  });

  const handleInputChange = (field, value, nestedField = null) => {
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
      city: "Ho Chi Minh",
      province: "Binh Thanh",
      postalCode: "",
      eligibleToWork: "Yes"
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

      <div className="mt-4 flex flex-col gap-2">
        <h3>Profile Photo</h3>

        <div className="flex items-center gap-6">
          <img src="/Images/person.png" alt="" className="size-20 rounded-full" />
          <div className="space-y-0.5">
            {isEditing ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={personalInfo.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="First Name"
                  className="border border-[#C9C9C9] p-2 rounded-lg w-full outline-none"
                />
                <input
                  type="text"
                  value={personalInfo.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Last Name"
                  className="border border-[#C9C9C9] p-2 rounded-lg w-full outline-none"
                />
              </div>
            ) : (
              <h3 className="font-medium text-base text-black">
                {personalInfo.firstName} {personalInfo.lastName}
              </h3>
            )}
            {isEditing ? (
              <div className="space-y-2">
                <input
                  type="email"
                  value={personalInfo.contactInfo.Email}
                  onChange={(e) => handleInputChange('contactInfo', e.target.value, 'Email')}
                  placeholder="Email"
                  className="border border-[#C9C9C9] p-2 rounded-lg w-full outline-none"
                />
                <input
                  type="tel"
                  value={personalInfo.contactInfo.Phone}
                  onChange={(e) => handleInputChange('contactInfo', e.target.value, 'Phone')}
                  placeholder="Phone"
                  className="border border-[#C9C9C9] p-2 rounded-lg w-full outline-none"
                />
              </div>
            ) : (
              <>
                <p>Email: {personalInfo.contactInfo.Email}</p>
                <p>Phone number: {personalInfo.contactInfo.Phone}</p>
              </>
            )}
          </div>
        </div>

        {isEditing ? (
          <div className="space-y-4 mt-4">
            <div>
              <label className="block mb-2">Professional Summary</label>
              <textarea
                value={personalInfo.summary}
                onChange={(e) => handleInputChange('summary', e.target.value)}
                className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none min-h-[100px]"
              />
            </div>

            <div>
              <label className="block mb-2">Address</label>
              <input
                type="text"
                value={personalInfo.contactInfo.Address}
                onChange={(e) => handleInputChange('contactInfo', e.target.value, 'Address')}
                className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">City</label>
                <input
                  type="text"
                  value={personalInfo.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Province</label>
                <input
                  type="text"
                  value={personalInfo.province}
                  onChange={(e) => handleInputChange('province', e.target.value)}
                  className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">LinkedIn</label>
              <input
                type="text"
                value={personalInfo.contactInfo.LinkedIn}
                onChange={(e) => handleInputChange('contactInfo', e.target.value, 'LinkedIn')}
                className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none"
              />
            </div>

            <div className="flex gap-2 w-full justify-end mt-4">
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
          <ul className="list-disc flex flex-col gap-2 mt-1 pl-7">
            <li>{personalInfo.summary}</li>
            <li>Address: {personalInfo.contactInfo.Address}</li>
            <li className="flex gap-10">
              <li>City: {personalInfo.city}</li>
              <li>Province: {personalInfo.province}</li>
            </li>
            <li>LinkedIn: {personalInfo.contactInfo.LinkedIn}</li>
            <li>Are you eligible to work in Canada? {personalInfo.eligibleToWork}</li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default PersonalInfo;