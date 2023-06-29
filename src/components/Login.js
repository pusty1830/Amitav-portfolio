import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import  './login.css'

const Login = () => {

     const history=useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e) {
    e.preventDefault();
    alert("Login sucessfully")


    try {
      await axios.post("http://localhost:3000/", {
        email, password
      })
      .then(res=>{
        if(res.data==="exist"){
          history("/",{state:{id:email}})
        }
       else if(res.data==="notexist"){
          history("/signup")
        }
      })
      .catch(e=>{
        alert("wrong data");
        console.log(e)
      })
    }
    catch (e) {
      console.log(e);
    }
  }
  return (
    <div className='loginpage'>
      <h1>Log in</h1>

      <form className='form' action="post">
        <input className='input'  type="email" placeholder='Email ID' onChange={(e) => { setEmail(e.target.value) }} />
        <input className='input' type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />

        <input className='input' type="Submit" onClick={submit} />
      </form>

      <br />
      <p>OR</p>

      <Link className='signin' to="/signup">Sign up</Link>
    </div>
  )
}

export default Login
