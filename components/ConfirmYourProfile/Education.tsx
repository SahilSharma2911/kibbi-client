import Image from 'next/image';
import React from 'react'
import { FaPlus } from "react-icons/fa6";

const Education = () => {
  return (
    <div className='w-full h-auto  bg-[#FFFBFB] rounded-xl text-[0.9rem] p-3 md:p-6 text-[#585E68] font-medium'>
      <div className=' flex justify-between items-center gap-3'>
        <p className=' font-caveat flex text-red text-2xl font-bold items-center gap-3'>
          <span className=' rounded-full border border-red p-[7px] w-10 h-10 flex justify-center items-center'>
            <Image src={"/Images/education.png"} alt="logo" width={150} height={150} />
          </span>
          Education
        </p>
        <span>
          <Image src={"/Images/pencil.png"} alt="logo" width={20} height={20} />
        </span>
      </div>

      <div className=' border border-[#C9C9C9] rounded-xl p-3.5 mt-3 space-y-1'>
        <h3 className=' font-medium text-base text-black'>Van Lang University</h3>
        <p className=' text-[#585E68]'>
          Master in Accounting
        </p>
        <p>Bachelor</p>
        <p>Aug 2020 - Aug 2021</p>
      </div>

      <div className=' border border-[#C9C9C9] rounded-xl p-3.5 mt-3 space-y-1'>
        <h3 className=' font-medium text-base text-black'>Van Lang University</h3>
        <p className=' text-[#585E68]'>
          Master in Accounting
        </p>
        <p>Bachelor</p>
        <p>I&apos;m currently enrolled here</p>
      </div>



      <div className=' flex items-center ml-4 mt-4 gap-3'>
        <span className=' bg-red w-6 h-6 rounded-full text-white flex justify-center items-center '>
          <FaPlus />
        </span>
        <p className=' text-blue'>Add more education</p>
      </div>
    </div>
  )
}

export default Education
