"use client"
import React, { useState } from 'react'
import Stepper from '../Resume/Stepper'

import Section1 from './Section1';
import Section2 from './Section2';

const DropResume = () => {

    return (
        <main className="py-10 font-sans px-[1rem] md:px-[3rem] lg:px-[6rem]">
            <section className="bg-white px-4 py-7 rounded-2xl">
                <h1 className=' font-caveat text-red font-bold text-2xl md:text-3xl pb-6'>Drop your resume</h1>
                <Stepper />
                <Section1 />
                {/* <Section2 /> */}
            </section>
        </main>
    )
}

export default DropResume
