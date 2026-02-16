import React, { useMemo, useState } from 'react'

const UseMemo = () => {

  const [count , setCount] = useState(0)
  const [text , setText] = useState('')

  const ExpensiveCalculation = (num)=>{
    
    console.log("ExpensiveCalculation function running ");
    let total=0;
    for(let i=0; i<100000000; i++){
      total += 1; 

    }
    return total + num;
    

  }
  const results = useMemo(()=>ExpensiveCalculation(count), [count])

  return (<>
    
    <h3>UseMemo</h3>
    <h3>result : {results}</h3>
    <button onClick={()=>setCount(count + 1)}>increse</button>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
    <p>count : {count}</p>

  </>
  )
}

export default UseMemo