import Login from "./Login";
import Reg from "./Reg";
import React, { useState }  from 'react'
import Home from  "./Home";
import {Routes, Route} from 'react-router-dom'


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
      <Home />
    </div>
  );
}

export default App;
