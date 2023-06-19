import React from 'react'
import CustomHooks from './CustomHooks'
const Customhook = () => {
    const[data] = CustomHooks("https://hub.dummyapis.com/employee?noofRecords=5&idStarts=1001")
  return (

 <>
    {data.map((e,i) => {
        return <h1 key={i}>{e.firstName}</h1>
    })}



    </>
  )
}

export default Customhook