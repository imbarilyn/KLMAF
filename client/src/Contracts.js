import React from 'react';
import './Contracts.css'
// import { RiSearchLine } from 'react-icons/ri';


function Contracts({contract}) {
  // const [columns, setColumns] = useState ([]);
  // const [id, name, expirydate, country] =  passContracts 
  
  const {id, name, expirydate, country} = contract
  // console.log({name})
  
  // console.log(passContracts)

  return (
    <div className='main-content'>
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
                <tr>             
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{expirydate}</td>
                  <td>{country}</td> 
                </tr>
                
              </tbody>
            </table>
      </div>     
    </div>
  )
}

export default Contracts