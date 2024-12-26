import React from 'react'
import Stepper from '../Resume/Stepper'
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import Experience from './Experience'
import Image from 'next/image'
import Skills from './Skills'
import LicenseCertification from './LicenseCertification'
import Link from 'next/link'

const ConfirmYourProfile = () => {
    return (
        <main className="py-10 font-sans px-[1rem] md:px-[3rem] lg:px-[6rem]">
            <section className="bg-white px-4 py-7 rounded-2xl">
                <h1 className=' font-caveat text-red font-bold text-2xl md:text-3xl pb-6'>Confirm your profile</h1>
                <Stepper />
                <div className='w-full mt-7 md:mt-12 flex flex-col lg:flex-row gap-8'>
                    {/* left side  */}
                    <div className='w-full lg:w-[50%] space-y-3 font-sans font-medium md:px-2'>
                        <h3 className='font-medium'>View Resume</h3>
                        <Image
                            src={"/Images/resume.png"}
                            alt='logo'
                            width={500}
                            height={500}
                            className="object-contain w-full border-8 rounded-md border-[#D9D9D9]"
                        />
                    </div>
                    {/* right side  */}
                    <div className='w-full lg:w-[50%] mt-3 md:mt-10 space-y-3'>
                        <PersonalInfo />
                        <Education />
                        <Experience />
                        <Skills />
                        <LicenseCertification />
                    </div>
                </div>
                <div className="w-full flex justify-end items-center mt-7 gap-3">
                    <Link href={"/resume/confirm-your-profile"}>
                        <button className="text-sm bg-[#979797] hover:bg-[#868686] transition duration-300 rounded-lg py-2.5 px-5 text-white">
                            Upload Another Resume
                        </button>
                    </Link>
                    <Link href={"/resume/confirm-your-profile"}>
                        <button className="text-sm bg-[#D9292F] hover:bg-[#b22225] transition duration-300 rounded-lg py-2.5 px-5 text-white">
                            Next
                        </button>
                    </Link>
                </div>
            </section>

        </main>
    )
}

export default ConfirmYourProfile
