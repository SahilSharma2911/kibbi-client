import Image from 'next/image'
import React from 'react'

const OurBenefit = () => {
    return (
        <section className='mt-3 md:mt-7 pb-7 font-sans px-[1rem] md:px-[3rem] lg:px-[6rem] text-sm md:text-base'>
            <div className='flex gap-2 items-center w-full justify-center'>
                <Image src={"/Images/tick.png"} width={30} height={30} alt='tick' />
                <h2 className='font-bold font-caveat text-[#D9292F] text-2xl md:text-3xl'>
                    Our Benefit
                </h2>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10 xl:px-12 text-center'>
                <span className='flex flex-col items-center'>
                    <Image src={"/Images/ob1.png"} width={100} height={100} alt='our_benefit' />
                    <h3 className='font-bold mt-3'>Career Growth Opportunities</h3>
                </span>
                <span className='flex flex-col items-center'>
                    <Image src={"/Images/ob2.png"} width={100} height={100} alt='our_benefit' />
                    <h3 className='font-bold mt-3'>Insurance</h3>
                </span>
                <span className='flex flex-col items-center'>
                    <Image src={"/Images/ob3.png"} width={100} height={100} alt='our_benefit' />
                    <h3 className='font-bold mt-3'>Tips & Bonuses</h3>
                </span>
                <span className='flex flex-col items-center'>
                    <Image src={"/Images/ob4.png"} width={100} height={100} alt='our_benefit' />
                    <h3 className='font-bold mt-3'>Insurance</h3>
                </span>
            </div>

        </section>
    )
}

export default OurBenefit
