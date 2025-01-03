import Image from 'next/image'
import React from 'react'

const Section2 = () => {
    return (
        <div className='pt-10 rounded-lg mt-10 px-4 lg:px-14 bg-[#FFFBFB] space-y-6'>

            {/* Bird image  */}
            <div className=' flex justify-center'>
                <Image src={"/Images/bird.png"} width={150} height={150} alt="icon" className='mb-7 -mr-1' />
            </div>

            {/* info  */}
            <div className=' w-full md:w-7/12 mx-auto'>
                <h3 className=' font-caveat text-center text-[2rem] text-red font-bold'>Yay,[First Name],</h3>
                <p className=' text-center font-sans text-[1.5rem]'>Thank you for dropping your resume! Your profile has been successfully created and updated. You have also subscribed to receive job alerts from [business_name].</p>
                <p className=' text-[#585E68] font-sans text-center mt-3'>
                    <span className=' font-bold'> What ‘s next?</span>
                    <br />
                    We'll notify you by text and email as soon as [Business Name] posts new jobs. For instant updates, you can also download the Kibbi app to receive real-time notifications.
                </p>
            </div>

            {/* other links  */}
            <div className=' flex gap-4 justify-center'>

                <div>
                    <Image src={"/Images/googlePlay.png"} alt='image' width={90} height={40} />
                </div>
                <div>
                    <Image src={"/Images/appStore.png"} alt='image' width={90} height={40} />
                </div>

            </div>


            {/* submit buttons  */}

            <div className=' flex md:flex-row flex-col gap-4 justify-center'>

                <button className="text-sm bg-[#979797] hover:bg-[#868686] transition duration-300 rounded-lg py-2.5 px-8 text-white font-sans text-[0.8rem]">
                    Skip for now
                </button>

                <button className="text-sm bg-[#D9292F] hover:bg-[#b22225] transition duration-300 rounded-lg py-2.5 px-8 text-white text-[0.8rem] font-sans">
                    Go to step 4
                </button>

            </div>
        </div>
    )
}

export default Section2
