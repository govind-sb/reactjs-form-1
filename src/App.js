import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

const [name, setName] = useState("");
const [fullName, setFullName] = useState("");

const inputEvent = (e) =>{
  console.log(e.target.value)
  setName(e.target.value)
}

const onSubmit = (e) =>{
  setFullName(name)
 
}

  return (
    <div className="form_container">
        <form>
            <h1>React Js Form</h1>
            <div className="text-field">
                <h5> {fullName}</h5>
            </div>
            <div className="form-field">
                <input type="text" placeholder="Type Your Name" onChange={inputEvent} value={name}/>
            </div>
            <div className="form-field" style={{textAlign:"center"}}>
                <button className="btn" type="button" onClick={onSubmit}>Click Me</button>
            </div>
        </form>


    </div>
  );
}

export default App;
