import React,  { useState, useEffect } from 'react';



function Contracts() {
  const [columns, setColumns] = useState ([]);
  const [records, setRecords] = useState([]);



  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res =>{
      setColumns(Object.keys(res.products[0]))
      // console.log(res.products)
      setRecords(res.products)
    })
  }, [])
  return (
    <div className='main-content'>
      <div className='search-tab'>
        <h6>search <input type='search' style={{border:"1px solid black", height:"30px"}}/></h6>
      </div>
      <div className='add-contract'>
        <button type="button" class="btn btn-success">Add+</button>
      </div>
      <div className='Contracts-display'>
            <table class="table table-striped table-hover mt-5">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Country</th>
                  <th scope="col">Expiry date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {
                    
                  }
                  <th scope="row"></th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>   
              </tbody>
            </table>
      </div>     
    </div>
  )
}

export default Contracts