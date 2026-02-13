import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './store/UserContext';

const Movies = () => {

  const contextData = useContext(UserContext);
  console.log(contextData)


  let movies = [     {id:1,name:"kali"},
                     {id:2,name:"saybo"},
                     {id:3,name:"sajan"}
               ];
  return (<>
    <div style={{textAlign:"center"}}>Movies
    {
      movies.map((movies)=>{
        return <li>
         <Link to={`/watch/${movies.name}`}>{movies.name}</Link>
        </li>
      })
    }</div>
    
     </>
  )
}

export default Movies