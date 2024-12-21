import Image from 'next/image';
import React from 'react';

const coreValues = [
    {
        id: 1,
        imgSrc: '/Images/fun.png',
        alt: 'fun',
        title: 'Fun',
        description: "If we're not having fun, we&apos;re doing it wrong",
    },
    {
        id: 2,
        imgSrc: '/Images/teamwork1.png',
        alt: 'teamwork1',
        title: 'Teamwork',
        description: 'Together we can move mountains, or at least rearrange some furniture.',
    },
    {
        id: 3,
        imgSrc: '/Images/teamwork2.png',
        alt: 'teamwork2',
        title: 'Teamwork',
        description: 'Together we can move mountains, or at least rearrange some furniture.',
    },
    {
        id: 4,
        imgSrc: '/Images/customer-obb.png',
        alt: 'customer-obb',
        title: 'Customer Obsession',
        description: "Because without you, we,re just standing around talking to ourselves.",
    },
    {
        id: 5,
        imgSrc: '/Images/quality.png',
        alt: 'quality',
        title: 'Quality',
        description: " If it's not good enough for Grandma, it's not good enough.",
    },
    {
        id: 6,
        imgSrc: '/Images/loyality.png',
        alt: 'Loyalty',
        title: 'Loyalty',
        description: "Like a golden retriever, but with business acumen.",
    },
];

const CoreValue = () => {
    return (
        <section className='pb-5 md:pb-7 font-sans px-[1rem] md:px-[3rem] lg:px-[6rem]'>
            <div className='flex gap-2 items-center w-full justify-center'>
                <Image src="/Images/core-value.png" width={30} height={30} alt="core_value" />
                <h2 className='font-bold font-caveat text-[#D9292F] text-2xl md:text-3xl'>
                    Core Values
                </h2>
            </div>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {coreValues.map((value) => (
                    <div
                        key={value.id}
                        className='bg-white p-5 rounded-2xl text-[#454A5F] leading-[20px] space-y-2'
                    >
                        <div className='h-[70px] w-[70px]'>
                            <Image
                                src={value.imgSrc}
                                width={70}
                                height={70}
                                alt={value.alt}
                                className='object-contain h-full w-full'
                            />
                        </div>
                        <h3 className='font-bold text-xl text-black'>{value.title}</h3>
                        <p>{value.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CoreValue;
