import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <section className='px-[1rem] md:px-[3rem] lg:px-[4rem] py-5 flex gap-5 text-center flex-col lg:flex-row justify-between items-center bg-white text-[#81868E] border-[#D9292F] border-t font-sans'>
            <div className='flex gap-3 items-center'>
                <p>POWERED BY</p>
                <Link href={"/"}>
                    <Image src={"/Images/logo.png"} width={100} height={100} alt='logo' />
                </Link>
            </div>
            <div className='flex gap-3 items-center'>
                <Link href={"/"}>Privacy Policy</Link>
                <Link href={"/"}>Terms of Use </Link>
            </div>
            <div className='flex gap-3 items-center'>
                <p>Copyright 2024 Kibbi Technologies Inc. All rights reserved </p>
            </div>
        </section>
    )
}

export default Footer
