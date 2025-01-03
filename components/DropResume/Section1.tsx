import React, { useState } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Section1 = () => {
    const [letter, setLetter] = useState('');
    const [submitted, setSubmitted] = useState('');
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(letter);
        setSubmitted(letter);
    };
    const days = ["Mon", "Tues", "Wed", "Thur", "Sat", "Fri", "Sun"];
    const timeSlots = ["Morning", "Afternoon", "Evening", "OverNight"];

    // Initialize availability state
    const [availability, setAvailability] = useState(
        days.reduce((acc, day) => {
            acc[day] = timeSlots.reduce((slotAcc, slot) => {
                slotAcc[slot] = false; // Initially, all slots are unavailable
                return slotAcc;
            }, {});
            return acc;
        }, {})
    );

    const handleAllToggle = (isChecked) => {
        setAvailability((prev) =>
            days.reduce((acc, day) => {
                acc[day] = timeSlots.reduce((slotAcc, slot) => {
                    slotAcc[slot] = isChecked; // Set all slots for all days to isChecked
                    return slotAcc;
                }, {});
                return acc;
            }, {})
        );
    };

    const handleSlotToggle = (day, slot) => {
        setAvailability((prev) => ({
            ...prev,
            [day]: {
                ...prev[day],
                [slot]: !prev[day][slot], // Toggle the specific slot's availability
            },
        }));
    };
    const handleSubmit2 = () => {
        console.log("User Availability:", availability);
    };

    return (
        <div className='pt-10 rounded-lg mt-10 px-4 lg:px-14 bg-[#FFFBFB]'>
            <div className='w-full flex items-center justify-center'>
                <Image src={"/Images/drop-resume-icon.png"} width={35} height={35} alt="icon" className='mb-7 -mr-1' />
                <h2 className='text-4xl font-semibold font-caveat'>Please complete the form below!</h2>
            </div>
            <div className='mt-3 '>
                <div className=" mx-auto">
                    <form onSubmit={handleSubmit} className="">
                        <div className=' flex items-center gap-3'>
                            <span className=' w-6 h-6 p-2 font-architects bg-yellow rounded-full flex items-center justify-center font-extrabold'>01.</span>
                            What interests you about joining our team? Please also share any unique skills or experiences from your resume that make you a standout candidate.
                        </div>
                        <textarea
                            placeholder={`Hi [Hiring Manager's Name],

I'm {{JS First Name}} and am reaching out to express my interest in joining your team. With [number] years of experience in [your field or industry], I am confident that my skills would be a great fit for your team.
                            
I've attached my resume for your review and would love to discuss how my background aligns with your needs.
                            
Thank you for considering my application.                            
Best regards,
[Your Name]`}
                            className="w-full h-64 p-4 border rounded resize-none text-sm"
                            value={letter}
                            onChange={(e) => setLetter(e.target.value)}
                        />
                        <div className=' flex items-center gap-3'>
                            <span className=' w-6 h-6 p-2 font-architects bg-yellow rounded-full flex items-center justify-center font-extrabold'>02.</span>
                            My availability
                        </div>
                        <div className="lg:w-[60%] space-y-6 lg:pl-7">
                            <div className="w-full overflow-x-auto overflow-y-hidden h-full">
                                <table className="w-full min-w-[600px] text-sm text-[#1A212B] border-spacing-y-2 border-separate">
                                    <thead>
                                        <tr>
                                            <th className="font-medium p-2 bg-white flex justify-start items-center rounded-l whitespace-nowrap">
                                                <div
                                                    className="w-4 h-4 cursor-pointer border-[1.7px] border-gray-700 rounded relative flex items-center justify-center mr-2"
                                                    onClick={(e) => handleAllToggle(!Object.values(availability).every((day) =>
                                                        Object.values(day).every((isAvailable) => isAvailable)
                                                    ))}
                                                >
                                                    {Object.values(availability).every((day) =>
                                                        Object.values(day).every((isAvailable) => isAvailable)
                                                    ) && (
                                                            <Check
                                                                className="text-gray-700"
                                                                size={12}
                                                                strokeWidth={3}
                                                            />
                                                        )}
                                                </div>
                                                All
                                            </th>

                                            {timeSlots.map((slot, index) => (
                                                <th key={slot} className={`font-medium p-2 bg-white ${index === timeSlots.length - 1 ? 'rounded-r' : ''} whitespace-nowrap`}>
                                                    {slot}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {days.map((day) => (
                                            <tr key={day}>
                                                <td className="bg-white font-medium p-2 rounded-l whitespace-nowrap">{day}</td>
                                                {timeSlots.map((slot, index) => (
                                                    <td
                                                        key={slot}
                                                        className={`bg-white p-2 text-center cursor-pointer ${index === timeSlots.length - 1 ? 'rounded-r' : ''}`}
                                                        onClick={() => handleSlotToggle(day, slot)}
                                                    >
                                                        <AnimatePresence mode="wait">
                                                            {availability[day][slot] ? (
                                                                <motion.div
                                                                    key="tick"
                                                                    initial={{ scale: 0, rotate: -180 }}
                                                                    animate={{ scale: 1, rotate: 0 }}
                                                                    exit={{ scale: 0, rotate: 180 }}
                                                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                                                >
                                                                    <Image
                                                                        src={`/Images/${slot.toLowerCase()}-tick.png`}
                                                                        alt={`${slot} tick`}
                                                                        width={20}
                                                                        height={20}
                                                                        className="mx-auto"
                                                                    />
                                                                </motion.div>
                                                            ) : (
                                                                <motion.div
                                                                    key="untick"
                                                                    initial={{ scale: 0, rotate: -180 }}
                                                                    animate={{ scale: 1, rotate: 0 }}
                                                                    exit={{ scale: 0, rotate: 180 }}
                                                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                                                >
                                                                    <Image
                                                                        src={`/Images/${slot.toLowerCase()}-untick.png`}
                                                                        alt={`${slot} untick`}
                                                                        width={20}
                                                                        height={20}
                                                                        className="mx-auto"
                                                                    />
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-blue-500 rounded-lg"
                            >
                                Submit Availability
                            </button>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 tex p-2 rounded hover:bg-blue-600">
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Section1
