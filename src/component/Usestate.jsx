import React, { useState } from 'react'

const Usestate = () => {
    const [loading,setLoading] = useState(true)

    const start =()=>{
        setLoading(true)
    }

    const stop =()=>{
        setLoading(false)
    }



  return (<>

   
   
    <h2>Usestate</h2>

    {loading == true && <h3>loading</h3> }
   {loading == false && <button onClick={start} >start</button>}
   {loading == true && <button onClick={stop} >stop</button>}



  </>)
}

export default Usestate