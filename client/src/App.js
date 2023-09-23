import Login from "./Login";
import Reg from "./Reg";
import React, { useState }  from 'react'
import Home from  "./Home";
import {Routes, Route} from 'react-router-dom'
import Contracts from './Contracts'
import Create from './Create'


function App() {
  const [currForm, setCurr] = useState("login")
  function SwitchForms (formName) {
    setCurr(formName);
    

  }
  return (
    <div className="App">
      {/* {
        currForm === "login"? <Login  currentForm = {SwitchForms}/>: <Reg currentForm = {SwitchForms}/>
      }       */}
      <Routes>
        <Route exact path="/" element = {<Home />} />
        <Route exact path = "/contracts" element = {<Contracts />} />
        <Route exact path="/create" element = {<Create />}/>
      </Routes>
    </div>
  );
}

export default App;
