import { useResumeData } from '@/context/ResumeDataContext';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { motion } from "framer-motion";


interface Certification {
    documentType: string;
    documentName: string;
    issuer: string;
    issueDate: string;
    expiryDate: string;
    certificateImage: string;
}

interface CertificationProps {
    isEditing: boolean;
    setIsEditing: (value: boolean) => void;
}

const LicenseCertification: React.FC<CertificationProps> = ({ isEditing, setIsEditing }) => {
    const { resumeData, setResumeData } = useResumeData();
    console.log("The certifications are:::", resumeData?.Certifications);

    const [certifications, setCertifications] = useState(resumeData?.Certifications || []);

    const handleInputChange = (index: number, field: keyof Certification, value: string) => {
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
        <section className="w-full h-auto bg-[#FFFBFB] rounded-xl text-[0.9rem] p-3 md:p-6 text-[#1A212B]">
            <div className="flex justify-between items-center gap-3">
                <h3 className="font-caveat flex text-red text-[1.5rem] font-bold items-center gap-3">
                    <span className="rounded-full border border-red p-[10px] w-10 h-10 flex justify-center items-center">
                        <Image src={"/Images/license.png"} alt="logo" width={150} height={150} />
                    </span>
                    License & Certification
                </h3>
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

            <div className={`mt-3 ${isEditing ? "border border-[#C9C9C9] rounded-xl p-2 md:p-4" : ""}`}>
                {isEditing ? (
                    <div>
                        {certifications.map((cert, index) => (
                            <div key={index} className={`mb-3 ${index !== certifications.length - 1 ? 'border-b-[3px] border-[#E7E7E7] pb-2.5' : ''
                                }`}>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-[#D9292F] font-medium">Certification {index + 1}</span>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <Image src={"/Images/delete.png"} width={17} height={17} alt="delete" />
                                    </button>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-full">
                                        <label className="block mb-1 text-[#1D1D1F]">Certificate Type</label>
                                        <input
                                            type="text"
                                            value={cert.documentType}
                                            placeholder="Certificate Type"
                                            onChange={(e) => handleInputChange(index, "documentType", e.target.value)}
                                            className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full outline-none"
                                        />
                                    </div>

                                    <div className="w-full">
                                        <label className="block mb-1 text-[#1D1D1F]">Certificate Name</label>
                                        <input
                                            type="text"
                                            value={cert.documentName}
                                            placeholder="Certificate Name"
                                            onChange={(e) => handleInputChange(index, "documentName", e.target.value)}
                                            className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full outline-none"
                                        />
                                    </div>

                                    <div className="w-full">
                                        <label className="block mb-1 text-[#1D1D1F]">Issuer</label>
                                        <input
                                            type="text"
                                            value={cert.issuer}
                                            placeholder="Issuer"
                                            onChange={(e) => handleInputChange(index, "issuer", e.target.value)}
                                            className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-3">
                                        <div className="w-full md:w-1/2">
                                            <label className="block mb-1 text-[#1D1D1F]">Issue Date</label>
                                            <input
                                                type="date"
                                                value={cert.issueDate ? formatToHTMLDate(cert.issueDate) : ''}
                                                placeholder="Issue Date"
                                                onChange={(e) => {
                                                    const formattedDate = formatToMonthYear(e.target.value);
                                                    handleInputChange(index, "issueDate", formattedDate);
                                                }}
                                                className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full outline-none"
                                            />
                                        </div>

                                        <div className="w-full md:w-1/2">
                                            <label className="block mb-1 text-[#1D1D1F]">Expiry Date</label>
                                            <input
                                                type="date"
                                                value={cert.expiryDate ? formatToHTMLDate(cert.expiryDate) : ''}
                                                placeholder="Expiry Date"
                                                onChange={(e) => {
                                                    const formattedDate = formatToMonthYear(e.target.value);
                                                    handleInputChange(index, "expiryDate", formattedDate);
                                                }}
                                                // onChange={(e) => handleInputChange(index, "expiryDate", e.target.value)}
                                                className="border border-[#C9C9C9] p-2.5 rounded-[10px] w-full outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="flex items-center ml-4 mt-4 gap-3 cursor-pointer" onClick={handleAddCertification}>
                            <span className="bg-red w-6 h-6 rounded-full text-white flex justify-center items-center">
                                <FaPlus />
                            </span>
                            <p className="text-blue">Add more certification</p>
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
                        {certifications.map((cert, index) => (
                            <div key={index} className="border border-[#C9C9C9] rounded-[10px] p-3.5 mt-3 space-y-1">
                                {cert.documentName && (
                                    <p className="font-medium text-base text-black">{cert.documentName}</p>
                                )}
                                {cert.issuer && (
                                    <p className="text-[#585E68] font-medium">{cert.issuer}</p>
                                )}
                                {(cert.issueDate || cert.expiryDate) && (
                                    <p className="text-[#585E68] font-medium">
                                        {cert.issueDate}{cert.issueDate && cert.expiryDate && " - "}{cert.expiryDate}
                                    </p>
                                )}
                                {/* {cert.certificateImage && (
                                    <div className="mt-1">
                                        <Image src={cert.certificateImage} alt="certificate" width={100} height={100} />
                                    </div>
                                )} */}
                            </div>
                        ))}
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
                    <p className="text-blue">Add more certification</p>
                </div>
            )}
        </section>
    );
};

export default LicenseCertification;
