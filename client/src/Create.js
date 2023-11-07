import React, { useState}from 'react'
import './Create.css';
import { Link } from 'react-router-dom';
// import travel from './photos/createbg.png'

export default function Create({addContract}) {
 const [formData, setFormData] = useState({
  name: "",
  expirydate: "",
  country: ""
 });
  // e.preventDefault();
  const submitHandler = (e)=>{    
    e.preventDefault();
    fetch("/contracts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          formData({
            name: "",
            expirydate: "",
            country: ""
          })
        }
      )
    })
    .then(res => res.json())
    .then(newrecord => addContract(addContract(newrecord)))
  }

  function handleChange(e){
    setFormData({
      ...formData,
      [e.FormData.name]: formData.value,
      [e.formData.expirydate]: formData.expirydate,
      [e.FormData.country]: formData.country
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
                  value={formData.name}
                  onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputCountry">Expiry Date</label>
            <input 
                  type="date"
                  className="form-control" 
                  id="exampleInputExpiryDate" 
                  value = {formData.expirydate}
                  onChange ={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEpiryDate">Country</label>
            <input
                  type="country"
                  class="form-control" 
                  id="exampleInputCountry"
                  value = {formData.country}
                  onChange ={handleChange}
              />
          </div>  <Link to ="/contractscontainer">       
          <button type="submit" class="btn btn-primary" >Submit</button>
          </Link>
      </form>

    </div>
  )
}
