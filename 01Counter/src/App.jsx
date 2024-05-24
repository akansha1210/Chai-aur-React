import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0);
  //let counter=5;
  const AddValue=()=>{
    counter=counter+1;
    setCounter(counter);
    
  }
  const RemoveVal=()=>{
    if(counter ==0){
    alert("value can't be in negative")
    }else{
      counter=counter-1;
    }
   setCounter(counter);
  }
  return (
    <>
      <h1>Chai or Code</h1>
      <h2>counter : {counter}</h2>
      <button onClick={AddValue}>Add Value</button>
      <br />
      <button  onClick={RemoveVal}>Remove Value</button>
    </>
  )
}

export default App
