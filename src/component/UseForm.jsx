import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const UseForm = () => {
    const {register,handleSubmit, formState:{errors}} = useForm()
    const [userdata, setUserdata] = useState({})
    const [isset, setIsset] = useState(false)
    const [checked,setChecked] = useState(false);

    const validationschema = {
       namevalidation:{
        required:{
          value:true,
          message:"name is require"
        }
        },
        agevalidation:{
          required:{
            value:true,
            message:"age is require"
          
          },
          max:{
            value:100,
            message:"age not allow above 100"
          },
          min:{
            value:18,
            message:"age above 18 "
          }
        },
        gendervalidation:{
          required:{
            value:true,
            message:"plese check the feild"
          }
        },
        countryvalidate:{
          required:{
            value:true,
            message:"please select country"
          }
        }

    }





    const submithandler=(data)=>{
        console.log(data);
        setUserdata(data);
        setIsset(true)
    }
  

    
  return (<>

    <form className="secondary" style={{textAlign:"center"}} onSubmit={handleSubmit(submithandler)}>
        <h2>UseForm</h2>
        
       Name : <input type="text" placeholder='enter name'{...register("name", validationschema.namevalidation)} /> <br/>
              <p style={{color:"red"}}>{errors.name?.message}</p>

              
       age : <input type="text" placeholder='enter age' {...register("age",validationschema.agevalidation)}/> <br/>
              <p style={{color:"red"}}>{errors.age?.message}</p>


       <label >gender :</label> <br/>

            <input type="radio" value="male" {...register("gender",validationschema.gendervalidation)}/>male<br/>
            <input type="radio" value="female"  {...register("gender",validationschema.gendervalidation)}/>female<br/>
            <p style={{color:"red"}}>{errors.gender?.message}</p>

       <label > country : </label>

       <select {...register("country",validationschema.countryvalidate)}>
              <option value="">---select country---</option>
              <option value="india" {...register("india")}>INDIA</option>
              <option value="pakistana" {...register("pakistana")}>pakistan</option>
              <option value="bangladesh" {...register("bangladesh")}>bangladesh</option>
       </select><br/>
              <p style={{color:"red"}}>{errors.country?.message}</p>


        <input type="checkbox" onClick={()=>setChecked(!checked)} /> please check term and condision<br/>
       
       
        <button type='submit'>submit</button>


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