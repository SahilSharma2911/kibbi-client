import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <section className=' pb-3 md:pb-6 pt-6 font-sans'>
            <div className='py-3 flex gap-10 border-y px-[1rem] md:px-[3rem] lg:px-[6rem]'>
                <span className='bg-[#D9292F] py-1.5 px-4 text-white rounded-lg'>
                    About
                </span>
                <span className='py-1.5 px-4 rounded-lg'>
                    Jobs
                </span>
            </div>
            <article className='px-[1rem] md:px-[3rem] lg:px-[6rem] font-sans py-10 flex flex-col lg:flex-row gap-5 lg:gap-10'>
                <div className='bg-white p-5 rounded-2xl text-[#141414] w-full lg:w-[65%]'>
                    <h2 className='font-bold font-caveat text-[#D9292F] text-2xl md:text-3xl'>
                        About Business
                    </h2>
                    <p className='leading-[24px] text-center mt-3'>Enjoy breakfast all day Red's Diner! Farm-fresh ingredients and made-in-house. We believe in creating hearty meals that anyone can enjoy and feel like part of the family.</p>
                    <div className='border-t mt-3 pt-3 space-y-2'>
                        <span className='flex items-center gap-1'>
                            <Image src={"/Images/industry.png"} width={20} height={20} alt='industry' className='mr-1' />
                            <h3 className='font-semibold'>Industry:</h3>
                            <p>Breakfast & Brunch Restaurant</p>
                        </span>
                        <span className='flex items-center gap-1'>
                            <Image src={"/Images/pin.png"} width={20} height={20} alt='address' className='mr-1' />
                            <h3 className='font-semibold'>Main Address:</h3>
                            <p> 910 7 Ave SW #1200, Calgary, AB T2P 3N8</p>
                        </span>
                        <span className='flex items-center gap-1 truncate	'>
                            <Image src={"/Images/website.png"} width={20} height={20} alt='website' className='mr-1' />
                            <h3 className='font-semibold'>Website:</h3>
                            <Link
                                href="https://www.Redsdiner.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:underline decoration-1 transition-all truncate	"
                            >
                                <p>https://www.Redsdiner.com</p>
                            </Link>
                        </span>
                        <span className='flex items-center gap-1'>
                            <Image src={"/Images/phone.png"} width={20} height={20} alt='phone' className='mr-1' />
                            <h3 className='font-semibold'>Business Phone: </h3>
                            <Link
                                href="tel:0123456789"
                                className="text-black hover:underline decoration-1 transition-all"
                            >
                                <p>0123456789</p>
                            </Link>
                        </span>
                        <span className='flex items-center gap-1'>
                            <Image src={"/Images/building.png"} width={20} height={20} alt='building' className='mr-1' />
                            <h3 className='font-semibold'>Business Size:</h3>
                            <p>100</p>
                        </span>
                        <span className='flex items-center gap-1'>
                            <Image src={"/Images/organization.png"} width={20} height={20} alt='organization' className='mr-1' />
                            <h3 className='font-semibold'>Organization Type: </h3>
                            <p> </p>
                        </span>
                    </div>
                </div>
                <div className='w-full lg:w-[35%] h-full'>
                    <div className='flex gap-5 h-fit '>
                        <div className='flex items-center gap-2 font-bold bg-[#FFF8F8] w-fit border-t-[2px] border-l-[2px] border-r-[2px] border-b-[4px] border-[#D9292F] p-3 rounded-xl'>
                            <Image src={"/Images/drop-resume.png"} width={15} height={15} alt='drop-resume' className='mr-1' />
                            <p>Drop Resume</p>
                        </div>
                        <div className='flex items-center gap-2 font-bold bg-[#FFF8F8] w-fit border-t-[2px] border-l-[2px] border-r-[2px] border-b-[4px] border-[#D9292F] p-3 rounded-xl'>
                            <Image src={"/Images/follow-bussiness.png"} width={20} height={20} alt='drop-resume' className='mr-1' />
                            <p>Follow Business</p>
                        </div>
                    </div>
                    <div className='bg-white p-5 rounded-2xl text-[#141414] mt-5'>
                        <h3 className='font-bold font-caveat text-[#D9292F] text-2xl md:text-3xl'>
                            We Are Proudly
                        </h3>
                        <div className='flex justify-center mt-5'>
                            <div>
                              <span className='w-[]'></span>  
                                <Image src={"/Images/father-love.png"} width={200} height={200} alt='drop-resume' className='mr-1' />
                            </div>
                            <span>
                                <Image src={"/Images/pet-love.png"} width={200} height={200} alt='drop-resume' className='mr-1' />
                            </span>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default About
