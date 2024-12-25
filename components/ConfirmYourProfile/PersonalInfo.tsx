import React from 'react'

const PersonalInfo = () => {
  return (
    <div className=' w-full h-auto px-8 bg-[#FFFBFB] rounded-md  py-3'>

      <div className=' flex justify-between items-center'>
        <p className=' font-caveat flex text-red text-[1.5rem] font-bold items-center gap-3'>
          <span className=' rounded-full border border-red p-2'>
            <img src={"/Images/resume-logo.png"} alt="logo" />
          </span>
          Personal Information
        </p>
        <span>
          <img src={"/Images/pencile.png"} alt="logo" />
        </span>
      </div>

      <div className=' mt-4 flex flex-col gap-3'>
        <h3>Profile Photo</h3>

        <div className=' flex items-center gap-6'>
          <img src="/Images/person.png" alt="" className=' size-20 rounded-full ' />
          <div>
            <h3 className=' font-semibold'>Howard Ong</h3>
            <p>Email: example@gmail.com</p>
            <p>Phone number: 0123456789</p>
          </div>
        </div>

        <ul className=' list-disc flex flex-col gap-4 mt-3'>
          <li>Dedicated and detail-oriented Financial Analyst with 10 years of experience. Eager to apply proven-budget maximization skills for Bank of Brocelle in monitoring, maintaining, and completing client billing and reconciliations. Special interest in achieving the millennial market and helping with retirement and general financial planning.</li>

          <li>Adress: 123, Anywhere St. Any City</li>
          <li>
            City: Ho Chi Minh
             Province: Binh Thanh
          </li>
          <li>Postal Code</li>
          <li>Are you eligible to work in Canada? Yes</li>
        </ul>
      </div>

    </div>
  )
}

export default PersonalInfo
