import React, { useState }  from 'react'
import LocalAirportIcon from '@mui/icons-material/LocalAirport';


function Login(props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    
        const handleSubmit = (e) =>{
            e.preventDefault();
            console.log(email);
           
        } 
  return (   
    <div className='container-form'>
        <h2>Air France KLM <LocalAirportIcon style={{fontSize:"2rem"}}/></h2>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className='register-form'>
            <label>Email</label>
            <input for ="email" value={email}  onChange = {(e) =>setEmail(e.target.value)} type='email' name='email' placeholder='joe@gmail.com'/>
            <label>Password</label>
            <input  for = "password" value = {pass} onChange={(e) => setPass(e.target.value)} type='password' name='password'  placeholder='*******'/>
            <button  className = "submit-btn"  type='submit'>Submit</button>
        </form>                
        <button  className="switch-form-btn" onClick={()=> props.currentForm("reg")}>Don't have an account? Create one for yourself</button>        
    </div>
  )
}

export default Login