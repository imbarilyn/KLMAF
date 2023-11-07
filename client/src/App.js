import Login from "./Login";
import Reg from "./Reg";
import React, { useState, useEffect}  from 'react'
import Home from  "./Home";
import {Routes, Route} from 'react-router-dom'
import Contracts from './Contracts'
import Create from './Create'
import ContractContainer from "./ContractContainer";


function App() {
  const [currForm, setCurr] = useState("login");
  const [records, setRecords] = useState([]);

  useEffect(()=>{
    fetch("/contracts")
    .then(res => res.json())
    .then(res => {
      // setColumns(Object.keys(res.contracts[0]))
      // console.log(Object.keys(res.products[1]))
      setRecords(res)
      // console.log(res)
      // passContracts()

    })
  }, [])
  function SwitchForms (formName) {
    setCurr(formName);
  }

  function handleAddContract (newrecord){
    const addContract = [...records, newrecord]
    setRecords(addContract)
    
  }

  // function passContracts (records) {
  //   console.log (records)

  // }


  return (
    <div className="App">
      {/* {
        currForm === "login"? <Login  currentForm = {SwitchForms}/>: <Reg currentForm = {SwitchForms}/>
      }        */}
      <Routes>
        <Route exact path="/" element = {<Home />} />
        {/* <Route exact path="/contracts" element = {<Contracts/>} /> */}
        <Route exact path = "/contractscontainer" element = {<ContractContainer passContracts={records}/>} />
        <Route exact path="/create" element = {<Create  addContract = {handleAddContract}/>}/>
      </Routes>
    </div>
  );
}

export default App;
