import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Useeffectuse = () => {
  const [state,setstate] = useState(10);
  const [data,setdata] = useState([]);
  useEffect(()=>{
    async function getdata(){
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
      const res = await get.json();
      setdata(res);
      console.log(res);
    }
    getdata();
    document.title = `(${state}) Employees`;
  },[state])
  return (
    <div className="App">
      
  <h1>USE EFFECT USES</h1>
  <button onClick={()=> setstate(state+7)}>click me {state}</button>
  {
    data.map((element,index)=>{
      return (
        <Link to={`/app/${element.id}`}>
        <div className='dataa' key={index}>
          <h4>{element.firstName}</h4>
          <h4>{element.lastName}</h4>
          <h4>{element.email}</h4>
       
       </div>
       </Link >
      )
    })
  }
    </div>
  )
}

export default Useeffectuse