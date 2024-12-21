import Image from 'next/image'
import React from 'react'

const WhyJoin = () => {
    return (
        <section className='py-7 font-sans px-[1rem] md:px-[3rem] lg:px-[6rem]'>
            <div className='relative flex flex-col lg:flex-row justify-center items-center'>
                <div className='relative z-0 w-full  h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]'>
                    <Image
                        src={"/Images/poster.png"}
                        fill
                        className='object-cover rounded-2xl'
                        alt='why_join'
                    />
                </div>

                <div className='bg-white/90 p-4 sm:p-6 md:p-8 rounded-2xl relative z-10 w-full 
                    mt-[-50px] sm:mt-[-75px] lg:mt-0 lg:ml-[-100px]
                    mx-4 sm:mx-8 lg:mx-0'>
                    <Image
                        src={"/Images/pin2.png"}
                        width={30}
                        height={30}
                        alt='pin'
                        className='absolute -top-1 -right-1 z-20 w-6 h-6 sm:w-8 sm:h-8'
                    />
                    <h2 className='font-bold font-caveat text-[#D9292F] text-xl sm:text-2xl md:text-3xl'>
                        Why Join Our Team
                    </h2>
                    <p className='leading-[20px] text-[#1E202C] mt-3 text-sm sm:text-base'>
                        Join the Reds Diner team in Calgary and become part of a vibrant, friendly, and dynamic workplace! At Reds Diner, we pride ourselves on delivering exceptional food and service, creating memorable dining experiences for our guests. As a member of our team, you'll enjoy a supportive environment where your skills and contributions are valued. We offer competitive wages, opportunities for growth, and a welcoming atmosphere that feels like family. Whether you're passionate about hospitality, culinary arts, or customer service, Reds Diner is the perfect place to advance your career and make a difference in the community. Join us and be part of a tradition of excellence!
                    </p>
                    <div className='absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] -right-2 -bottom-2 sm:-right-3 sm:-bottom-3 opacity-40'>
                        <Image
                            src={"/Images/dots.png"}
                            fill
                            alt='dots'
                            className='object-contain'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyJoin