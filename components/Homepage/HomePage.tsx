import React from 'react'
import Hero from './Hero'
import UserCard from './UserCard'
import About from './About'
import CoreValue from './CoreValue'
import WhyJoin from './WhyJoin'
import OurBenefit from './OurBenefit'
import JobOpening from './JobOpening'
import StayInTouch from './StayInTouch'

const HomePage = () => {
    return (
        <main>
            <Hero />
            <UserCard />
            <About />
            <CoreValue />
            <WhyJoin />
            <OurBenefit />
            <JobOpening />
            <StayInTouch />
        </main>
    )
}

export default HomePage
