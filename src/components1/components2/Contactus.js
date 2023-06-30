import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import  './contactus.css'

const Contactus = () => {

     const history=useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const[number,setNumber]=useState('')

  async function submit(e) {
    e.preventDefault();


    try {
      await axios.post("http://localhost:3000/", {
        email, password,number
      })
      .then(res=>{
        if(res.data==="exist"){
          history("/")
        }
       else if(res.data==="notexist"){
          history("/sinup")
        }
      })
      .catch(e=>{
        alert("add once more");
        console.log(e)
      })
    }
    catch (e) {
      console.log(e);
    }
  }
  return (
    
    <div className='contactpage'>
      <h1>Contact Me</h1>

      <form className='form' action="post">
        <input className='input'  type="email" placeholder='Email ID' onChange={(e) => { setEmail(e.target.value) }} />
        <input className='input' type="number" placeholder='phone number'onChange={(e)=>{setNumber(e.target.value)}} />
        <input className='input' type="text" placeholder='say a massage ' onChange={(e) => { setPassword(e.target.value) }} />

        <input className='input' type="Submit" onClick={submit} />
      </form>

      <br />
      <p>OR</p>

      <Link className='signin' to="/signup">Log in</Link>
    </div>
  )
}

export default Contactus
