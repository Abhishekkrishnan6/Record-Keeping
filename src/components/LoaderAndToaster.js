import React from 'react'
import { useState,useEffect } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { ToastContainer, ToastContent,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const LoaderAndToaster = () => {
    const[loading,setloading]=useState(false);
    const[data,setdata]=useState([]);

    useEffect(()=>{
        setloading(true);
        async function getData(){
            const res = await fetch('https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1001');
            const finalres = await res.json();
            setdata(finalres);
            setloading(false);
            toast.success("Successfully data fetched");
        
        }
        getData();
    },[])
  return (
   <>
   <ToastContainer />
<div className="main">

    {
        loading?<TailSpin color='red' height={200} />
        :
        data.map((e,i)=>{
            return(
                <p>{e.email}</p>
            )
        })
    }
</div>


   </>
  );
}

export default LoaderAndToaster