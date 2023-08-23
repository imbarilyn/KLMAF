import React, {useState} from 'react'
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import "./login.css"

function Reg(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formHandler = (e) => {
    e.preventDefault();
    console.log(email);

  }
  return (
    <div className='container-form'>
     <h2>Air France KLM <LocalAirportIcon style ={{fontSize: "2rem"}}/></h2>
     <h2>Register</h2>
      <form onSubmit={formHandler} className='register-form'>
        <label >Email</label>
        <input for='email' value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='joe@klm.com' type='email'/>
        <label>Password</label>
        <input for='password' type='password' placeholder='*********'/>
        <label>Confirm Password</label>
        <input name='password' value ={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='*********'/>
        <button  className = "submit-btn" type='submit'>submit</button>
      </form>
      <button className="switch-form-btn" onClick={()=>props.currentForm("login")}>I already have an account</button>
    </div>
  )
}

export default Reg