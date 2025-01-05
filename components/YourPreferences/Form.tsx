"use client"

import { X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { FaPlus } from 'react-icons/fa6'

interface FormValues {
  file: FileList;
  videoLink: string;
  websiteLink: string;
  references: {
    firstName: string;
    lastName: string;
    jobTitle: string;
    companyName: string;
    contact: string;
  }[];
  willingToRelocate: boolean;
  willingToTravel: string;
  expectedSalary: string;
  languages: {
    isSelected: boolean;
    name: string;
    fluency: string;
  }[];
  lookingForWork: string;
  dateOfBirth: string;
  province: string;
  city: string;
  legallyWorkInCanada: boolean;
  profileFit: {
    foreignCandidate: boolean;
    temporaryWorker: boolean;
    other: boolean;
    otherText: string;
  };
  nationality: string;
}

const Form = () => {

  const { register, handleSubmit, control, setValue, watch, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      references: [{
        firstName: '',
        lastName: '',
        jobTitle: '',
        companyName: '',
        contact: ''
      }],
      languages: [{
        isSelected: false,
        name: 'French',
        fluency: 'Good'
      }],
      profileFit: {
        foreignCandidate: false,
        temporaryWorker: false,
        other: false,
        otherText: ''
      }
    }
  });

  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [hasFile, setHasFile] = useState(false);

  const {
    fields: referenceFields,
    append: appendReference,
    remove: removeReference
  } = useFieldArray({
    control,
    name: "references"
  });

  const {
    fields: languageFields,
    append: appendLanguage,
    // remove: removeLanguage
  } = useFieldArray({
    control,
    name: "languages"
  });


  const onSubmit = (data: FormValues) => {
    const selectedLanguages = data.languages.filter(lang => lang.isSelected);

    const selectedProfileFit = [];
    if (data.profileFit.foreignCandidate) {
      selectedProfileFit.push('Foreign candidates from outside Canada');
    }
    if (data.profileFit.temporaryWorker) {
      selectedProfileFit.push('Temporary foreign workers');
    }
    if (data.profileFit.other && data.profileFit.otherText) {
      selectedProfileFit.push(data.profileFit.otherText);
    }
    const body = {
      file: data.file?.[0],
      videoLink: data.videoLink,
      websiteLink: data.websiteLink,
      references: data.references,
      willingToRelocate: data.willingToRelocate,
      willingToTravel: data.willingToTravel,
      expectedSalary: data.expectedSalary,
      languages: selectedLanguages,
      lookingForWork: data.lookingForWork,
      dateOfBirth: data.dateOfBirth,
      province: data.province,
      city: data.city,
      legallyWorkInCanada: data.legallyWorkInCanada,
      profileFit: selectedProfileFit,
      nationality: data.nationality,
    }

    console.log("All form Data is here", body);
  };


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setVideoPreview(URL.createObjectURL(file));
      setHasFile(true);
      setValue('file', event.target.files as FileList);  // Update form value
    }
  };

  const handleRemoveVideo = () => {
    setVideoPreview(null);
    setHasFile(false);
    setValue('file', undefined as unknown as FileList);
  };

  // In your file input registration, modify the validation:
  const fileRegistration = register("file", {
    required: !hasFile ? "File is required" : false
  });


  return (
    <div className='pt-6 md:pt-10 pb-1 rounded-[10px] outline-none mt-8 md:mt-10 px-1.5 md:px-4 lg:px-6 mb-12 bg-[#FFFBFB] relative'>
      <div className=' flex items-center gap-6'>
        <div>
          <Image src={"/Images/smallBird.png"} alt='bird' width={50} height={50} />
        </div>
        <h3 className=' text-[#585E68] font-medium font-sans text-xl'>
          Tell us about your preferences!
        </h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className=' font-sans font-medium text-[#1E202C]'>

        {/* Resume upload  */}
        <div className="font-sans text-[1rem] mt-3">
          <h2 className="font-medium">Upload Your Video Resume</h2>
          <div className="px-2 md:px-8 py-4 md:py-8">
            <div className="border-dashed border-2 border-gray-300 p-6 text-center relative">
              <input
                type="file"
                className="hidden"
                accept=".mp4, .webm, .mov, .ogv, .mkv"
                id="file"
                {...fileRegistration}
                onChange={(e) => {
                  fileRegistration.onChange(e);
                  handleFileChange(e);
                }}
              />

              {videoPreview ? (
                <div className="mt-6 relative">
                  <button
                    onClick={handleRemoveVideo}
                    className="absolute -top-3.5 -right-3 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
                    type="button"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                  <h3 className="font-medium mb-2 -mt-7">Video Preview:</h3>
                  <video
                    src={videoPreview}
                    controls
                    className="w-full max-w-md mx-auto"
                  ></video>
                </div>
              ) : (
                <label
                  htmlFor="file"
                  className="cursor-pointer text-slate flex flex-col items-center"
                >
                  <div className="flex flex-col gap-3.5 items-center">
                    <Image
                      src="/Images/pdf-upload.png"
                      width={30}
                      height={30}
                      alt="pdf"
                    />
                    <span>
                      Drop your resume here, or
                      <span className="hover:underline text-sky font-medium"> browse</span>
                    </span>
                    <span className="mt-0.5 text-[#737992] text-sm">
                      Accepted files: mp4, webm, mov, ogv, mkv
                    </span>
                  </div>
                </label>
              )}
            </div>
            {errors.file && errors.videoLink && <p className="text-red text-sm ">{errors.file.message}</p>}
          </div>
        </div>

        {/* youtube link */}
        <div className="mt-2 w-full">
          <div className="flex  flex-col lg:flex-row lg:items-center lg:gap-3 w-full">
            <label className="block whitespace-nowrap mb-1 md:mb-2">
              or Youtube link
            </label>
            <div className="w-full">
              <input
                type="text"
                id="videoLink"
                placeholder="http://youtube.com"
                {...register("videoLink", {
                  required: "Youtube link is required", // Required validation

                })}
                className="border border-[#66666659] rounded-[10px] outline-none w-full py-2 px-5"
              />
            </div>
          </div>
          {errors.videoLink && errors.file && (
            <p className="text-red mt-1 text-sm">{errors.videoLink.message}</p>
          )}
        </div>

        {/* Website link */}
        <div className="mt-4 flex flex-col lg:flex-row lg:items-center lg:gap-3 w-full">
          <label className="block mb-1 md:mb-2">
            Website
          </label>
          <div className="w-full">
            <input
              type="text"
              id="websiteLink"
              placeholder="http://youtube.com"
              {...register("websiteLink", {
                required: "Website link is required", // Add validation rule here
              })}
              className="border border-[#66666659] rounded-[10px] outline-none w-full py-2 px-5"
            />
            {errors.websiteLink && (
              <p className="text-red mt-1 text-sm">{errors.websiteLink.message}</p>
            )}
          </div>
        </div>


        {/* References  */}
        <div className='border border-[#E7E9EF] bg-white my-5 rounded-lg px-3 pt-3 pb-5'>
          <h3>References</h3>

          {referenceFields.map((field, index) => (
            <div key={field.id} className={`mt-3 space-y-3 ${index !== referenceFields.length - 1 ? 'border-b-2 border-[#E7E7E7] pb-4' : ''}`}>
              <div className='flex items-start justify-between -mb-2'>
                {index > 0 && <h4 className="font-medium mb-3">Reference {index + 1}</h4>}
                {index > 0 && (
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => removeReference(index)}
                    >
                      <Image src={"/Images/delete.png"} width={17} height={17} alt="delete" />
                    </button>
                  </div>
                )}
              </div>


              <div className='flex md:flex-row flex-col gap-4 w-full'>
                {/* first Name */}
                <label htmlFor={`references.${index}.firstName`} className='w-full font-normal'>
                  First Name
                  <input
                    type="text"
                    className='mt-0.5 border border-[#66666659] rounded-[10px] outline-none w-full p-3.5'
                    {...register(`references.${index}.firstName` as const, { required: "Required" })}
                  />
                  {errors.references?.[index]?.firstName &&
                    <p className="text-red text-sm ">{errors.references[index]?.firstName?.message}</p>
                  }
                </label>

                {/* last Name */}
                <label htmlFor={`references.${index}.lastName`} className='w-full font-normal'>
                  Last Name
                  <input
                    type="text"
                    className='mt-0.5 border border-[#66666659] rounded-[10px] outline-none w-full p-3.5'
                    {...register(`references.${index}.lastName` as const, { required: "Required" })}
                  />
                  {errors.references?.[index]?.lastName &&
                    <p className="text-red text-sm ">{errors.references[index]?.lastName?.message}</p>
                  }
                </label>
              </div>

              <div className='flex md:flex-row flex-col gap-4 w-full'>
                {/* Job Title */}
                <label htmlFor={`references.${index}.jobTitle`} className='w-full font-normal'>
                  Job Title
                  <input
                    type="text"
                    className='mt-0.5 border border-[#66666659] rounded-[10px] outline-none w-full p-3.5'
                    {...register(`references.${index}.jobTitle` as const, { required: "Required" })}
                  />
                  {errors.references?.[index]?.jobTitle &&
                    <p className="text-red text-sm ">{errors.references[index]?.jobTitle?.message}</p>
                  }
                </label>

                {/* Company Name */}
                <label htmlFor={`references.${index}.companyName`} className='w-full font-normal'>
                  Company Name
                  <input
                    type="text"
                    className='mt-0.5 border border-[#66666659] rounded-[10px] outline-none w-full p-3.5'
                    {...register(`references.${index}.companyName` as const, { required: "Required" })}
                  />
                  {errors.references?.[index]?.companyName &&
                    <p className="text-red text-sm ">{errors.references[index]?.companyName?.message}</p>
                  }
                </label>
              </div>

              <div className='flex gap-4 w-full'>
                {/* Contact */}
                <label htmlFor={`references.${index}.contact`} className='w-full font-normal'>
                  Contact (Phone Number / Email)
                  <input
                    type="text"
                    className='mt-0.5 border border-[#66666659] rounded-[10px] outline-none w-full p-3.5'
                    {...register(`references.${index}.contact` as const, { required: "Required" })}
                  />
                  {errors.references?.[index]?.contact &&
                    <p className="text-red text-sm ">{errors.references[index]?.contact?.message}</p>
                  }
                </label>
              </div>


            </div>
          ))}

          <div
            className="flex items-center ml-4 gap-3.5 cursor-pointer mt-6"
            onClick={() => appendReference({
              firstName: '',
              lastName: '',
              jobTitle: '',
              companyName: '',
              contact: ''
            })}
          >
            <span className="bg-red w-6 h-6 rounded-full text-white flex justify-center items-center">
              <FaPlus />
            </span>
            <p className="text-blue">Add more references</p>
          </div>
        </div>

        {/* Willing to Relocate  */}
        <div className='mt-4'>
          <div className=' space-y-3'>
            <span className=' font-bold'>Willing To Relocate?</span>
            <div className=' flex gap-4 md:gap-6 cursor-pointer px-3'>

              <label htmlFor="relocateYes" className=' flex items-center gap-2 font-normal'>
                <input type="radio" value="Yes" id='relocateYes' className='w-5 h-5 accent-[#D9292F]' {...register("willingToRelocate", { required: "required" })} />
                Yes
              </label>

              <label htmlFor="relocateNo" className=' flex items-center gap-2 font-normal'>
                <input type="radio" value="No" id='relocateNo' className='w-5 h-5 accent-[#D9292F]' {...register("willingToRelocate", { required: "required" })} />
                No
              </label>
            </div>
            {errors.willingToRelocate && (
              <p className="text-red text-sm first-letter:uppercase">{errors.willingToRelocate.message}</p>
            )}

          </div>
        </div>

        {/* Willing to Travels  */}
        <div className=' mt-6'>
          <div className=' space-y-3'>
            <span>Willing To Travel?</span>

            <div className=' flex flex-wrap gap-4 md:gap-6 cursor-pointer px-3'>
              <label htmlFor="willingNo" className=' flex items-center gap-2 font-normal'>
                <input type="radio" value="No" id='willingToTravel' className='w-5 h-5 accent-[#D9292F]'  {...register("willingToTravel", { required: "required" })} />
                No
              </label>

              <label htmlFor="willing25" className=' flex items-center gap-2 font-normal'>
                <input type="radio" value="25%" id='willingToTravel' className='w-5 h-5 accent-[#D9292F]'  {...register("willingToTravel", { required: "required" })} />
                25%
              </label>

              <label htmlFor="willing50" className=' flex items-center gap-2 font-normal'>
                <input type="radio" value="50%" id='willingToTravel' className='w-5 h-5 accent-[#D9292F]'  {...register("willingToTravel", { required: "required" })} />
                50%
              </label>

              <label htmlFor="willing75" className=' flex items-center gap-2 font-normal' >
                <input type="radio" value="75%" id='willingToTravel' className='w-5 h-5 accent-[#D9292F]'  {...register("willingToTravel", { required: "required" })} />
                75%
              </label>

              <label htmlFor="willing100" className=' flex items-center gap-2 font-normal'>
                <input type="radio" value="100%" id='willingToTravel' className='w-5 h-5 accent-[#D9292F]' {...register("willingToTravel", { required: "required" })} />
                100%
              </label>

            </div>
            {errors.willingToTravel && (
              <p className="text-red text-sm first-letter:uppercase">{errors.willingToTravel.message}</p>
            )}

          </div>
        </div>

        {/* Expected Salary by  */}
        <div className='mt-6'>
          <div className=' space-y-3'>
            <span >Expected Salary by?</span>

            <div className=' flex gap-4 md:gap-6 cursor-pointer px-3'>
              <label htmlFor="Yearly" className=' flex items-center gap-2 font-normal'>
                <input type="radio" id='expectedSalary' value="Yearly" className='w-5 h-5 accent-[#D9292F]' {...register("expectedSalary", { required: "required" })} />
                Yearly
              </label>

              <label htmlFor="Hourly" className=' flex items-center gap-2 font-normal'>
                <input type="radio" id='expectedSalary' value="Hourly" className='w-5 h-5 accent-[#D9292F]' {...register("expectedSalary", { required: "required" })} />
                Hourly
              </label>
            </div>
            {errors.expectedSalary && (
              <p className="text-red text-sm first-letter:uppercase">{errors.expectedSalary.message}</p>
            )}

          </div>
        </div>

        {/* Language Fluency  */}
        <div className="border border-[#E7E7E7] bg-white my-5 rounded-lg p-4">
          <h3 className="font-bold">Language Fluency</h3>

          <div className="mt-3 space-y-3 font-normal text-[#565656]">
            {languageFields.map((field, index) => (
              <div key={field.id}>
                <div className="flex w-full gap-4 items-center">
                  <input
                    type="checkbox"
                    className="accent-red w-5 h-5"
                    {...register(`languages.${index}.isSelected`)}
                  />

                  <div className="flex  flex-col lg:flex-row w-full gap-2 md:gap-4">
                    <div className="relative w-full">
                      <select
                        className="mt-0.5 border border-[#66666659] rounded-[10px] outline-none w-full p-3.5 appearance-none"
                        {...register(`languages.${index}.name`)}
                      >
                        <option value="French">French</option>
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="German">German</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Japanese">Japanese</option>
                      </select>
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-[#8C92AB]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="relative w-full">
                      <select
                        className="mt-0.5 border border-[#66666659] rounded-[10px] outline-none w-full p-3.5 appearance-none"
                        {...register(`languages.${index}.fluency`)}
                      >
                        <option value="Good">Good</option>
                        <option value="Better">Better</option>
                        <option value="Fluent">Fluent</option>
                      </select>
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-[#8C92AB]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {errors.languages && (
              <p className="text-red text-sm mt-1">{errors.languages.message}</p>
            )}

            <div
              className="flex items-center ml-4 gap-3.5 cursor-pointer"
              onClick={() => appendLanguage({
                isSelected: false,
                name: 'French',
                fluency: 'Good'
              })}
            >
              <div className="flex items-center gap-3.5 mt-2">
                <span className="bg-red w-6 h-6 rounded-full text-white flex justify-center items-center">
                  <FaPlus />
                </span>
                <p className="text-blue">Add more languages</p>
              </div>
            </div>
          </div>
        </div>

        {/* I am looking for work  */}
        <div className=' mt-6'>
          <div className=' space-y-3'>
            <span className=' font-bold'>I am looking for work?</span>
            <div className=' flex  md:flex-row flex-col gap-4 md:gap-6 cursor-pointer px-3'>

              <label htmlFor="" className=' flex items-center gap-2 font-normal'>
                <input type="radio" value="No" className='w-5 h-5 accent-[#D9292F]' id='lookingForWork' {...register("lookingForWork", { required: "required" })} />
                No
              </label>

              <label htmlFor="" className=' flex items-center gap-2 font-normal'>
                <input type="radio" value="Full-time/Part-time Job" className='w-5 h-5 accent-[#D9292F]' id='lookingForWork' {...register("lookingForWork", { required: "required" })} />
                Full-time/Part-time Job
              </label>

              <label htmlFor="" className=' flex items-center gap-2 font-normal'>
                <input type="radio" value="Extra Work (Shifts, Gigs, etc)" className='w-5 h-5 accent-[#D9292F]' id='lookingForWork' {...register("lookingForWork", { required: "required" })} />
                Extra Work (Shifts, Gigs, etc)

              </label>

              <label htmlFor="" className=' flex items-center gap-2 font-normal'>
                <input type="radio" value="ALL employment opportunities" className='w-5 h-5 accent-[#D9292F]' id='lookingForWork' {...register("lookingForWork", { required: "required" })} />
                ALL employment opportunities

              </label>
            </div>
            {errors.lookingForWork && (
              <p className="text-red text-sm first-letter:uppercase">{errors.lookingForWork.message}</p>
            )}

          </div>
        </div>

        {/* Date of Birth  */}
        <div className=' w-full mt-5'>
          <label htmlFor="dateOfBirth font-normal text-[#565656]">
            <h3 className='font-bold mb-1'>
              Date of Birth
            </h3>
            <input type="date" id='dateOfBirth' placeholder='DD/MM/YYYY' className=' border border-[#66666659] rounded-[10px] outline-none w-full p-3.5' {...register("dateOfBirth", { required: "required" })} />
          </label>
          {errors.dateOfBirth && <p className=' text-red text-sm first-letter:uppercase'>{errors.dateOfBirth.message}</p>}
        </div>

        {/* Which city are you Looking for jobs in ? */}
        <div className='w-full mt-4'>
          <h3 className='font-bold'>Which city are you Looking for jobs in ?</h3>
          <div className='flex-col lg:flex-row flex gap-2 md:gap-4 mt-4'>
            <label htmlFor="" className='w-full '>
              <span className='font-normal'>
                Province
              </span>
              <div className="relative w-full mt-0.5 font-normal text-[#565656]">
                <select id="province" className=' border border-[#66666659] rounded-[10px] outline-none w-full p-3.5 appearance-none' {...register("province", { required: "required" })} >
                  <option value="jaipur">pr1</option>
                  <option value="jaipur">pr2</option>
                  <option value="jaipur">pr3</option>
                </select>
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#8C92AB]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>

              {errors.province && (
                <p className="text-red text-sm first-letter:uppercase">{errors.province.message}</p>
              )}
            </label>

            <label htmlFor="" className=' w-full'>

              <span className='font-normal'>
                City
              </span>
              <div className="relative w-full mt-0.5 font-normal text-[#565656]">
                <select className=' border border-[#66666659] rounded-[10px] outline-none w-full p-3.5 appearance-none' {...register("city", { required: "required" })}>
                  <option value="jaipur">city1</option>
                  <option value="jaipur">city2</option>
                  <option value="jaipur">city3</option>
                </select>
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#8C92AB]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>

              {errors.city && (
                <p className="text-red text-sm ">{errors.city.message}</p>
              )}
            </label>
          </div>
        </div>

        {/* work in canada  */}
        <div className=' border border-[#E7E9EF] bg-white my-4 rounded-lg p-4 mt-6'>

          {/* Can you legally work in Canada?  */}
          <div className=''>
            <div className=''>
              <h3 className=' font-bold'>Can you legally work in Canada?</h3>
              <div className='mt-3.5 flex gap-4 md:gap-6 px-3'>
                <label htmlFor="" className=' flex items-center gap-2 font-normal'>
                  <input type="radio" value="Yes" className='w-5 h-5 accent-[#D9292F]'  {...register("legallyWorkInCanada", { required: "required" })} />
                  Yes
                </label>

                <label htmlFor="" className=' flex items-center gap-2 font-normal'>
                  <input type="radio" value="No" className='w-5 h-5 accent-[#D9292F]'  {...register("legallyWorkInCanada", { required: "required" })} />
                  No
                </label>
              </div>
              {errors.legallyWorkInCanada && <p className=' text-red text-sm first-letter:uppercase'>{errors.legallyWorkInCanada.message}</p>}

            </div>


            {/* Which profile fits you ?  */}
            <div className='mt-6 space-y-3'>
              <h3 className="mb-4">Which profile fits you?</h3>

              {/* Responsive container for checkboxes */}
              <div className='flex flex-col lg:flex-row gap-4 md:gap-5 px-3 flex-wrap'>
                {/* First checkbox */}
                <label className='flex items-center gap-2 font-normal'>
                  <input
                    type="checkbox"
                    className='min-w-[1.25rem] min-h-[1.25rem] w-5 h-5 accent-[#D9292F]'
                    {...register("profileFit.foreignCandidate")}
                  />
                  <span className="">Foreign candidates from outside Canada</span>
                </label>

                {/* Second checkbox */}
                <label className='flex items-center gap-2 font-normal'>
                  <input
                    type="checkbox"
                    className='min-w-[1.25rem] min-h-[1.25rem] w-5 h-5 accent-[#D9292F]'
                    {...register("profileFit.temporaryWorker")}
                  />
                  <span className="">Temporary foreign workers</span>
                </label>
                {/* Other option with text input */}
                <div className='flex flex-col lg:flex-row gap-2 md:gap-4'>
                  <label className='flex items-center gap-2 font-normal'>
                    <input
                      type="checkbox"
                      className='w-5 h-5 accent-[#D9292F]'
                      {...register("profileFit.other")}
                    />
                    <span className="text-sm sm:text-base">Other</span>
                  </label>

                  {/* Always visible text input with conditional blur */}
                  <input
                    type="text"
                    placeholder="Text..."
                    className={`border font-normal border-[#66666659] rounded-[15px] outline-none p-2 w-full lg:w-[calc(100%-2rem)] transition-all duration-300 ${!watch("profileFit.other")
                      ? 'opacity-50  pointer-events-none'
                      : 'opacity-100 blur-0'
                      }`}
                    {...register("profileFit.otherText", {
                      required: watch("profileFit.other") ? "Please specify other option" : false
                    })}
                  />
                </div>
              </div>

              {/* Error message */}
              {errors.profileFit?.otherText && (
                <p className='text-red text-sm -500 ml-3'>{errors.profileFit.otherText.message}</p>
              )}
            </div>

            {/* which country are you From ?  */}
            <div className=' w-full mt-6'>
              <label htmlFor="nationality">
                <span className='font-bold'>Which country are you from? (nationality)</span>
                <div className="relative w-full mt-1 font-normal text-[#565656]">
                  <select id="nationality" className=' border border-[#66666659] rounded-[10px] outline-none w-full p-3.5 appearance-none' {...register("nationality", { required: "required" })}>
                    <option value="India">India</option>
                    <option value="India">China</option>
                    <option value="India">Japan</option>
                  </select>
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#8C92AB]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>

              </label>
              {errors.nationality && <p className=' text-red text-sm '>{errors.nationality.message}</p>}
            </div>
          </div>
        </div>

        {/* save button  */}
        <div className=' flex justify-end py-6 absolute -bottom-[4.7rem] right-0'>
          <button className="text-sm bg-[#D9292F] hover:bg-[#b22225] transition duration-300 rounded-lg py-2.5 px-5 text-white">Save</button>
        </div>

      </form>


    </div>
  )
}

export default Form