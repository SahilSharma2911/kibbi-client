import React from 'react'
import Stepper from '../Resume/Stepper'
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import Experience from './Experience'

const ConfirmYourProfile = () => {
    return (
        <main className="py-10 font-sans px-[1rem] md:px-[3rem] lg:px-[6rem]">
            <section className="bg-white px-4 py-7 rounded-2xl">
                <h1 className=' font-caveat text-red font-bold text-2xl md:text-3xl pb-6'>Confirm your profile</h1>
                <Stepper />
                <div className=' w-full mt-8 flex gap-8 pb-6 '>
                    {/* left side  */}
                    <div className=' w-[50%] space-y-4 font-sans font-medium h-[800px]'>
                        <h3>View Resume</h3>
                        <img src={"/Images/resume.png"} alt='logo' objectFit="cover" className="object-cover w-full h-full border-8 rounded-md border-[#D9D9D9] " />
                    </div>
                    {/* right side  */}
                    <div className='w-[50%] mt-14'>
                        <PersonalInfo />
                        <Education />
                        <Experience />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ConfirmYourProfile
