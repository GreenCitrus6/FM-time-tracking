import Image from 'next/image'
import UserCard from './usercard'
import TrackingCard from './trackingcard'

export default function Home() {
  return (
    <main className="font-Rubik font-light text-gray-100 m-6 grid grid-cols-1 sm:grid-cols-2">
      <div id="userCardContainer" className="mb-6">
        <UserCard />
      </div>

      <div id="trackingCardsContainer" className="grid grid-cols-1">
        <TrackingCard />
        <TrackingCard />
        <TrackingCard />
        <TrackingCard />
        <TrackingCard />
        <TrackingCard />
      </div>
  
      <div id="attribution">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. </p>
        <p>Coded by <a href="#">Your Name Here</a>. </p>
      </div>
    </main>
  )
}
