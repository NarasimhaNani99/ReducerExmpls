import React, { useReducer } from 'react'

const scaling = (state, action) =>{
  console.log(state)
  switch (action.type) {
    case "Increase":
      return {...state, count:state.count+1}

    case "Decrease":
      return {...state, count:state.count-1}
      
    default:
      return state;
  }
}

const ReducerDemo = () => {
  const initialState = {
    count: 0,
  }
  const [state, dispatch] = useReducer(scaling, initialState)
  return (
    <>
    <h3>Count is: {state.count}</h3>
    <button onClick={()=> dispatch({ type:"Increase"})}>Increase</button>&nbsp;
    <button onClick={()=> dispatch({ type:"Decrease"})}>Decrease</button>
    </>
  )
}

export default ReducerDemo