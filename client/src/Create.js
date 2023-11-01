import React from 'react'
import './Create.css';
// import travel from './photos/createbg.png'

export default function Create(e) {
  // e.preventDefault();
  const submitHandler = (e)=>{
    
  }

  return (
    <div className = "create-contract-form">
      <form onSubmit = {submitHandler()}>
          <div class="form-group">
            <label for="exampleInputName">Contract Name</label>
            <input type="text" class="form-control" id="exampleInputName" placeholder="Enter contract name" />
          </div>
          <div class="form-group">
            <label for="exampleInputCountry">Country</label>
            <input type="text" class="form-control" id="exampleInputCountry" placeholder="Enter country"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEpiryDate">Expiry Date</label>
            <input type="date" class="form-control" id="exampleInputExpiryDate" placeholder="Enter expiry date"/>
          </div>
         
          <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}
