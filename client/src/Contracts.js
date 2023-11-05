import React,  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contracts.css'



function Contracts() {
  // const [columns, setColumns] = useState ([]);
  const [records, setRecords] = useState([]);



  useEffect(()=>{
    fetch("/contracts")
    .then(res => res.json())
    .then(res => {
      // setColumns(Object.keys(res.contracts[0]))
      // console.log(Object.keys(res.products[1]))
      setRecords(res)
      console.log(res)
    })
  }, [])
  return (
    <div className='main-content'>
      <div className='contracts-top'>
          <div className='search-tab'>
            <h6>search <input type='search' style={{border:"1px solid black", height:"30px"}}/></h6>
          </div>
          <br></br>
          <div className='add-contract'>
            <Link to = "/create"><button type="button" className="btn btn-success">Add+</button></Link>
          </div>
      </div>

      <div className='Contracts-display'>
            <table className="table table-striped table-hover mt-5">
              <thead>
                <tr>                
                  <th>No.</th>
                  <th>Contract Name</th>   
                  <th>Expiry Date</th>
                  <th>Country</th>                          
                </tr>
              </thead>
              <tbody>              
                {
                  records.map((r, j)=>{
                    // console.log(r.title)
                    return <tr key ={j}>
                      <td>{r.id}</td>
                      <td>{r.name}</td>
                      <td>{r.expirydate}</td>
                      <td>{r.country}</td>                      
                    </tr>
                  })
                }                                      
                
              </tbody>
            </table>
      </div>     
    </div>
  )
}

export default Contracts