import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const Experience = () => {
  return (
    <div className=' w-full h-auto px-8 bg-[#FFFBFB] rounded-md shadow-sm mt-4 py-6'>
      <div className=' flex justify-between items-center'>
        <p className=' font-caveat flex text-red text-[1.5rem] font-bold items-center gap-3'>
          <span className=' rounded-full border border-red p-2'>
            <img src={"/Images/resume-logo.png"} alt="logo" />
          </span>
          Work Experience
        </p>
        <span>
          <img src={"/Images/pencile.png"} alt="logo" />
        </span>
      </div>

      <div className=' border-2 border-[#C9C9C9] rounded-lg p-3 mt-3'>
        <h3 className=' font-bold '>Prudential</h3>
        <p className=' text-[#585E68] font-semibold'>Sales Executive</p>
        <p className=' text-[#585E68] font-semibold'>Aug 2020 - Aug 2021 (1 year)</p>
        <ul className=' list-disc'>
          <li className=' text-[#585E68] ml-5'>
            Best sales consultant at Sephora Stephen Av store for 3 quarters in a row
          </li>
        </ul>

      </div>

      <div className=' border-2 border-[#C9C9C9] rounded-lg p-3 mt-3'>
        <h3 className=' font-bold '>Prudential</h3>
        <p className=' text-[#585E68] font-semibold'>Sales Executive</p>
        <p className=' text-[#585E68] font-semibold'>Aug 2020 - Aug 2021 (1 year)</p>
        <ul className=' list-disc'>
          <li className=' text-[#585E68] ml-5'>
            Best sales consultant at Sephora Stephen Av store for 3 quarters in a row
          </li>
        </ul>

      </div>

      <div className=' flex items-center ml-6 mt-2 gap-3'>
        <span className=' bg-red w-6 h-6 rounded-full text-white flex justify-center items-center '>
          <FaPlus />
        </span>
        <p className=' text-blue'>Add more experience</p>
      </div>
    </div>
  )
}

export default Experience
