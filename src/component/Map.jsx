import React from 'react'

const Map = () => {
    const users = [{id:1,name:"saurav",city:"deesa",age:21},
                    {id:2,name:"rahul",city:"harij",age:21},
                    {id:3,name:"kiran",city:"deesa",age:21}]


  return (<>
    <h1>Map</h1>
    {users.map((users) =>
         <li>{users.id}-{users.name}-{users.city}-{users.age}</li>
         
)}
  </>
  )
}

export default Map