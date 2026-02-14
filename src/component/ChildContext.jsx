import React, { useContext } from 'react'
import { UserContext } from './store/UserContext'

const ChildContext = () => {

    const user = useContext(UserContext)

  return (<>
    <h3>ChildContext</h3>
    {
        user.map((u)=>{
            
            return <li key={u.id}>{u.name}-{u.age}</li>
            })
         
    }

    </>
  )
}

export default ChildContext