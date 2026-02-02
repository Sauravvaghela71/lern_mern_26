import React from 'react'
import img from "../assets/rdr2.png"



const Header = () => {
    var name = <h3>Arthur Morgan</h3>;
    var  since = <h3>26 Oct, 2018</h3>


  return (
    <>
    <div className='header'>
        <h1>RDR-2</h1>
       
    </div>
    <div  className="image">

    <center>
     
      <img src={img} alt="" />
      

      NAME:{name} <br/>
      SINCE:{since}
     <p >
      <h2>
      Arthur Morgan is the tragic protagonist of Red Dead Redemption II, known for his complex character, loyalty to the Van der Linde gang, and his journey of redemption in the fading Wild West.
      <br/>
      
      Arthur Morgan was born around 1863 to Beatrice and Lyle Morgan. His mother died when he was young, and his father, a petty criminal, was arrested for larceny when Arthur was just 11 years old. Arthur witnessed his father's death, which deeply affected him and shaped his outlook on life. He became a member of the Van der Linde gang at a young age, where he developed a close relationship with gang leader Dutch van der Linde, viewing him as a father figure
      </h2>
     </p>
     </center>
    </div>
     </>
  )
}

export default Header