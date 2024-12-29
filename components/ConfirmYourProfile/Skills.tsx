import { useResumeData } from '@/context/ResumeDataContext';
import Image from 'next/image'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { motion } from "framer-motion";

interface SkillsProps {
    isEditing: boolean;
    setIsEditing: (value: boolean) => void;
}

const Skills: React.FC<SkillsProps> = ({ isEditing, setIsEditing }) => {
    const { resumeData, setResumeData } = useResumeData();
    console.log("the skills are:::", resumeData?.Skills);
    const [skills, setSkills] = useState(resumeData?.Skills || []);
    const handleInputChange = (index: number, value: string) => {
        const updatedSkills = [...skills];
        updatedSkills[index] = value;
        setSkills(updatedSkills);
    };

    const handleDelete = (index: number) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setSkills(updatedSkills);
    };

    const handleAddSkill = () => {
        setSkills([...skills, ""]);
    };

    const handleSave = () => {
        if (resumeData) {
            const updatedResumeData = {
                ...resumeData,
                Skills: skills,
            };
            setResumeData(updatedResumeData);
        }
        setIsEditing(false);
    };

    const handleCancel = () => {
        setSkills(resumeData?.Skills || []);
        setIsEditing(false);
    };
    return (
        <section className='w-full h-auto  bg-[#FFFBFB] rounded-xl text-[0.9rem] p-3 md:p-6 text-[#1A212B]'>
            <div className=' flex justify-between items-center gap-3'>
                <p className=' font-caveat flex text-red text-[1.5rem] font-bold items-center gap-3'>
                    <span className=' rounded-full border border-red p-[5px] w-10 h-10 flex justify-center items-center'>
                        <Image src={"/Images/skills.png"} alt="logo" width={150} height={150} />
                    </span>
                    Skills
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
                        {skills.map((skill, index) => (
                            <div key={index} className="mb-4 text-[#1D1D1F]">
                                <div className="flex justify-between items-center">
                                    <span className="">Skill {index + 1}</span>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <Image src={"/Images/delete.png"} width={17} height={17} alt="delete" />
                                    </button>
                                </div>

                                <div className="mt-1">
                                    <input
                                        type="text"
                                        value={skill}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                        className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full outline-none"
                                    />
                                </div>
                            </div>

                        ))}
                        <div className=' flex items-center ml-4 mt-4 gap-3 cursor-pointer'
                            onClick={handleAddSkill}>
                            <span className=' bg-red w-6 h-6 rounded-full text-white flex justify-center items-center '>
                                <FaPlus />
                            </span>
                            <p className=' text-blue'>Add more skills</p>
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
                        <ul className="list-disc flex flex-col gap-2 mt-1 ml-7">
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
            {!isEditing && (
                <div className=' flex items-center ml-4 mt-4 gap-3 cursor-pointer' onClick={() => {
                    handleAddSkill();
                    setIsEditing(true);
                }}
                >
                    <span className=' bg-red w-6 h-6 rounded-full text-white flex justify-center items-center '>
                        <FaPlus />
                    </span>
                    <p className=' text-blue'>Add more skills</p>
                </div>
            )}
        </section>
    )
}

export default Skills
