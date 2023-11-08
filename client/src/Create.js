import React, { useState}from 'react'
import './Create.css';
import { useNavigate } from 'react-router-dom';
// import travel from './photos/createbg.png'

export default function Create({addContract}) {
 const [formData, setFormData] = useState({
  name: "",
  expirydate: Date,
  country: ""
 });

 const navigate = useNavigate()
  // e.preventDefault();
  const submitHandler = (e)=>{    
    e.preventDefault();
    fetch("/contracts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)      
    })
    .then(resp => resp.json())
    .then(data=> {
      setFormData({
      name: "",
      expirydate: Date,
      country: "",
    });
    addContract(data)
    alert("Contract added successfully!");
    navigate("/contracts");
  })
}
  // console.log(name) 

  return (
    <div className = "create-contract-form">
      <form onSubmit = {submitHandler}>
          <div className="form-group">
            <label htmlFor="exampleInputName">Contract Name</label>
            <input 
                  type="text" 
                  className="form-control" 
                  id="exampleInputName" 
                  placeholder="Enter contract name" 
                  
                  onChange={(e)=>setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputCountry">Expiry Date</label>
            <input 
                  type="date"
                  className="form-control" 
                  id="exampleInputExpiryDate" 
                  onChange ={(e)=>setFormData({...formData, expirydate:e.target.expirydate})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEpiryDate">Country</label>
            <input
                  type="country"
                  class="form-control" 
                  id="exampleInputCountry"
                  onChange ={(e)=>setFormData({...formData, country:e.target.value})}
              />
          </div>      
          <button type="submit" class="btn btn-primary" >Submit</button>
          
      </form>

    </div>
  )
}
