import React from 'react'
import UserNavbar from '../user-components/UserNavbar'
import './UserCalendar.css'

function UserCalendar() {
    return (
      <div className="wrapper">
        <main className="main">
          <div className="right-bar">
            <div className="header">Schedule</div>
            <div className="right-content">
              <div className="task-box yellow">
                <div className="description-task">
                  <div className="time">08:00 - 09:00 AM</div>
                  <div className="task-name">Product Review</div>
                </div>
                <div className="more-button"></div>
                <div className="members">
                  <img
                    src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                    alt="member"></img>
                  <img
                    src="https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&auto=format&fit=crop&w=2210&q=80"
                    alt="member-2"></img>
                  <img
                    src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                    alt="member-3"></img>
                  <img
                    src="https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                    alt="member-4"></img>
                </div>
              </div>
              </div>
          </div>
        </main>
        <UserNavbar />
      </div>
    )
}

export default UserCalendar
