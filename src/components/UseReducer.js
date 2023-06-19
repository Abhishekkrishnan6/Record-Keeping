import React from 'react'
import { useReducer } from 'react'
const UseReducer = () => {
const reducer =(state,action)=>{
    // console.log("state:" ,state);
    // console.log("action:" ,action);
    if(action.type === "INC"){
        return state+1
    } else if(action.type === "DEC"){
        return state-1
    }
    else if(action.type==="MUL"){
        return state*2;
    }
    return state;
}
const[state,dispatch] = useReducer(reducer,0);
  return (
    <>
    
    <h1>{state}</h1>
    <button onClick={()=>dispatch({type:"INC"})}>inc</button>
    <button onClick={()=>dispatch({type:"DEC"})}>dec</button>
    <button onClick={()=>dispatch({type:"MUL"})}>mult</button>

</>
  )
}

export default UseReducer