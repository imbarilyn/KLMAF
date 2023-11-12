import React from 'react';
import './Contracts.css'
import { Link } from 'react-router-dom';
// import { RiSearchLine } from 'react-icons/ri';


function Contracts({passContracts}) {
  // const [columns, setColumns] = useState ([]);
  // const [id, name, expirydate, country] =  passContracts 
  
  // const {id, name, expirydate, country} = passContracts
  // console.log({name})
  passContracts.map((record) =>{

  console.log(record)


  })
  return (
    <div className='main-content'>
        <div className='contracts-top'style={{float: "right"}}>
          <div className='search-tab'style={{ marginRight: "10px", marginTop: "4px"}}>
            <label>search  </label><input type='search' style={{border:"1px solid black", height:"30px"}}/>
          </div>
          <br></br>
          <div className='add-contract'>
            <Link to = "/create"><button type="button" className="btn btn-success" style={{float: "right", marginRight: "3px", marginTop: "0px"}}>Add+</button></Link>
          </div>
      </div>
        
      <div className='Contracts-display'>
            <table className="table table-hover">
              <thead>
                <tr>                
                  <th>No.</th>
                  <th>Contract Name</th>   
                  <th>Expiry Date</th>
                  <th>Country</th>  
                  <th>Action</th>                        
                </tr>
              </thead>
              <tbody> 
                {
                  passContracts.map((i, j) =>(
                    <tr>             
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.expirydate}</td>
                    <td>{i.country}</td> 
                    <td>
                      <button  type="button" class="btn btn-outline-primary" style={{margin: "4px"}}>Update</button>
                      <button type="button" class="btn btn-outline-danger">Delete</button>
                    </td>
                  </tr>

                  )
                  )
                 
                }
             
                
              </tbody>
            </table>
      </div>     
    </div>
  )
}

export default Contracts