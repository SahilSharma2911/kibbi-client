import React from 'react'
import { ChevronRight } from 'lucide-react'

const Filter = () => {
    return (
        <div className='flex gap-3 md:gap-5 lg:gap-7 items-center overflow-x-auto my-4 md:my-6 font-medium 
            whitespace-nowrap pb-2 scrollbar-hide'>
            <div className='flex items-center gap-2 border border-gray-300 w-[140px] sm:w-[160px] md:w-[12rem] 
                px-2 py-1.5 md:py-2 rounded-lg cursor-pointer hover:border-gray-400 transition-colors 
                flex-shrink-0'>
                <ChevronRight size={18} className="text-gray-500" />
                <span className="text-gray-700 text-sm md:text-base">City</span>
            </div>

            <div className='flex items-center gap-2 border border-gray-300 w-[140px] sm:w-[160px] md:w-[12rem] 
                px-2 py-1.5 md:py-2 rounded-lg cursor-pointer hover:border-gray-400 transition-colors 
                flex-shrink-0'>
                <ChevronRight size={18} className="text-gray-500" />
                <span className="text-gray-700 text-sm md:text-base">Location</span>
            </div>

            <div className='flex items-center gap-2 border border-gray-300 w-[140px] sm:w-[160px] md:w-[12rem] 
                px-2 py-1.5 md:py-2 rounded-lg cursor-pointer hover:border-gray-400 transition-colors 
                flex-shrink-0'>
                <ChevronRight size={18} className="text-gray-500" />
                <span className="text-gray-700 text-sm md:text-base">Job Type</span>
            </div>

            <div className='flex items-center gap-2 border border-gray-300 w-[140px] sm:w-[160px] md:w-[12rem] 
                px-2 py-1.5 md:py-2 rounded-lg cursor-pointer hover:border-gray-400 transition-colors 
                flex-shrink-0'>
                <ChevronRight size={18} className="text-gray-500" />
                <span className="text-gray-700 text-sm md:text-base">Schedule</span>
            </div>

            <div className='flex items-center gap-2 border border-gray-300 w-[140px] sm:w-[160px] md:w-[12rem] 
                px-2 py-1.5 md:py-2 rounded-lg cursor-pointer hover:border-gray-400 transition-colors 
                flex-shrink-0'>
                <ChevronRight size={18} className="text-gray-500" />
                <span className="text-gray-700 text-sm md:text-base">Job Location Type</span>
            </div>
        </div>
    )
}

export default Filter