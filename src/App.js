import React from "react";
import"./App.css"
 import { useState,useEffect,useRef } from "react";
 const App =()=>{
    const [count,setCount]=useState(0)
    const [state,setState]=useState(false)
    const buttonElement = useRef(null);
 useEffect(()=>{
    let counter=""
    if(state){
        counter =setInterval(()=>{ 
            setCount((prevCount)=>prevCount+1)},500)
            
    }
     return()=>clearInterval(counter)
  },[state])
  
  const startButton=()=>{
   
    buttonElement.current.disabled=true


    setState(true)
  }
  const stopButton=()=>{
    buttonElement.current.disabled=false
    setState(false)
  }

    return(
        <>
        <p>Count:{count}</p>
        <button id="btn" ref={buttonElement} onClick={()=>{startButton()}}>Start</button>
        <button  onClick={()=>{stopButton()}}>Stop</button>
        </>
    )
   
 } 
 export default App;