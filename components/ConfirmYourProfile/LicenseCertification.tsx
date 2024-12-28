import { useResumeData } from '@/context/ResumeDataContext';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

const LicenseCertification = () => {
    const { resumeData, setResumeData } = useResumeData();
    console.log("The certifications are:::", resumeData?.Certifications);

    const [certifications, setCertifications] = useState(resumeData?.Certifications || []);
    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (index: number, field: string, value: any) => {
        const updatedCertifications = [...certifications];
        updatedCertifications[index][field] = value;
        setCertifications(updatedCertifications);
    };

    const handleDelete = (index: number) => {
        const updatedCertifications = certifications.filter((_, i) => i !== index);
        setCertifications(updatedCertifications);
    };

    const handleAddCertification = () => {
        setCertifications([
            ...certifications,
            { documentType: "", documentName: "", issuer: "", issueDate: "", expiryDate: "", certificateImage: "" },
        ]);
    };

    const handleSave = () => {
        if (resumeData) {
            const updatedResumeData = {
                ...resumeData,
                Certifications: certifications,
            };
            setResumeData(updatedResumeData);
        }
        setIsEditing(false);
    };

    const handleCancel = () => {
        setCertifications(resumeData?.Certifications || []);
        setIsEditing(false);
    };

    return (
        <section className="w-full h-auto bg-[#FFFBFB] rounded-xl text-[0.9rem] p-3 md:p-6 text-[#1A212B]">
            <div className="flex justify-between items-center gap-3">
                <h3 className="font-caveat flex text-red text-[1.5rem] font-bold items-center gap-3">
                    <span className="rounded-full border border-red p-[10px] w-10 h-10 flex justify-center items-center">
                        <Image src={"/Images/license.png"} alt="logo" width={150} height={150} />
                    </span>
                    License & Certification
                </h3>
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
                        {certifications.map((cert, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[#1D1D1F]">Certification {index + 1}</span>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <Image src={"/Images/delete.png"} width={17} height={17} alt="delete" />
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        value={cert.documentName}
                                        placeholder="Certificate Name"
                                        onChange={(e) => handleInputChange(index, "documentName", e.target.value)}
                                        className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none"
                                    />
                                    <input
                                        type="text"
                                        value={cert.issuer}
                                        placeholder="Issuer"
                                        onChange={(e) => handleInputChange(index, "issuer", e.target.value)}
                                        className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none"
                                    />
                                    <input
                                        type="text"
                                        value={cert.issueDate}
                                        placeholder="Issue Date"
                                        onChange={(e) => handleInputChange(index, "issueDate", e.target.value)}
                                        className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none"
                                    />
                                    <input
                                        type="text"
                                        value={cert.expiryDate}
                                        placeholder="Expiry Date"
                                        onChange={(e) => handleInputChange(index, "expiryDate", e.target.value)}
                                        className="border border-[#C9C9C9] p-2.5 rounded-lg w-full outline-none"
                                    />
                                </div>
                            </div>
                        ))}
                        <div className="flex items-center ml-4 mt-4 gap-3 cursor-pointer" onClick={handleAddCertification}>
                            <span className="bg-red w-6 h-6 rounded-full text-white flex justify-center items-center">
                                <FaPlus />
                            </span>
                            <p className="text-blue">Add more license or certification</p>
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
                        <ul className="list-disc flex flex-col gap-4 mt-1 ml-7">
                            {certifications.map((cert, index) => (
                                <li key={index} className="space-y-1">
                                    <p className="font-medium text-base text-black">{cert.documentName}</p>
                                    <p className="text-[#585E68] font-medium">{cert.issuer}</p>
                                    <p className="text-[#585E68] font-medium">
                                        {cert.issueDate} - {cert.expiryDate || "Present"}
                                    </p>
                                    {cert.certificateImage && (
                                        <div className="mt-1">
                                            <Image src={cert.certificateImage} alt="certificate" width={100} height={100} />
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {!isEditing && (
                <div
                    className="flex items-center ml-4 mt-4 gap-3 cursor-pointer"
                    onClick={() => {
                        handleAddCertification();
                        setIsEditing(true);
                    }}
                >
                    <span className="bg-red w-6 h-6 rounded-full text-white flex justify-center items-center">
                        <FaPlus />
                    </span>
                    <p className="text-blue">Add more license or certification</p>
                </div>
            )}
        </section>
    );
};

export default LicenseCertification;
