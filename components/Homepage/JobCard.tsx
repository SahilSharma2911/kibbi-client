import Image from 'next/image'
import React from 'react'

const JobCard = () => {
    return (
        <div className='bg-[#D9292F0A] border-[1.5px] border-[#C2252A] hover:shadow-md transition-shadow duration-300 ease-in-out  p-5 rounded-xl flex flex-col md:flex-row gap-7 font-sans h-full'>
            <div className='flex gap-7'>
                <div className="rounded-full overflow-hidden w-fit h-fit">
                    <Image
                        src={"/Images/avatar.png"}
                        width={80}
                        height={80}
                        className='object-cover'
                        alt='logo'
                    />
                </div>
                <div className='flex-1'>
                    <div className='flex gap-2 items-center'>
                        <h3 className='text-[#141414] text-xl font-medium'>Server</h3>
                        <span className='bg-[#F9D627] px-2 py-0.5 text-sm rounded-2xl'>NEW</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className='text-[#631F61] font-medium text-xl'>Red&apos;s Diner</p>
                        <p className='text-sm text-[#1D1D1F]'>#Food & Beverage </p>
                    </div>
                    <div className='text-[#1A212B] space-y-2 mt-2'>
                        <span className='flex items-center gap-2'>
                            <Image src={"/Images/pin3.png"} width={20} height={20} alt='pin' />
                            <p className='text-sm'>620 10 Ave SW #134, Calgary, AB T2R 1C3</p>
                        </span>

                        <div className='flex flex-col sm:flex-row gap-5'>
                            <span className='flex items-center gap-2'>
                                <Image src={"/Images/clock.png"} width={20} height={20} alt='clock' />
                                <p className='text-sm'>4PM - 10PM (6 Hours)</p>
                            </span>
                            <span className='flex items-center gap-2'>
                                <Image src={"/Images/bag.png"} width={20} height={20} alt='bag' />
                                <p className='text-sm'>Full-Time </p>
                            </span>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-5'>
                            <span className='flex items-center gap-2'>
                                <Image src={"/Images/wallet.png"} width={20} height={20} alt='wallet' />
                                <p className='text-sm'>Payment: Hourly </p>
                            </span>
                            <span className='flex items-center gap-2'>
                                <Image src={"/Images/website.png"} width={20} height={20} alt='language' />
                                <p className='text-sm'>Basic English Needed </p>
                            </span>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-5'>
                            <span className='flex items-center gap-2'>
                                <Image src={"/Images/human.png"} width={20} height={20} alt='position' />
                                <p className='text-sm'>3/5 positions filled</p>
                            </span>
                            <span className='flex items-center gap-2'>
                                <Image src={"/Images/calendar.png"} width={20} height={20} alt='date' />
                                <p className='text-sm'>Start Date: As soon as possible</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex md:flex-col justify-between md:justify-between md:ml-auto text-end'>
                <p className='text-[#456072] text-xl md:text-2xl font-medium'>$18/h</p>
                <button className='text-lg md:text-xl text-[#0483F8] font-medium hover:text-blue-700 transition-colors'>
                    Apply now
                </button>
            </div>
        </div>
    )
}

export default JobCard