import { useResumeData } from '@/context/ResumeDataContext'
import React from 'react'
import { FaLinkedin, FaLocationDot } from 'react-icons/fa6'
import { LuPhoneCall } from 'react-icons/lu'
import { MdMailOutline } from 'react-icons/md'
import { PiDotOutlineFill } from 'react-icons/pi'

const ViewResume = () => {
    const { resumeData } = useResumeData();
    return (
        <div className="object-contain w-full border-4 md:border-8 rounded-md border-[#D9D9D9] px-3 md:px-6 pt-4 md:pt-6 pb-5 md:pb-10 min-h-[35rem] md:min-h-[45rem] font-poppins ">

            {/* Name  */}
            <div>
                <h3 className='font-Poppins text-[1.2rem] md:text-[2rem] font-extrabold uppercase'>
                    {resumeData?.["First Name"] || ""} {resumeData?.["Last Name"] || ""}
                </h3>
            </div>

            <article className='flex gap-6 mt-1.5 md:mt-3'>
                {/* left side  */}
                <div className=' flex flex-col gap-2 md:gap-4 w-[40%]'>
                    {/* contact info */}
                    {resumeData?.["Contact Information"] && (
                        <div>
                            <h3 className="text-[0.55rem] md:text-[0.8rem] text-[#a28b91] border-[#AC9196] border-b-2 pb-0.5 md:pb-1.5  pr-2 md:pr-3 w-fit font-bold">
                                My Contact
                            </h3>
                            <ul className='mt-1 md:mt-2 text-[0.35rem] md:text-[0.45rem] lg:text-[0.6rem]'>
                                {resumeData["Contact Information"].Email && (
                                    <li className='flex items-center gap-1'>
                                        <span><MdMailOutline /></span>
                                        {resumeData["Contact Information"].Email}
                                    </li>
                                )}

                                {resumeData["Contact Information"].Phone && (
                                    <li className='flex items-center gap-1'>
                                        <span><LuPhoneCall /></span>
                                        {resumeData["Contact Information"].Phone}
                                    </li>
                                )}

                                {resumeData["Contact Information"].Address && (
                                    <li className='flex items-center gap-1'>
                                        <span><FaLocationDot /></span>
                                        {resumeData["Contact Information"].Address}
                                    </li>
                                )}

                                {resumeData["Contact Information"].LinkedIn && (
                                    <li className='flex items-center gap-1'>
                                        <span><FaLinkedin /></span>
                                        {resumeData["Contact Information"].LinkedIn}
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}

                    {resumeData?.Skills && resumeData.Skills.length > 0 && (
                        <div>
                            <h3 className="text-[0.55rem] md:text-[0.8rem] text-[#a28b91] border-[#AC9196] border-b-2 pb-0.5 md:pb-1.5  pr-2 md:pr-3 w-fit font-bold">
                                Skills
                            </h3>
                            <ul className='list-disc mt-1 md:mt-2 text-[0.35rem] md:text-[0.45rem] lg:text-[0.6rem] ml-3'>
                                {resumeData?.Skills?.map((skill, index) => (
                                    <li key={index}>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* educational */}
                    {resumeData?.Education && resumeData.Education.length > 0 && (
                        <div>
                            <h3 className="text-[0.55rem] md:text-[0.8rem] text-[#a28b91] border-[#AC9196] border-b-2 pb-0.5 md:pb-1.5  pr-2 md:pr-3 w-fit font-bold">
                                Education Background
                            </h3>
                            <div className="">
                                {resumeData?.Education?.map((edu, index) => (
                                    <div key={index} className="flex gap-1 md:gap-2 mt-1 md:mt-2">
                                        <span>
                                            <PiDotOutlineFill className='text-[0.4rem] md:text-[0.6rem] lg:text-[1rem] mt-[0.8px] lg:mt-0' />
                                        </span>
                                        <div className="flex flex-col text-[0.35rem] md:text-[0.45rem] lg:text-[0.6rem] gap-0.5">
                                            {/* Render instituteName only when it exists */}
                                            {edu?.instituteName && (
                                                <span className="text-[0.37rem] md:text-[0.48rem] lg:text-[0.65rem]">{edu.instituteName}</span>
                                            )}

                                            {/* Render degreeName only when it exists */}
                                            {edu?.degreeName && <span>{edu.degreeName}</span>}

                                            {/* Render graduation or currently enrolled status */}
                                            {edu?.currentlyEnrolled !== undefined && (
                                                <span>
                                                    {edu.currentlyEnrolled
                                                        ? "Currently Enrolled"
                                                        : `Completed in ${edu?.graduationYear}`}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>

                {/* right side  */}
                <div className=' w-[60%]'>

                    {/* Summary */}
                    {resumeData?.summary && (
                        <div>
                            <h3 className="text-[0.55rem] md:text-[0.8rem] text-[#a28b91] border-[#AC9196] border-b-2 pb-0.5 md:pb-1.5  pr-2 md:pr-3 w-fit font-bold ">
                                About Me
                            </h3>
                            <p className='mt-1 md:mt-2 text-[0.35rem] md:text-[0.45rem] lg:text-[0.6rem] w-9/12'>
                                {resumeData.summary}
                            </p>
                        </div>
                    )}

                    {/* Professional Experience  */}
                    {resumeData?.["Work Experience"] && resumeData?.["Work Experience"].length > 0 && (
                        <div className='mt-1.5 md:mt-3'>
                            <h3 className="text-[0.55rem] md:text-[0.8rem] text-[#a28b91] border-[#AC9196] border-b-2 pb-0.5 md:pb-1.5  pr-2 md:pr-3 w-fit font-bold ">
                                Professional Experience
                            </h3>

                            <div className='text-[0.35rem] md:text-[0.45rem] lg:text-[0.6rem]'>
                                {resumeData?.["Work Experience"]?.map((exp, index) => (
                                    <div key={index}>
                                        {/* Render companyName and position if both exist */}
                                        {(exp?.companyName || exp?.position) && (
                                            <p className="mt-1 md:mt-2 text-[0.37rem] md:text-[0.48rem] lg:text-[0.65rem]">
                                                {exp?.companyName && exp.companyName}
                                                {exp?.companyName && exp?.position && " | "}
                                                {exp?.position && exp.position}
                                            </p>
                                        )}

                                        {/* Render startDate and endDate/currentlyWork conditionally */}
                                        {(exp?.startDate || exp?.currentlyWork !== undefined || exp?.endDate) && (
                                            <p className="text-[0.37rem] md:text-[0.48rem] lg:text-[0.65rem]">
                                                {exp?.startDate && exp.startDate}
                                                {exp?.startDate &&
                                                    (exp?.currentlyWork || exp?.endDate) && " - "}
                                                {exp?.currentlyWork ? "Present" : exp?.endDate && exp.endDate}
                                            </p>
                                        )}

                                        {/* Render Key Responsibilities if responsibilities exist */}
                                        {exp?.responsibilities && (
                                            <>
                                                <h3 className='mt-0.5'>Key responsibilities:</h3>
                                                <ul className="list-disc ml-6">
                                                    <li>{exp.responsibilities}</li>
                                                </ul>
                                            </>
                                        )}
                                    </div>

                                ))}
                            </div>
                        </div>
                    )}

                    {/* About Me  */}
                    {resumeData?.Certifications && resumeData.Certifications.length > 0 && (
                        <div className='mt-1.5 md:mt-3'>
                            <h3 className="text-[0.55rem] md:text-[0.8rem] text-[#a28b91] border-[#AC9196] border-b-2 pb-0.5 md:pb-1.5  pr-2 md:pr-3 w-fit font-bold">
                                Certifications
                            </h3>
                            <div className='mt-1 md:mt-2'>
                                {resumeData.Certifications?.map((cert, index) => (
                                    <div key={index} className="flex gap-1 md:gap-2 mt-1">
                                        {/* Icon is static, so it always renders */}
                                        <span>
                                            <PiDotOutlineFill className='text-[0.4rem] md:text-[0.6rem] lg:text-[1rem] mt-[0.8px] lg:mt-0' />
                                        </span>

                                        <div className="flex flex-col text-[0.35rem] md:text-[0.45rem] lg:text-[0.6rem]">
                                            {/* Render documentName if it exists */}
                                            {cert?.documentName && (
                                                <span className="text-[0.37rem] md:text-[0.48rem] lg:text-[0.65rem]">{cert.documentName}</span>
                                            )}

                                            {/* Render issuer if it exists */}
                                            {cert?.issuer && <span>{cert.issuer}</span>}

                                            {/* Render issueDate if it exists */}
                                            {cert?.issueDate && <span>Issued: {cert.issueDate}</span>}

                                            {/* Render expiryDate if it exists */}
                                            {cert?.expiryDate && (
                                                <>
                                                    <span>Expires: {cert.expiryDate}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                    )}



                </div>
            </article>


        </div>


    )
}

export default ViewResume
