import Login from "./Login";
import Reg from "./Reg";
import React, { useState, useEffect}  from 'react'
import Home from  "./Home";
import {Routes, Route, Link} from 'react-router-dom'
import Contracts from './Contracts'
import Create from './Create'
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import "./Home.css"


function App() {
  const [currForm, setCurr] = useState("login");
  const [records, setRecords] = useState([]);

  useEffect(()=>{
    fetch("/contracts")
    .then(res => res.json())
    .then(setRecords);
    console.log(records)
  }, [])
  function SwitchForms (formName) {
    setCurr(formName);
  }

  function handleAddContract (newrecord){
    const add = {...records, newrecord}
    setRecords(add)
    
  }

  // function passContracts (records) {
  //   console.log (records)

  // }


  return (
    <div className="App">
      {/* {
        currForm === "login"? <Login  currentForm = {SwitchForms}/>: <Reg currentForm = {SwitchForms}/>
      }        */}
      <div className='navbar_container'>
            <nav className='navbar_left'>
                <li><LocalAirportIcon style={{fontSize:"2rem"}}/></li>
            </nav>
            <nav className='navbar_right'>
                <li><Link to ="/contracts"><button>Contracts</button></Link></li>
                <li><button>User</button></li>
                <li><button>Log out</button></li>
            </nav>
        </div>
      <Routes>
        <Route exact path="/" element = {<Home />} />
        <Route exact path="/contracts" element = {<Contracts passContracts={records}/>} />
        {/* <Route exact path = "/contractscontainer" element = {<ContractContainer passContracts={records}/>} /> */}
        <Route exact path="/create" element = {<Create  addContract = {handleAddContract}/>}/>
      </Routes>
    </div>
  );
}

export default App;
