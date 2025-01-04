import React from 'react'
import Stepper from '../Resume/Stepper'

const YourPreferences = () => {
    return (
        <main className="py-10 font-sans px-[1rem] md:px-[3rem] lg:px-[6rem]">
            <section className="bg-white px-2 md:px-4 py-7 rounded-2xl">
                <h1 className='font-caveat text-red font-bold text-2xl md:text-3xl pb-6'>
                    Tell us about your preferences
                </h1>
                <Stepper />
            </section>
        </main>
    )
}

export default YourPreferences
