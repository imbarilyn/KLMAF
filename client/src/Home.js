import React from 'react'
import background from './photos/aeroplane.jpg'
import background2 from "./photos/background_klm.jpg"
import { Link } from 'react-router-dom';



import './Home.css'

function Home() {
  return (
    <div className='body_content'>
        
        <div className='hero_content' style={{backgroundImage: `url(${background2})`,height:"90vh", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <div className='hero_content_right'>
                <h1>Contract Management System</h1>
                <p>See expired contracts</p>
            </div>
            <div>
                <button className='expired_contracts'>Expired conracts</button>
            </div>
        </div>
        
        <div className='footer_copyright'>
            <small>&copy;KLM Air France. All rights reserved.</small>
        </div>
    </div>
  )
}

export default Home