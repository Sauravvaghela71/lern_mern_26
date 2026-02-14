import React, { useReducer } from 'react'

function reducer (state ,action){
    console.log(state,action)
        return{
            ...state,
            [action.name] : action.value
        }
    }
const UseReducer2 = () => {
   
    const [userData, dispatch] = useReducer(reducer, {
        name :"",
        age :""
    })

    function handleChange(e){
        console.log(e.target.value)
        dispatch({
            name : e.target.name,
            value : e.target.value
        })       
    }

  return (
  <>
    <h3>UseReducer2</h3>
    <input type="text" placeholder="enter name"
    name='name' 
    value={userData.name}
    
    onChange={handleChange} />

    <input type="text" placeholder="enter age" 
    name='age'
    value={userData.age}
    onChange={handleChange}
    />
    {userData.name} - 
    {userData.age}

  </>
  )
}

export default UseReducer2