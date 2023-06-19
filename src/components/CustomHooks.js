import { useState,useEffect } from 'react'
const CustomHooks = (url) => {
 
    const[data,setdata] = useState([]);
 useEffect(()=>{
    async function getData(){
        const call = await fetch(url);
        const res = await call.json();
        setdata(res);
    }
    getData();
 },[])



  return [data];
    
  
}

export default CustomHooks