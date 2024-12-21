import Image from 'next/image'
import React from 'react'

const UserCard = () => {
    return (
        <section className='px-[1rem] md:px-[3rem] lg:px-[6rem] flex items-center py-2 md:py-4 relative'>
            <div className="absolute -top-5 md:-top-[4.5rem] h-20 md:h-36 w-20 md:w-36 rounded-full overflow-hidden shadow-lg">
                <Image
                    src={"/Images/avatar.png"}
                    fill
                    className='object-cover'
                    alt='logo'
                />
            </div>
            <div className='ml-[5.5rem] md:ml-[10rem]'>
                <div className='flex  md:items-center md:gap-2'>
                    <h2 className='text-xl font-bold'>Red&apos;s Diner </h2>
                    <div className='flex gap-0.5 md:gap-2 bg-[#E4F1EB] rounded-2xl w-fit px-1.5 md:px-3 py-1 text-sm items-center'>
                        <Image src={"/Images/verify.png"} width={20} height={20} alt='logo' />
                        Verified
                    </div>
                </div>
                <div>
                    <p className='text-[#81868E] text-sm'>13,445 Followers</p>
                </div>
            </div>
        </section>
    )
}

export default UserCard
