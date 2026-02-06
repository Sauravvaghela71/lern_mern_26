import { useState} from "react";
// import axios from 'axios';
function App() {
  const [apiData,setApiData] = useState([]);
  const [data,setData] = useState({
    name:"",
    email:"",
    pass:""
  });

  const handleOnchange=(e)=>{
    const {name,value} = e.target;
    setData((prev)=>({...prev,[name]:value}))
  }

 
  
  fetch("https://dummyjson.com/users")
  .then(res=>res.json())
  .then(data=>{setApiData(data.users)
    console.log(data.users)
  })

  const handleSubmit = (e)=>{
    e.preventDefault();    

fetch("https://dummyjson.com/users/add", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    firstName: data.name,
    lastName: data.email,
    password: data.pass,
  }),
})
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

  }

  
  
  return (
    <>
    <form action="" method="post" onSubmit={handleSubmit}>
      name : <input type="text" name="name" value={data.name} onChange={handleOnchange}/><br/>
      email : <input type="text" name="email" value={data.email} onChange={handleOnchange}/><br/>
      password : <input type="text" name="pass" value={data.pass} onChange={handleOnchange}/><br/>
      <button>Submit</button>
    </form>
    <table border="2">
      <tr>
        <th>firstName</th>
        <th>lastName</th>
        <th>middleName</th>
        <th>age</th>
      </tr>
    {apiData.map((u)=>{
      return <tr>
        <td>{u.firstName}</td>
        <td>{u.lastName}</td>
        <td>{u.maidenName}</td>
        <td>{u.age}</td>
      </tr>
    })}
    </table>
    </>
  )
}

export default App
