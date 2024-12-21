import Image from 'next/image';
import React from 'react';

const StayInTouch = () => {
    return (
        <section className='pb-7 md:pb-16 mt-7 font-sans px-[1rem] md:px-[3rem] lg:px-[6rem]'>
            <div className='relative bg-[#F9D627] px-4 lg:px-14 py-14 rounded-3xl flex justify-between'>
                <div className='z-10'>
                    <h2 className='font-caveat text-4xl font-bold'>Wanna stay in touch?</h2>
                    <p className='mt-2'>Drop your resume here and follow us on Kibbi to receive job openings in real time</p>
                    <div>
                        <div className='flex gap-2 mt-5'>
                            <input
                                type="text"
                                placeholder='Text your phone number'
                                className='w-full py-3 px-3 text-sm rounded-lg'
                            />
                            <button className='bg-black text-white rounded-lg px-5 text-sm'>Send</button>
                        </div>
                        <div className='bg-white mt-4 p-3 w-fit rounded-lg font-semibold text-sm'>
                            Or Drop Your Resume
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-0 -right-0 '>
                    <Image
                        src={"/Images/poster2.png"}
                        width={400}
                        height={400}
                        alt='poster'
                        className='object-contain'
                    />
                </div>
                <div className='absolute bottom-5 right-[13rem]'>
                    <Image
                        src={"/Images/poster-mini.png"}
                        width={250}
                        height={250}
                        alt='poster'
                        className='object-contain'
                    />
                </div>
                <div className='absolute bottom-[8.5rem] right-[25rem]'>
                    <Image
                        src={"/Images/star.png"}
                        width={90}
                        height={90}
                        alt='poster'
                        className='object-contain'
                    />
                </div>
                <div className='absolute bottom-[14rem] right-[21rem]'>
                    <Image
                        src={"/Images/star2.png"}
                        width={80}
                        height={80}
                        alt='poster'
                        className='object-contain'
                    />
                </div>
                <div className='absolute bottom-14 left-0'>
                    <Image
                        src={"/Images/dots2.png"}
                        width={150}
                        height={150}
                        alt='poster'
                        className='object-contain'
                    />
                </div>
            </div>
        </section>
    );
};

export default StayInTouch;
