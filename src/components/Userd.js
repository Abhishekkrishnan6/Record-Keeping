import React, { useEffect , useState} from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
const Userd = () => {
  const {userId} = useParams();
  const [data,setdata] = useState({});
  const [searchParams , setSearchParams] = useSearchParams();
  
  console.log(searchParams.get('name'));
  console.log(searchParams.get('age'));
  const Reset = () =>{
setSearchParams({});
  }
  useEffect(()=>{
    async function getdata(){
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`);
      const res = await get.json();
      setdata(res[0]);
    }
    getdata();
    
  },[])
  return (
    <>
    <div>{data.id}</div>
    <img src={data.imageUrl} />
    <div>{data.firstNmae}</div>
    <div>{data.lastName}</div>
    <div>{data.email}</div>
    <div>{data.contactNumber}</div>
    <div>{data.age}</div>
    <div>{data.dob}</div>
    <button onClick={Reset}>reset</button>
    </>
  )
}

export default Userd