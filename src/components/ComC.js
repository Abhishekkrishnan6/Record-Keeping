import React from 'react'
import { useContext } from 'react'
import { Data } from '../App'
const ComC = () => {
  const Data1 = useContext(Data);
  return (
    <div className='compc'>
    <div>ComC</div>
    <h1>{Data1.data}</h1>
    <h1>{Data1.name.name}</h1>
    <h1>{Data1.name.age}</h1>
    </div>
  )
}

export default ComC