import React from 'react'
import Contracts from './Contracts'
import { Link } from 'react-router-dom';

function ContractContainer({ passContracts}) {
    const contractDisplay = passContracts.map(contracts =>(
        <Contracts
         key = {contracts.id}
         contract = {contracts}
        />
    ));

    // passContracts.map(contracts =>{
    //     console.log(contracts.name)
    // })
  
  return (
    <div>
          <div className='contracts-top'>
          <div className='search-tab'>
            <h6>search <input type='search' style={{border:"1px solid black", height:"30px"}}/></h6>
          </div>
          <br></br>
          <div className='add-contract'>
            <Link to = "/create"><button type="button" className="btn btn-success">Add+</button></Link>
          </div>
      </div>
        {contractDisplay}
        
    </div>
  )
}

export default ContractContainer