import React from 'react'
import Todo from './Todo';
import { useState,useCallback } from 'react'
const UseCallback = () => {
    const[data,setdat]=useState(0);
    const[todo,settodo]=useState([]);
const update=()=>{
    setdat((c)=>c+1);
}
const addtodo =useCallback(()=>{
    settodo((t)=>[...t, "new todo"]);


},[todo]);
  return (
    <>
    <div>
    <h1>value: {data}</h1>
    <button
     onClick={update}>inc+</button>
    </div>
   
 <hr />
 <Todo todo={todo} addtodo={addtodo}/>


    </>
  )
}

export default UseCallback