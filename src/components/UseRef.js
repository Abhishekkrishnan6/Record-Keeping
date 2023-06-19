import React from 'react'
import { useState,useEffect,useRef } from 'react'

const UseRef = () => {
    const[input,setinput] = useState("");
    const[data,setdata] = useState(0);
    const counter = useRef(0);
    const prevstate = useRef("");
    const inputField = useRef();
    //store previoyus state useref is used
    useEffect(()=>{
        // setdata(data+1);
        counter.current = counter.current+1;
        prevstate.current = input;
    },[input])
    const formHandler =(e)=>{
        setinput(e.target.value);
    }
    const clickHandler =()=>{
        // console.log(inputField.current.value)
        inputField.current.value = "Avhii";
        inputField.current.style.border = "2px solid red"
        // console.log(inputField.current)
    }
  return (
    <>
   <h1 style={{textAlign:'center'}}>UseRef uses</h1>
    <input value={input} onChange={formHandler} style={{marginLeft:'10px'}}></input>
    <h4 style={{marginLeft:'10px'}}>application has been rendered {counter.current}  times and  </h4>
    <h4 style={{marginLeft:'10px'}}>previous state are {prevstate.current}</h4>
    
    <input ref={inputField}  style={{marginLeft:'10px'}}></input>
    <button onClick={clickHandler} style={{marginLeft:'10px'}}> click me</button>
    </>
  )
}

export default UseRef