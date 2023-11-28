import React from 'react'
import './HomePage.css'
import ConferenceRoomCard from '../../components/ConferenceRoomCard/ConferenceRoomCard'


function HomePage() {
  return (
    <div className='home-container'>
        <h1>Conference Rooms Available</h1>
            <ConferenceRoomCard/>
        </div>

  )
}

export default HomePage