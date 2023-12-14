import Image from 'next/image'
import UserCard from './usercard'
import TrackingCard from './trackingcard'

export default function Home() {
  return (
    <main className="font-Rubik font-light text-gray-100 m-6 grid grid-cols-1 sm:grid-cols-2">
      <div id="userCardContainer" className="mb-6">
        <UserCard />
      </div>

      <div id="trackingCardsContainer" className="grid grid-cols-1 gap-5">
        <TrackingCard categoryIndex={0} timeFrame="weekly" /> {/* Work */}
        <TrackingCard categoryIndex={1} timeFrame="weekly"/> {/* Play */}
        <TrackingCard categoryIndex={2} timeFrame="weekly"/> {/* Study */}
        <TrackingCard categoryIndex={3} timeFrame="weekly"/> {/* Exercise */}
        <TrackingCard categoryIndex={4} timeFrame="weekly"/> {/* Social */}
        <TrackingCard categoryIndex={5} timeFrame="weekly"/> {/* Self Care */}
      </div>
  
      <div id="attribution">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. </p>
        <p>Coded by <a href="#">Your Name Here</a>. </p>
      </div>
    </main>
  )
}
