import React, { forwardRef, useImperativeHandle, useState } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type TimeSlot = "Morning" | "Afternoon" | "Evening" | "OverNight";
type Day = "Mon" | "Tues" | "Wed" | "Thur" | "Sat" | "Fri" | "Sun";

type Availability = Record<Day, Record<TimeSlot, boolean>>;

interface Payload {
    letter: string;
    followBusinessName: boolean;
    availability: Availability;
}

interface FormRef {
    submit: () => void;
}

const Section1 = forwardRef<FormRef>((props, ref) => {
    const [letter, setLetter] = useState<string>("");
    const [isChecked, setIsChecked] = useState(false);
    const [submitted, setSubmitted] = useState<Payload[]>([]);
    console.log("submitted data:::", submitted)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload: Payload = {
            letter,
            followBusinessName: isChecked,
            availability,
        };

        // console.log(JSON.stringify(payload));
        setSubmitted((prev) => [...prev, payload]);
    };

    // Expose the submit function to parent
    useImperativeHandle(ref, () => ({
        submit: () => {
            const payload: Payload = {
                letter,
                followBusinessName: isChecked,
                availability,
            };
            setSubmitted((prev) => [...prev, payload]);
        }
    }));

    const days: Day[] = ["Mon", "Tues", "Wed", "Thur", "Sat", "Fri", "Sun"];
    const timeSlots: TimeSlot[] = ["Morning", "Afternoon", "Evening", "OverNight"];

    // Initialize availability state
    const [availability, setAvailability] = useState<Availability>(
        days.reduce((acc, day) => {
            acc[day] = timeSlots.reduce((slotAcc, slot) => {
                slotAcc[slot] = false; // Initially, all slots are unavailable
                return slotAcc;
            }, {} as Record<TimeSlot, boolean>);
            return acc;
        }, {} as Availability)
    );

    const handleAllToggle = (isChecked: boolean) => {
        setAvailability(
            days.reduce((acc, day) => {
                acc[day] = timeSlots.reduce((slotAcc, slot) => {
                    slotAcc[slot] = isChecked; // Set all slots for all days to isChecked
                    return slotAcc;
                }, {} as Record<TimeSlot, boolean>);
                return acc;
            }, {} as Availability)
        );
    };

    const handleSlotToggle = (day: Day, slot: TimeSlot) => {
        setAvailability((prev) => ({
            ...prev,
            [day]: {
                ...prev[day],
                [slot]: !prev[day][slot], // Toggle the specific slot's availability
            },
        }));
    };

    const handleCheckboxToggle = () => {
        setIsChecked((prev) => !prev);
    };

    return (
        <div className='pt-6 md:pt-10 pb-7 rounded-lg mt-8 md:mt-10 px-1.5 md:px-4 lg:px-14 bg-[#FFFBFB]'>
            <div className='w-full flex items-center justify-center'>
                <Image src={"/Images/drop-resume-icon.png"} width={35} height={35} alt="icon" className='mb-10 -mr-4 hidden md:block' />
                <h2 className='text-3xl md:text-4xl font-semibold font-caveat text-center relative px-2'>Please complete the form below!</h2>
            </div>
            <div className='mt-6 md:mt-3'>
                <div className=" mx-auto">
                    <form onSubmit={handleSubmit} className="">
                        <div className=' flex items-center gap-3'>
                            <span className=' w-7 h-7 p-3.5 font-architects bg-yellow rounded-full flex items-center justify-center font-extrabold'>01.</span>
                            What interests you about joining our team? Please also share any unique skills or experiences from your resume that make you a standout candidate.
                        </div>
                        <textarea
                            placeholder={`Hi [Hiring Manager's Name],

I'm {{JS First Name}} and am reaching out to express my interest in joining your team. With [number] years of experience in [your field or industry], I am confident that my skills would be a great fit for your team.
                            
I've attached my resume for your review and would love to discuss how my background aligns with your needs.
                            
Thank you for considering my application.                            
Best regards,
[Your Name]`}
                            className="w-[92%] xl:w-[98%] border-[#66666659] rounded-xl h-[20rem] md:h-[16.2rem] mx-7 lg:mx-10 mt-2 md:mt-1 py-2 pr-2.5 xl:pr-[35vw] pl-2.5 md:pl-4 border resize-none text-sm outline-none"
                            value={letter}
                            onChange={(e) => setLetter(e.target.value)}
                        />
                        <div className=' flex items-center gap-3 mt-3'>
                            <span className=' w-7 h-7 p-3.5 font-architects bg-yellow rounded-full flex items-center justify-center font-extrabold'>02.</span>
                            My availability
                        </div>
                        <div className="xl:w-[60%] pl-7 lg:pl-10">
                            <div className="w-full overflow-x-auto overflow-y-hidden h-full">
                                <table className="w-full min-w-[400px] text-sm text-[#1A212B] border-spacing-y-2 border-separate -mt-1 md:-mt-2">
                                    <thead>
                                        <tr>
                                            <th className="font-medium p-2 bg-white flex justify-start items-center rounded-l whitespace-nowrap">
                                                <div
                                                    className="w-4 h-4 cursor-pointer border-[1.7px] border-gray-700 rounded relative flex items-center justify-center mr-2"
                                                    onClick={() => handleAllToggle(!Object.values(availability).every((day) =>
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
                        </div>
                        <div>
                            <div className="flex items-center mt-3 text-[#333333] w-full">
                                <div
                                    className={`min-w-4 min-h-4 w-4 h-4 cursor-pointer border-[1.7px] border-gray-700 ${isChecked ? "bg-black" : ""
                                        } rounded-sm relative flex items-center justify-center mr-2`}
                                    onClick={handleCheckboxToggle}
                                >
                                    {isChecked && (
                                        <Check className="text-white" size={14} strokeWidth={3} />
                                    )}
                                </div>
                                <span>Do you want to follow <b className='font-semibold'>[Business Name]</b> to receive job alerts?</span>
                                <Image src={"/Images/hand.png"} width={16} height={16} alt='' className='ml-1.5 md:ml-3'/>
                            </div>
                        </div>
                        {/* <button type="submit" className="w-full bg-red tex p-2 rounded hover:bg-blue-600">
                            Submit
                        </button> */}
                    </form>
                </div>
            </div>
        </div>
    )
})

Section1.displayName = "Section1";

export default Section1
