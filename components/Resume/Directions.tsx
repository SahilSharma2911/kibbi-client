import Link from 'next/link'
import React from 'react'

const Directions = () => {
  return (
    <section className='pb-5 md:pb-7 font-sans px-[1rem] md:px-[3rem] lg:px-[6rem] mt-6 p-3'>
      <div className='bg-white px-4 py-6 rounded-2xl'>
        <h2 className=' font-caveat text-red font-bold text-[1.5rem] pb-6'>Oops! Seems like you have not had a profile...</h2>

        <div className=' font-sans text-[0.9rem]'>
          <h3 className=' mb-4'>
            <span className=' font-bold '> Let&#39;s Get Started! </span>
            Uploading your resume is the fastest way to create your profile on Kibbi. Our system will analyze it using AI-powered tools to:
          </h3>

          {/* points  */}
          <ul className=' font-normal space-y-4'>
            <li className=' flex items-center gap-3'>
              <span className=' w-6 h-6 p-2 font-architects bg-yellow rounded-full flex items-center justify-center font-extrabold'>01.</span>
              Automatically fill out your profile details.
            </li>
            <li className=' flex items-center gap-3'>
              <span className=' w-6 h-6 p-2 font-architects bg-yellow rounded-full flex items-center justify-center font-extrabold'>02.</span>
              Extract your skills, work experience, education, and more.
            </li>
            <li className=' flex items-center gap-3'>
              <span className=' w-6 h-6 p-2 font-architects bg-yellow rounded-full flex items-center justify-center font-extrabold'>03.</span>
              Highlight your strengths to help you stand out to employers.
            </li>
          </ul>

          {/* link  */}
          <Link href="/" className=' flex' >
            <div className=' mt-4 text-sky'>Learn More About How It Works
              <span className="animate-move"> &gt;</span>
              <span className="animate-move [animation-delay:200ms]">&gt;</span>
              <span className="animate-move [animation-delay:400ms]">&gt;</span>
              <span className="animate-move [animation-delay:600ms]">&gt;</span>
              <span className="animate-move [animation-delay:800ms]">&gt;</span>
            </div>

          </Link>

        </div>
      </div>

    </section>
  )
}

export default Directions
