import Image from 'next/image'
import React from 'react'

const PersonalInfo = () => {
  return (
    <section className=' w-full h-auto  bg-[#FFFBFB] rounded-xl text-[0.9rem] p-3 md:p-6 text-[#1A212B]'>
      <div className=' flex justify-between items-center gap-3'>
        <p className=' font-caveat flex text-red text-2xl font-bold items-center gap-3'>
          <span className=' rounded-full border border-red p-[9px] w-10 h-10'>
            <Image src={"/Images/persoanl-info.png"} alt="logo" width={100} height={100} />
          </span>
          Personal Information
        </p>
        <span>
          <Image src={"/Images/pencil.png"} alt="logo" width={20} height={20} />
        </span>
      </div>

      <div className=' mt-4 flex flex-col gap-2'>
        <h3>Profile Photo</h3>

        <div className=' flex items-center gap-6'>
          <img src="/Images/person.png" alt="" className=' size-20 rounded-full ' />
          <div className='space-y-0.5'>
            <h3 className='font-medium text-base text-black'>Howard Ong</h3>
            <p>Email: example@gmail.com</p>
            <p>Phone number: 0123456789</p>
          </div>
        </div>

        <ul className="list-disc flex flex-col gap-2 mt-1 pl-7">
          <li>
            Dedicated and detail-oriented Financial Analyst with 10 years of experience. Eager to apply proven-budget maximization skills for Bank of Brocelle in monitoring, maintaining, and completing client billing and reconciliations. Special interest in achieving the millennial market and helping with retirement and general financial planning.
          </li>

          <li>Address: 123, Anywhere St. Any City</li>
          <li className="flex gap-10">
            <li>City: Ho Chi Minh</li>
            <li>Province: Binh Thanh</li>
          </li>
          <li>Postal Code</li>
          <li>Are you eligible to work in Canada? Yes</li>
        </ul>

      </div>

    </section>
  )
}

export default PersonalInfo
