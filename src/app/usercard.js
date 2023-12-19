'use client';

import Image from "next/image"
import profilePic from "../../public/images/image-jeremy.png"


export default function UserCard({ setCurrentTimeFrame, currentTimeFrame }) {
    function handleSetTimeframe(newTimeFrame) {
        setCurrentTimeFrame(newTimeFrame);
    }

    return(
        <section className="bg-neutral-darkBlue rounded-xl overflow-hidden h-40 w-full max-w-[25rem] md:row-span-2 md:h-full">
            <div className="userContainer bg-primary-blue rounded-xl flex flex-row justify-center items-center h-[7rem] 
            md:h-[20rem] md:flex-col md:justify-start md:items-start md:pl-4 md:pt-[2rem]">
                <Image 
                    src={profilePic}
                    width="auto"
                    alt="Profile Picture"
                    priority="low"
                    className="border-[3px] w-[75px] border-gray-100 rounded-full md:ml-4 md:mb-12 md:w-[80px]"
                />

                <div className="nameContainer pl-4">
                    <p className="text-xs font-thin pb-1">  
                        Report for
                    </p>
                    <h1 className="pr-2 text-xl lg:text-3xl xl:text-[2.5rem] lg:leading-tight">
                        Jeremy Robson
                    </h1>
                </div>
            </div>
            <div className="flex justify-between items-center h-[calc(100%-7rem)] ml-4 mr-4  font-normal 
            md:h-[calc(100%-20rem)] md:pl-4 md:flex-col md:justify-center md:items-start">
                    <span className={"w-1/3 text-center hover:text-gray-100 hover:cursor-pointer transition ease-out duration-350 md:pb-2 md:pt-2 md:text-left" + (currentTimeFrame === 'daily' ? ' text-gray-100' : ' text-neutral-desaturatedBlue') } onClick={ () => handleSetTimeframe('daily') }>Daily</span>
                    <span className={"w-1/3 text-center hover:text-gray-100 hover:cursor-pointer transition ease-out duration-350 md:pb-2 md:pt-1 md:text-left" + (currentTimeFrame === 'weekly' ? ' text-gray-100' : ' text-neutral-desaturatedBlue') } onClick={ () => handleSetTimeframe('weekly') }>Weekly</span>
                    <span className={"w-1/3 text-center hover:text-gray-100 hover:cursor-pointer transition ease-out duration-350 md:pb-2 md:pt-1 md:text-left" + (currentTimeFrame === 'monthly' ? ' text-gray-100' : ' text-neutral-desaturatedBlue') } onClick={ () => handleSetTimeframe('monthly') }>Monthly</span>
            </div>
        </section>
    )
}