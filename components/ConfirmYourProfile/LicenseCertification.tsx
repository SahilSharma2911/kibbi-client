import Image from 'next/image'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const LicenseCertification = () => {
    return (
        <section className='w-full h-auto  bg-[#FFFBFB] rounded-xl text-[0.9rem] p-3 md:p-6 text-[#1A212B]'>
            <div className=' flex justify-between items-center gap-3'>
                <h3 className=' font-caveat flex text-red text-[1.5rem] font-bold items-center gap-3'>
                    <span className=' rounded-full border border-red p-[10px] w-10 h-10 flex justify-center items-center'>
                        <Image src={"/Images/license.png"} alt="logo" width={150} height={150} />
                    </span>
                    License & Certification
                </h3>
                <span>
                    <Image src={"/Images/pencil.png"} alt="logo" width={20} height={20} />
                </span>
            </div>


            <div className=' border border-[#C9C9C9] rounded-lg p-3.5 mt-3 space-y-1'>
                <h3 className=' font-medium text-base text-black '>Certificate of design</h3>
                <p className=' text-[#585E68] font-medium'>ABC</p>
                <p className=' text-[#585E68] font-medium'>Aug 2020 - Aug 2021 (1 year)</p>
                <div className='mt-1'>
                    <Image src={"/Images/cetficate.png"} alt="logo" width={100} height={100} />
                </div>

            </div>

            <div className=' flex items-center ml-4 mt-4 gap-3'>
                <span className=' bg-red w-6 h-6 rounded-full text-white flex justify-center items-center '>
                    <FaPlus />
                </span>
                <p className=' text-blue'>Add more license or certification</p>
            </div>
        </section>
    )
}

export default LicenseCertification
