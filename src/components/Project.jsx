import React from 'react'
// import codingShuttle from '../assets/coding-shuttle.png'
import noteKeeper from '../assets/note-keeper.png'
export default function Project() {
  return (
    <div className='project'>
        <div className="left">
            <img src={noteKeeper} alt="" />
        </div>
        <div className="right">
            <h2>NOTE KEEPER</h2>
            <p>
                Coding Shuttle is a web application that allows users to book a
                shuttle for a coding trip. Users can book a shuttle for a coding
                trip by selecting a location and selecting a date. Once the
                shuttle is booked, the user will be redirected to a confirmation
                page where the user can confirm the booking. Once the user
                confirms the booking, the user will be redirected to a thank you
                page where the user will be notified of their booking.
            </p>
            <a href="https://github.com/mriduldevelops/Note-Keeper" target='_blank'>
            <button>VIEW CODE</button>
            </a>
            <a href="https://github.com/mriduldevelops/Note-Keeper" target='_blank'>
            <button>VISIT SITE</button>
            </a>
        </div>
    </div>
  )
}
