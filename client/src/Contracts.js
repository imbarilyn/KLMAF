import React,  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Contracts() {
  const [columns, setColumns] = useState ([]);
  const [records, setRecords] = useState([]);



  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res =>{
      setColumns(Object.keys(res.products[0]))
      //console.log(Object.keys(res.products[1]))
      setRecords(res.products)
    })
  }, [])
  return (
    <div className='main-content'>
      <div className='search-tab'>
        <h6>search <input type='search' style={{border:"1px solid black", height:"30px"}}/></h6>
      </div>
      <div className='add-contract'>
        <Link to = "/create"><button type="button" className="btn btn-success">Add+</button></Link>
      </div>
      <div className='Contracts-display'>
            <table className="table table-striped table-hover mt-5">
              <thead>
                <tr>
                {
                    columns.map((c, i)=>{
                      return <th scope="col"key = {i}>{c}</th>
                      // console.log(c)
                    })                   
                  }
                </tr>
              </thead>
              <tbody>
                {
                  records.map((r, j)=>{
                    // console.log(r.title)
                    return <tr key ={j}>
                      <td>{r.id}</td>
                      <td>{r.title}</td>
                      <td>{r.description}</td>
                      <td>{r.price}</td>
                      <td>{r.discountPercentage}</td>
                      <td>{r.rating}</td>
                      <td>{r.stock}</td>
                      <td>{r.brand}</td>
                      <td>{r.category}</td>
                      <td>{r.thumbnail}</td>
                      <td>{r.images}</td>
                    </tr>
                  })
                }
                <tr>
                             
                </tr>   
              </tbody>
            </table>
      </div>     
    </div>
  )
}

export default Contracts