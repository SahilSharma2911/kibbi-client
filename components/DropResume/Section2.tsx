import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section2 = () => {
    return (
        <div className='pt-6 md:pt-10 pb-14 rounded-lg mt-8 md:mt-10 px-1.5 md:px-4 lg:px-14 bg-[#FFFBFB]'>

            {/* Bird image  */}
            <div className=' flex justify-center'>
                <Image src={"/Images/bird.png"} width={150} height={150} alt="icon" className='' />
            </div>

            {/* info  */}
            <div className=' w-full md:w-8/12 mx-auto mt-2'>
                <h3 className='font-caveat text-center text-[1.6rem] md:text-[2rem] text-red font-bold'>Yay,[First Name],</h3>
                <p className='mt-3 text-center font-sans text-xl md:text-2xl'>Thank you for dropping your resume! Your profile has been successfully created and updated. You have also subscribed to receive job alerts from [business_name].</p>
                <p className=' text-[#585E68] font-sans text-center mt-3'>
                    <span className=' font-bold'> What ‘s next?</span>
                    <br />
                    We&apos;ll notify you by text and email as soon as [Business Name] posts new jobs. For instant updates, you can also download the Kibbi app to receive real-time notifications.
                </p>
            </div>

            {/* other links  */}
            <div className='mt-5 flex gap-5 justify-center'>
                <div>
                    <Image src={"/Images/googlePlay.png"} alt='image' width={120} height={120} />
                </div>
                <div>
                    <Image src={"/Images/appStore.png"} alt='image' width={120} height={120} />
                </div>
            </div>


            {/* submit buttons  */}

            <div className='mt-7 flex flex-row gap-4 justify-center'>
                <Link href={"/resume/your-preferences"}>
                    <button className="text-sm bg-[#979797] hover:bg-[#868686] transition duration-300 rounded-lg py-2.5 px-5 md:px-12 text-white font-sans text-[0.8rem]">
                        Skip for now
                    </button>
                </Link>
                <Link href={"/resume/your-preferences"}>
                    <button className="text-sm bg-[#D9292F] hover:bg-[#b22225] transition duration-300 rounded-lg py-2.5 px-5 md:px-12 text-white text-[0.8rem] font-sans">
                        Go to step 4
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Section2