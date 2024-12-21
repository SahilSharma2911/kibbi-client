import Image from 'next/image'
import React from 'react'
import Filter from './Filter'
import JobCard from './JobCard'

const JobOpening = () => {
    return (
        <section className='py-7 font-sans px-[1rem] md:px-[3rem] lg:px-[6rem]'>
            <div className='bg-white p-5 rounded-2xl lg:px-[5rem]'>
                <div className='flex gap-2 items-center w-full justify-center'>
                    <Image src={"/Images/jb-tick2.png"} width={30} height={30} alt='#' />
                    <h2 className='font-bold font-caveat text-[#D9292F] text-2xl md:text-3xl'>
                        Our Job Openings
                    </h2>
                    <Image src={"/Images/jb-tick1.png"} width={30} height={30} alt='#' className='ml-2' />
                </div>
                <div>
                    <Filter />
                </div>
                <div className='space-y-5'>
                    <JobCard />
                    <JobCard />
                </div>
            </div>
        </section>
    )
}

export default JobOpening
