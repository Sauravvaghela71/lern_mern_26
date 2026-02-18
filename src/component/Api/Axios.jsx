import React, { useState } from 'react'
import axios from 'axios'
import Usestate from '../Usestate'
import Axios2 from './Axios2'


const Axios = () => {
   const [product, setProduct] = useState([])
   
    const ApiCalling = async() =>{



      const response = await axios.get('https://dummyjson.com/products',{
        
      })
      console.log(response);
      console.log(response.data.message)
      console.log(response.data);
      setProduct(response.data.products);
     
    }

  return (<>
  <div style={{textAlign:"center", color:"red"}}>
    <h4>Axios</h4>
    
    <button onClick={()=>{ApiCalling()}}>get</button>
  </div>
    {product.length > 0 && (
    <table className="table"> 
    <thead>

      <tr>

      <th>title</th>
      <th>description</th>
      <th>category</th>
      <th>price</th>
      </tr>
    </thead>
     
     <tbody>

      {
        product.map((u)=>{
          return  <tr key={u.id}>
            <td> {u.title}</td>
            <td> {u.description}</td>
            <td> {u.category}</td>
            <td> {u.price}</td>
             </tr>
        })
      }
      </tbody>
   
      </table>

    )
    }
   
    </>
    )
}

export default Axios