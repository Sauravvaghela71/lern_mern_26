import React from 'react'

const MapTable = () => {

    const users = [{id:1,name:"saurav",city:"deesa",age:21},
                    {id:2,name:"rahul",city:"harij",age:21},
                    {id:3,name:"kiran",city:"deesa",age:21}]

  return (<>
    <h1>MapTable</h1>
        
             

            <table className="table-success" style={{border:"2px solid black"}}>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>city</th>
                    <th>age</th>
                </tr>
                {users.map((users)=>{
                return <tr><td>{users.id}</td>
                      <td>{users.name}</td>
                     <td>{users.city}</td>
                      <td>{users.age}</td>
                      </tr>
             })}
        

             </table>
             
  </>)
}

export default MapTable