import { memo } from "react";
import React from 'react'

const Todo = ({todo,addtodo}) => {
  window.alert("child renejvd");
    return (
    <>
    
    <h2>my todo</h2>

    {
        todo.map((todo,index)=>{
            return <p key={index}>{todo}</p>
        })
    }
    <button onClick={addtodo}>add todo</button>


    </>
  )
}

export default memo(Todo)