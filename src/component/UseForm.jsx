import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const UseForm = () => {
    const {register,handleSubmit} = useForm()
    const [userdata, setUserdata] = useState({})
    const [isset, setIsset] = useState(false)
    const [checked,setChecked] = useState(false);
    const submithandler=(data)=>{

      
        console.log(data);
        setUserdata(data);
    }
  

    
  return (<>

    <form className="secondary" style={{textAlign:"center"}} onSubmit={handleSubmit(submithandler)}>
        <h2>UseForm</h2>
       Name : <input type="text" placeholder='enter name'{...register("name")} /> <br/>
       age : <input type="text" placeholder='enter age' {...register("age")}/> <br/>
         <label >gender :</label> <br/>
            <input type="radio" value="male" {...register("gender")}/>male<br/>
            <input type="radio" value="female"  {...register("gender")}/>female<br/>

       <label > country : </label>
       <select {...register("country")}>
       <option value="india" {...register("india")}>INDIA</option>
        <option value="pakistana" {...register("pakistana")}>pakistan</option>
         <option value="bangladesh" {...register("bangladesh")}>bangladesh</option>
       </select><br/>

        <input type="checkbox" onClick={()=>setChecked(!checked)} /> please check term and condision<br/>
       
       <button type='submit'  disabled={!checked}>submit</button>

    </form>

    {isset == true && 
    <>
    <h1>output</h1>
    <h3>name:{userdata.name}</h3>
    <h3>age:{userdata.age}</h3>
    <h3>gender:{userdata.gender}</h3>
    <h3>country:{userdata.country}</h3>
    </>}


        

  </>
  )
}

export default UseForm