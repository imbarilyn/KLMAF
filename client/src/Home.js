import React from 'react'
import LocalAirportIcon from '@mui/icons-material/LocalAirport';

import './Home.css'

function Home() {
  return (
    <div style={{background: "./photos/background_klm.jpg"}}>
        <div className='navbar_container'>
            <nav className='navbar_left'>
                <li><LocalAirportIcon style={{fontSize:"2rem"}}/></li>
            </nav>
            <nav className='navbar_right'>
                <li><button>Contracts</button></li>
                <li><button>User</button></li>
                <li><button>Log out</button></li>
               
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