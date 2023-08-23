import React from 'react'

function Home() {
  return (
    <div style={{background: "./photos/background_klm.jpg"}}>
        <div className='navbar_container'>
            <nav className='navbar_left'>
                <li>logo</li>
            </nav>
            <nav className='navbar_right'>
                <li>Contracts</li>
                <li>user</li>
                <li>Log out</li>
            </nav>
        </div>
        <div>
            <h1>Contract Management System</h1>
            <p>Welcome to Air France KLM contract management system. Below are contract expiring soon, you may give a look at them. You can also download the contracts by a click at the button. Enjoy you stay around!</p>
        </div>
    </div>
  )
}

export default Home