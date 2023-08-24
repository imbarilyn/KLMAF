import React from 'react'
import LocalAirportIcon from '@mui/icons-material/LocalAirport';

import './Home.css'

function Home() {
  return (
    <div className='body_content' style={{background: "./photos/background_klm.jpg"}}>
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

        <div className='hero_content'>
            <div className='hero_content_right'>
                <h1>Contract Management System</h1>
                <p>Welcome to Air France KLM contract management system. Below are contract expiring soon, you may give a look at them. You can also download the contracts by a click at the button. Enjoy you stay around!</p>
            </div>
            <div className='expiry_alert_content'>
                <li>The Lazizi Premiere</li>
                <li>Samco Holdings</li>
                <li>General Freighters</li>
            </div>
        </div>
        
        <div className='footer_copyright'>
            <small>&copy;KLM Air France. All rights reserved.</small>
        </div>
    </div>
  )
}

export default Home