import React from 'react'
import { useState,useMemo } from 'react'
const UseMomo = () => {
    const[count,setcount] = useState(0);
    const[name,setname] = useState('');
    const expense =(num)=>{
        //window.alert("f");
        for(let i=0;i<100000000;i++){}
        return num;
    };
    const calculate = useMemo(()=> 
   
    expense(count)
    ,[]);
  return (
    <>
    <div>
    <button onClick={()=> setcount(count+1)}>Increment</button>
    <h1>count: {count}</h1>
    <input onChange={(e)=>setname(e.target.value)}></input>
    <h1>name: {name}</h1>
    </div>



    </>
  )
}

export default UseMomo