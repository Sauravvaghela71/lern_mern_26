import React, { useReducer } from 'react'

const UseReducer = () => {
    function reducer(state,action){
        switch(action.type){
            case "increment" :
                return {count : state.count + 1}
            
            case "decrement" :
                return {count : state.count - 1}

           case "reset" :
                return {count : 0} 

            default : 
              return state;
            
        }
    }

    const [state, dispatch] = useReducer(reducer, {count:0})
  return (
    <>
    <h1> UseReducer </h1>
    <h3>count : {state.count}</h3>
    <button onClick={()=> dispatch({type : "increment"})}>+</button> <br/>
    <button onClick={()=> dispatch({type : "decrement"})}>  decrement-</button><br/>
    <button onClick={()=> dispatch({type : "reset"})}>reset</button>
    

    </>
  )
}

export default UseReducer