import Image from 'next/image'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const Skills = () => {
    return (
        <section className='w-full h-auto  bg-[#FFFBFB] rounded-xl text-[0.9rem] p-3 md:p-6 text-[#1A212B]'>
            <div className=' flex justify-between items-center gap-3'>
                <p className=' font-caveat flex text-red text-[1.5rem] font-bold items-center gap-3'>
                    <span className=' rounded-full border border-red p-[5px] w-10 h-10 flex justify-center items-center'>
                        <Image src={"/Images/skills.png"} alt="logo" width={150} height={150} />
                    </span>
                    Skills
                </p>
                <span>
                    <Image src={"/Images/pencil.png"} alt="logo" width={20} height={20} />
                </span>
            </div>

            <div className='mt-3'>
                <ul className=' list-disc flex flex-col gap-2 mt-1 ml-7'>
                    <li>Financial modeling and reporting</li>
                    <li> Data mining and analysis</li>
                </ul>

            </div>

            <div className=' flex items-center ml-4 mt-4 gap-3'>
                <span className=' bg-red w-6 h-6 rounded-full text-white flex justify-center items-center '>
                    <FaPlus />
                </span>
                <p className=' text-blue'>Add more skills</p>
            </div>
        </section>
    )
}

export default Skills
