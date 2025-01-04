"use client"

import Image from 'next/image'
import { useState } from 'react'
import { useForm  } from 'react-hook-form'
import { FaPlus } from 'react-icons/fa6'

interface FormValues {
  file: FileList;
  videoLink: string;
  websiteLink: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  companyName: string;
  contact: string;
  willingToRelocate: boolean;
  willingToTravel: string;
  expectedSalary: string;
  languages: { name: string; fluency: string }[];
  lookingForWork: string;
  dateOfBirth: string;
  province: string;
  city: string;
  legallyWorkInCanada: boolean;
  profileFit: boolean;
  nationality: string

}

const Form = () => {


  const { register, handleSubmit,reset, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      languages: [{ name: "", fluency: "" }],
    },
  })



  // const { fields, append } = useFieldArray({
  //   control,
  //   name: "languages",
  // });

  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const onSubmit = (data: FormValues) => {

    const body = {
      file: data.file[0],
      videoLink: data.videoLink,
      websiteLink: data.websiteLink,
      firstName: data.firstName,
      lastName: data.lastName,
      jobTitle: data.jobTitle,
      companyName: data.companyName,
      contact: data.contact,
      willingToRelocate: data.willingToRelocate,
      willingToTravel: data.willingToTravel,
      expectedSalary: data.expectedSalary,
      languages: data.languages,
      lookingForWork: data.lookingForWork,
      dateOfBirth: data.dateOfBirth,
      province: data.province,
      city: data.city,
      legallyWorkInCanada: data.legallyWorkInCanada,
      profileFit: data.profileFit,
      nationality: data.nationality,
    }

    console.log("All form Data is here", body)
    reset()

  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setVideoPreview(URL.createObjectURL(file)); // Generate a preview URL
    }
  };



  return (
    <div className=' mt-[3rem] px-6'>

      <div className=' flex items-center gap-6'>
        <div>
          <Image src={"/Images/smallBird.png"} alt='bird' width={50} height={50} />
        </div>
        <h3 className=' text-[#585E68]'>
          Tell us about your preferences!
        </h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className=' font-sans font-medium'>

        {/* Resume upload  */}
        <div className="font-sans text-[1rem] mt-6 md:mt-10">
          <h2 className="font-medium">Upload Your Video Resume</h2>
          <div className="mt-4 md:mt-7 p-8">
            <div className="border-dashed border-2 border-gray-300 p-6 text-center">
              <input
                type="file"
                className='hidden'
                accept=".mp4, .webm, .mov, .ogv, .mkv"
                id='file'
                {...register("file", {
                  required: "File is required",
                })}
                onChange={handleFileChange}
              />

              <label
                htmlFor="file"
                className="cursor-pointer text-slate flex flex-col items-center"
              >

                {videoPreview ? (
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Video Preview:</h3>
                    <video
                      src={videoPreview}
                      controls
                      className="w-full max-w-md"
                    ></video>
                  </div>
                ) : (
                  <div className=' flex flex-col gap-3 items-center'>
                    <Image
                      src={"/Images/pdf-upload.png"}
                      width={30}
                      height={30}
                      alt="pdf"
                    />
                    <span >
                      Drop your resume here, or
                      <span className="hover:underline text-sky font-medium"> browse</span>
                    </span>
                    <span className="mt-2 text-[#737992] text-sm">
                      Accepted files: mp4, webm, mov, ogv, mkv
                    </span>
                  </div>
                )

                }

              </label>
            </div>
            {errors.file && <p className=' text-red'>{errors.file.message}</p>}



          </div>
        </div>

        {/* Youtube link  */}
        <div className=' flex mt-4 w-full items-center'>
          <label className=' w-36'>
            or Youtube link
          </label>
          <input type="text" id="videoLink" placeholder='http://youtube.com' {...register('videoLink', { required: "link is required" })} className=' border border-borderSlate w-full rounded-lg p-2' />
          {errors.videoLink && <p className=' text-red'>{errors.videoLink.message}</p>}

        </div>

        {/* Website link  */}
        <div className=' flex mt-4 w-full items-center gap-2'>
          <label>
            Website
          </label>
          <input type="text" id="websiteLink" placeholder='http://youtube.com' {...register('websiteLink')} className=' border border-borderSlate w-full rounded-lg p-2' />

        </div>

        {/* References  */}
        <div className=' border border-[#E7E9EF] my-4 rounded-lg p-4'>
          <h3>References</h3>

          <div className=' mt-6 space-y-4'>

            <div className=' flex md:flex-row flex-col gap-4 w-full'>

              {/* first Name  */}
              <label htmlFor="firstName" className=' w-full'>
                First Name
                <input type="text" id="firstName" className=' border border-borderSlate w-full rounded-lg p-3' {...register('firstName', { required: "required" })} />
                {errors.firstName && <p className="text-red">{errors.firstName.message}</p>}
              </label>

              {/* last Name  */}
              <label htmlFor="lastName" className=' w-full'>
                Last Name
                <input type="text" id="lastName" className=' border border-borderSlate w-full rounded-lg p-3' {...register('lastName', { required: "required" })} />
                {errors.lastName && <p className="text-red">{errors.lastName.message}</p>}
              </label>
            </div>

            <div className=' flex  md:flex-row flex-col gap-4 w-full '>

              {/* Job Title  */}
              <label htmlFor="jobTitle" className=' w-full'>
                Job Title
                <input type="text" id="jobTitle" className=' border border-borderSlate w-full rounded-lg p-3' {...register("jobTitle", { required: "required" })} />
                {errors.jobTitle && <p className="text-red">{errors.jobTitle.message}</p>}
              </label>

              {/* Company Name,  */}
              <label htmlFor="companyName" className=' w-full'>
                Company Name
                <input type="text" id="companyName" className=' border border-borderSlate w-full rounded-lg p-3' {...register("companyName", { required: "required" })} />
                {errors.companyName && <p className="text-red">{errors.companyName.message}</p>}
              </label>

            </div>

            <div className=' flex gap-4 w-full '>
              {/* Contact   */}
              <label htmlFor="contact" className=' w-full'>
                Contact (Phone Number / Email)
                <input type="text" id="contact" className=' border border-borderSlate w-full rounded-lg p-3' {...register("contact", { required: "required" })} />
                {errors.contact && <p className="text-red">{errors.contact.message}</p>}
              </label>
            </div>

            <div className="flex items-center ml-4 gap-3 cursor-pointer" >
              <span className="bg-red w-6 h-6 rounded-full text-white flex justify-center items-center">
                <FaPlus />
              </span>
              <p className="text-blue">Add more education</p>
            </div>
          </div>

        </div>

        {/* Willing to Relocate  */}
        <div className=' mt-6'>
          <div className=' space-y-3'>
            <span className=' font-bold'>Willing To Relocate?</span>
            <div className=' flex gap-6 cursor-pointer '>

              <label htmlFor="relocateYes" className=' flex items-center gap-2'>
                <input type="radio" value="Yes" id='relocateYes' className='w-5 h-5 opacity-55' {...register("willingToRelocate", { required: "required" })} />
                Yes

              </label>

              <label htmlFor="relocateNo" className=' flex items-center gap-2'>
                <input type="radio" value="No" id='relocateNo' className='w-5 h-5 opacity-55' {...register("willingToRelocate", { required: "required" })} />
                No
              </label>
            </div>
            {errors.willingToRelocate && (
              <p className="text-red">{errors.willingToRelocate.message}</p>
            )}

          </div>
        </div>

        {/* Willing to Travels  */}
        <div className=' mt-6'>
          <div className=' space-y-3'>
            <span>Willing To Travel?</span>

            <div className=' flex gap-6 cursor-pointer '>
              <label htmlFor="willingNo" className=' flex items-center gap-2'>
                <input type="radio" value="No" id='willingToTravel' className='w-5 h-5 opacity-55'  {...register("willingToTravel", { required: "required" })} />
                No
              </label>

              <label htmlFor="willing25" className=' flex items-center gap-2'>
                <input type="radio" value="25%" id='willingToTravel' className='w-5 h-5 opacity-55'  {...register("willingToTravel", { required: "required" })} />
                25%
              </label>

              <label htmlFor="willing50" className=' flex items-center gap-2'>
                <input type="radio" value="50%" id='willingToTravel' className='w-5 h-5 opacity-55'  {...register("willingToTravel", { required: "required" })} />
                50%
              </label>

              <label htmlFor="willing75" className=' flex items-center gap-2' >
                <input type="radio" value="75%" id='willingToTravel' className='w-5 h-5 opacity-55'  {...register("willingToTravel", { required: "required" })} />
                75%
              </label>

              <label htmlFor="willing100" className=' flex items-center gap-2'>
                <input type="radio" value="100%" id='willingToTravel' className='w-5 h-5 opacity-55' {...register("willingToTravel", { required: "required" })} />
                100%
              </label>

            </div>
            {errors.willingToTravel && (
              <p className="text-red">{errors.willingToTravel.message}</p>
            )}

          </div>
        </div>

        {/* Expected Salary by  */}
        <div className=' mt-6'>
          <div className=' space-y-3'>
            <span >Expected Salary by?</span>

            <div className=' flex gap-6 cursor-pointer '>
              <label htmlFor="Yearly" className=' flex items-center gap-2'>
                <input type="radio" id='expectedSalary' value="Yearly" className='w-5 h-5 opacity-55' {...register("expectedSalary", { required: "required" })} />
                Yearly
              </label>

              <label htmlFor="Hourly" className=' flex items-center gap-2'>
                <input type="radio" id='expectedSalary' value="Hourly" className='w-5 h-5 opacity-55' {...register("expectedSalary", { required: "required" })} />
                Hourly
              </label>
            </div>
            {errors.expectedSalary && (
              <p className="text-red">{errors.expectedSalary.message}</p>
            )}

          </div>
        </div>

        {/* Language Fluency  */}
        <div className=' border border-[#E7E9EF] my-4 rounded-lg p-4'>
          <h3>Language Fluency</h3>

          <div className=' mt-6 space-y-4'>
            <div>
              <div className=' flex w-full gap-4'>
                <input type="checkbox" />
                <div className=' flex w-full gap-4'>
                  <select className=' border border-borderSlate w-full rounded-lg p-3'>
                    <option value="French">French</option>
                    <option value="French">French</option>
                    <option value="French">French</option>
                  </select>

                  <select className=' border border-borderSlate w-full rounded-lg p-3'>
                    <option value="Good">Good</option>
                    <option value="Better">Better</option>
                    <option value="Fluent">Fluent</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex items-center ml-4 gap-3 cursor-pointer" >
              <span className="bg-red w-6 h-6 rounded-full text-white flex justify-center items-center">
                <FaPlus />
              </span>
              <p className="text-blue">Add more education</p>
            </div>
          </div>

        </div>

        {/* I am looking for work  */}
        <div className=' mt-6'>
          <div className=' space-y-3'>
            <span className=' font-bold'>I am looking for work?</span>
            <div className=' flex  md:flex-row flex-col gap-6 cursor-pointer '>

              <label htmlFor="" className=' flex items-center gap-2'>
                <input type="radio" value="No" className='w-5 h-5 opacity-55' id='lookingForWork' {...register("lookingForWork", { required: "required" })} />
                No
              </label>

              <label htmlFor="" className=' flex items-center gap-2'>
                <input type="radio" value="Full-time/Part-time Job" className='w-5 h-5 opacity-55' id='lookingForWork' {...register("lookingForWork", { required: "required" })} />
                Full-time/Part-time Job
              </label>

              <label htmlFor="" className=' flex items-center gap-2'>
                <input type="radio" value="Extra Work (Shifts, Gigs, etc)" className='w-5 h-5 opacity-55' id='lookingForWork' {...register("lookingForWork", { required: "required" })} />
                Extra Work (Shifts, Gigs, etc)

              </label>

              <label htmlFor="" className=' flex items-center gap-2'>
                <input type="radio" value="ALL employment opportunities" className='w-5 h-5 opacity-55' id='lookingForWork' {...register("lookingForWork", { required: "required" })} />
                ALL employment opportunities

              </label>
            </div>
            {errors.lookingForWork && (
              <p className="text-red">{errors.lookingForWork.message}</p>
            )}

          </div>
        </div>

        {/* Date of Birth  */}
        <div className=' w-full mt-6'>
          <label htmlFor="dateOfBirth">
            Date of Birth
            <input type="date" id='dateOfBirth' placeholder='DD/MM/YYYY' className=' border border-borderSlate w-full rounded-lg p-2' {...register("dateOfBirth", { required: "required" })} />
          </label>
          {errors.dateOfBirth && <p className=' text-red'>{errors.dateOfBirth.message}</p>}
        </div>

        {/* Which city are you Looking for jobs in ? */}
        <div className=' w-full mt-6'>
          <h3>Which city are you Looking for jobs in ?</h3>
          <div className=' flex gap-4 mt-4'>
            <label htmlFor="" className=' w-full '>
              <span className=' text-slate'>
                Province
              </span>
              <select id="province" className=' border border-borderSlate w-full rounded-lg p-3' {...register("province", { required: "required" })} >
                <option value="jaipur">jaipur</option>
                <option value="jaipur">jaipur</option>
                <option value="jaipur">jaipur</option>
              </select>
              {errors.province && (
                <p className="text-red">{errors.province.message}</p>
              )}
            </label>

            <label htmlFor="" className=' w-full text-borderSlate'>

              <span className=' text-slate'>
                City
              </span>
              <select className=' border border-borderSlate w-full rounded-lg p-3' {...register("city", { required: "required" })}>
                <option value="jaipur">jaipur</option>
                <option value="jaipur">jaipur</option>
                <option value="jaipur">jaipur</option>
              </select>
              {errors.city && (
                <p className="text-red">{errors.city.message}</p>
              )}
            </label>
          </div>
        </div>

        {/* work in canada  */}
        <div className=' border border-[#E7E9EF] my-4 rounded-lg   p-2  mt-6'>

          {/* Can you legally work in Canada?  */}
          <div className=' mt-4'>
            <div className=' space-y-3'>
              <span className=' font-bold'>Can you legally work in Canada?</span>
              <div className=' flex gap-6 '>
                <label htmlFor="" className=' flex items-center gap-2'>
                  <input type="radio" value="Yes" className='w-5 h-5 opacity-55'  {...register("legallyWorkInCanada", { required: "required" })} />
                  Yes
                </label>

                <label htmlFor="" className=' flex items-center gap-2'>
                  <input type="radio" value="No" className='w-5 h-5 opacity-55'  {...register("legallyWorkInCanada", { required: "required" })} />
                  No
                </label>
              </div>
              {errors.legallyWorkInCanada && <p className=' text-red'>{errors.legallyWorkInCanada.message}</p>}

            </div>


            {/* Which profile fits you ?  */}
            <div className=' mt-6 space-y-3'>
              <span>Which profile fits you ?</span>
              <div className=' flex gap-6 '>
                <label htmlFor="" className=' flex items-center gap-2'>
                  <input type="radio" value="Yes" className='w-5 h-5 opacity-55' id='profileFit' {...register("profileFit", { required: "required" })} />
                  Yes
                </label>

                <label htmlFor="" className=' flex items-center gap-2'>
                  <input type="radio" value="No" className='w-5 h-5 opacity-55' id='profileFit' {...register("profileFit", { required: "required" })} />
                  No
                </label>

              </div>
              {errors.profileFit && <p>{errors.profileFit.message}</p>}

            </div>

            {/* which country are you From ?  */}
            <div className=' w-full mt-6'>
              <label htmlFor="nationality">
                <span className='font-bold'>Which country are you from? (nationality)</span>
                <select id="nationality" className=' border border-borderSlate w-full rounded-lg p-2' {...register("nationality", { required: "required" })}>
                  <option value="India">India</option>
                  <option value="India">India</option>
                  <option value="India">India</option>
                </select>
              </label>
              {errors.nationality && <p className=' text-red'>{errors.nationality.message}</p>}
            </div>
          </div>
        </div>

        {/* save button  */}
        <div className=' flex justify-end py-6'>
          <button className="text-sm bg-[#D9292F] hover:bg-[#b22225] transition duration-300 rounded-lg py-2.5 px-5 text-white">Save</button>
        </div>

      </form>


    </div>
  )
}

export default Form
