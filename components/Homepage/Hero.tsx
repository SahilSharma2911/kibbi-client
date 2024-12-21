import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full h-[40vh] lg:h-[60vh]">
            <Image
                src="/Images/banner.png"
                alt="banner_img"
                fill
                priority
                className="object-cover"
                sizes="100vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </section>
    );
};

export default Hero;
