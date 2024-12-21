import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <section className='px-[1rem] md:px-[3rem] lg:px-[6rem] py-5 flex justify-between items-center bg-white shadow-lg'>
            <div>
                <Link href={"/"}>
                    <Image src={"/Images/logo.png"} width={100} height={100} alt='logo' />
                </Link>
            </div>
            <div className='border border-[#1D1D1F] rounded-md w-fit py-2 px-4 font-sans cursor-pointer hover:shadow-lg transition-shadow duration-300'>
                Sign Up/Log In
            </div>
        </section>
    )
}

export default Navbar
