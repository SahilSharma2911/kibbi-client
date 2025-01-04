"use client"

import Image from 'next/image'
import { useForm } from 'react-hook-form'

interface FormValues {
  file: FileList
}

const Form = () => {


  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>()

  const onSubmit = (data: any) => {

    const body = {
      file: data.file

    }

    console.log(body)

  }


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

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Resume upload  */}
        <div className="font-sans text-[1rem] mt-6 md:mt-10">
          <h2 className="font-medium">Upload Your Resume</h2>
          <div className="mt-4 md:mt-7">
            <div className="border-dashed border-2 border-gray-300 p-6 text-center">
              <input
                type="file"
                className='hidden'
                id='file'
                {...register('file', { required: 'File is required' })}
              />

              <label
                htmlFor="file-upload"
                className="cursor-pointer text-slate flex flex-col items-center"
              >
                <Image src={"/Images/pdf-upload.png"} width={30} height={30} alt="pdf" />
                <span className="mt-2">
                  Drop your resume here, or{" "}
                  <span className="hover:underline text-sky font-medium">Click to upload</span>
                </span>
                <span className="mt-2 text-[#737992] text-sm">
                  For the best results, upload your resume in PDF, DOC, DOCX format. If you must use an image, ensure the text is clear
                </span>
              </label>
            </div>
            {errors.file && <p>{errors.file.message}</p>}
          </div>
        </div>




      </form>


    </div>
  )
}

export default Form
