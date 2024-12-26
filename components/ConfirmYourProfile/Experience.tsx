import Image from 'next/image'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const Experience = () => {
  return (
    <section className='w-full h-auto  bg-[#FFFBFB] rounded-xl text-[0.9rem] p-3 md:p-6 text-[#585E68]'>
      <div className=' flex justify-between items-center gap-3'>
        <p className=' font-caveat flex text-red text-[1.5rem] font-bold items-center gap-3'>
          <span className=' rounded-full border border-red p-[8px] w-10 h-10 flex justify-center items-center'>
            <Image src={"/Images/work-exp.png"} alt="logo" width={150} height={150} />
          </span>
          Work Experience
        </p>
        <span>
          <Image src={"/Images/pencil.png"} alt="logo" width={20} height={20} />
        </span>
      </div>

      <div className=' border border-[#C9C9C9] rounded-lg p-3.5 mt-3 space-y-1'>
        <h3 className=' font-medium text-base text-black '>Prudential</h3>
        <p className=' text-[#585E68] font-medium'>Sales Executive</p>
        <p className=' text-[#585E68] font-medium'>Aug 2020 - Aug 2021 (1 year)</p>
        <ul className=' list-disc'>
          <li className=' text-[#585E68] ml-6'>
            Best sales consultant at Sephora Stephen Av store for 3 quarters in a row
          </li>
        </ul>

      </div>

      <div className=' border border-[#C9C9C9] rounded-lg p-3.5 mt-3 space-y-1'>
        <h3 className=' font-medium text-base text-black '>Prudential</h3>
        <p className=' text-[#585E68] font-medium'>Sales Executive</p>
        <p className=' text-[#585E68] font-medium'>Aug 2020 - Aug 2021 (1 year)</p>
        <ul className=' list-disc'>
          <li className=' text-[#585E68] ml-6'>
            Best sales consultant at Sephora Stephen Av store for 3 quarters in a row
          </li>
        </ul>

      </div>

      <div className=' flex items-center ml-4 mt-4 gap-3'>
        <span className=' bg-red w-6 h-6 rounded-full text-white flex justify-center items-center '>
          <FaPlus />
        </span>
        <p className=' text-blue'>Add more experience</p>
      </div>
    </section>
  )
}

export default Experience
