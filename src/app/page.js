'use client';

import { useState } from 'react';

import Image from 'next/image'
import UserCard from './usercard'
import TrackingCard from './trackingcard'

export default function Home() {
  const [currentTimeFrame, setCurrentTimeFrame] = useState('weekly');

  return (
    <main className="font-Rubik font-light text-gray-100 m-6 md:h-[calc(100vh-3rem)] md:ml-16 md:mr-16 lg:ml-32 lg:mr-32 flex flex-col justify-center ">
      <div id="dashboardCards" className="grid grid-cols-1 gap-5 place-items-center md:grid-cols-4 md:grid-rows-[250px_minmax(250px,_1fr)] ">
        <UserCard setCurrentTimeFrame={setCurrentTimeFrame} currentTimeFrame={currentTimeFrame} />

        <TrackingCard categoryIndex={0} timeFrame={currentTimeFrame} /> {/* Work */}
        <TrackingCard categoryIndex={1} timeFrame={currentTimeFrame}/> {/* Play */}
        <TrackingCard categoryIndex={2} timeFrame={currentTimeFrame}/> {/* Study */}
        <TrackingCard categoryIndex={3} timeFrame={currentTimeFrame}/> {/* Exercise */}
        <TrackingCard categoryIndex={4} timeFrame={currentTimeFrame}/> {/* Social */}
        <TrackingCard categoryIndex={5} timeFrame={currentTimeFrame}/> {/* Self Care */}
      </div>
  
      <div id="attribution" className="mt-2 flex justify-center italic text-gray-400">
        <p className="mr-2">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-neutral-paleBlue active:text-white">Frontend Mentor</a>.</p>
        <p>Coded by <a href="#" className="text-neutral-paleBlue active:text-white">Daniel Aadland</a>. </p>
      </div>
    </main>
  )
}
