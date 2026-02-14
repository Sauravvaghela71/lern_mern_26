import React from 'react'
import { UserContext } from './store/UserContext'
import ChildContext from './ChildContext'

const ParentContext = () => {


    const user = [{
      name :  "saurav",
       age :21},
       {
        name : "rahul",
        age : 22
       },
       {
        name : "rohit",
        age : 23
       }
      ]

  return (<>
    <div>ParentContext</div>
    <UserContext.Provider value={user}>
        <ChildContext></ChildContext>
    </UserContext.Provider>

  </>
  )
}

export default ParentContext