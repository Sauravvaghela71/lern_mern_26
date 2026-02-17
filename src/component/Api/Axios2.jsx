import axios from 'axios'
import React, { useState } from 'react'

const Axios2 = () => {

     const [comment, setComment] = useState([])
   

    const ApiCalling = async() =>{

      const response = await axios.get('https://dummyjson.com/comments')
      console.log(response);
     
      console.log(response.data);
      console.log(response.data.comments);
      setComment(response.data.comments);
    
    }
    
  return (<>
    <h2>Axios2</h2>

    <button onClick={()=>{ApiCalling()}}>get</button>
    {comment.length > 0 && (
    <table className='table'> 

      <tr>

      <th>body</th>
      <th>postid</th>
      <th>likes</th>
      <th>user</th>
      </tr>
     
      {
        comment.map((u)=>{
          return  <tr key={u.id}>
            <td> {u.body}</td>
            <td> {u.postId}</td>
            <td> {u.likes}</td>
            <td> {u.user.username}</td>
           </tr>
        })
      }
      </table>
    )}
      </>
      )
}

export default Axios2