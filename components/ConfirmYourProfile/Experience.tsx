import Image from 'next/image'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'

const Experience = () => {

  const [isEditing, setIsEditing] = useState(false);


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
          <span className="cursor-pointer">
            <Image
              src={"/Images/pencil.png"}
              alt="logo"
              width={20}
              height={20}
              onClick={() => setIsEditing(true)}
            />
          </span>
        )}
      </div>

      <div className={`mt-3 ${isEditing ? "border border-[#C9C9C9] rounded-xl p-2 md:p-4" : ""}`}>
        {isEditing ? (
          <div>
            {experiences.map((experience, index) => (
              <div key={index} className="mb-4 text-[#1D1D1F]">
                <div className="flex justify-between items-center">
                  <span className='text-[#D9292F] font-medium'>Experience {index + 1}</span>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Image src={"/Images/delete.png"} width={17} height={17} alt="delete" />
                  </button>
                </div>

                <div className="mt-1">
                  <h4 className='text-[#1D1D1F]'>Position</h4>
                  <input
                    type="text"
                    placeholder="Position"
                    value={experience.position}
                    onChange={(e) => handleInputChange(index, "position", e.target.value)}
                    className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none mb-2"
                  />

                  <h4 className='text-[#1D1D1F]'>Company Name</h4>
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={experience.companyName}
                    onChange={(e) => handleInputChange(index, "companyName", e.target.value)}
                    className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none mb-2"
                  />

                  <h4 className='text-[#1D1D1F]'>Location</h4>
                  <input
                    type="text"
                    placeholder="Location"
                    value={experience.location}
                    onChange={(e) => handleInputChange(index, "location", e.target.value)}
                    className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none mb-2"
                  />

                  <h4 className='text-[#1D1D1F]'>Start Date</h4>
                  <input
                    type="date"
                    placeholder="Start Date"
                    value={experience.startDate}
                    onChange={(e) => handleInputChange(index, "startDate", e.target.value)}
                    className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none mb-2"
                  />

                  <div className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={!experience.currentlyWork}
                      onChange={(e) => handleInputChange(index, "currentlyWork", !e.target.checked)}
                    />
                    <label>I currently work here</label>
                  </div>

                  {!experience.currentlyWork && (
                    <>
                      <h4 className='text-[#1D1D1F]'>End Date</h4>
                      <input
                        type="date"
                        placeholder="End Date"
                        value={experience.endDate}
                        onChange={(e) => handleInputChange(index, "endDate", e.target.value)}
                        className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none mb-2"
                      />
                    </>
                  )}

                  <h4 className='text-[#1D1D1F]'>Responsibilities</h4>
                  <textarea
                    placeholder="Responsibilities"
                    value={experience.responsibilities}
                    onChange={(e) => handleInputChange(index, "responsibilities", e.target.value)}
                    className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none"
                  />
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
              <div key={index} className="border border-[#C9C9C9] rounded-lg p-3.5 mt-3 space-y-1">
                <h3 className="font-medium text-base text-black">{experience.companyName}</h3>
                <p className="text-[#585E68] font-medium">{experience.position}</p>
                <p className="text-[#585E68] font-medium">
                  {experience.startDate} - {experience.endDate}
                </p>
                <ul className="list-disc">
                  <li className="text-[#585E68] ml-6">{experience.responsibilities}</li>
                </ul>
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
