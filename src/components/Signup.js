import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './signup.css'

const Login = () => {
  const history=useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e) {
    e.preventDefault();


    try {
      await axios.post("http://localhost:3000/signup", {
        email, password
      })

      .then(res=>{
        if(res.data==="exist"){
          alert("user already exist")
          // history("/home",{state:{id:email}})
        }
       else if(res.data==="notexist"){
        history("/login",{state:{id:email}})
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
    <div className='sinuppage'>
      <h1>sign up</h1>

      <form className='from' action="post">
        <input className='input' type="email" placeholder='Email ID' onChange={(e) => { setEmail(e.target.value) }} />
        <input className='input' type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />

        <input className='input' type="Submit" onClick={submit} />
      </form>

      <br />
      <p>OR</p>

      <Link className='login' to="/login">Login page</Link>
    </div>
  )
}

export default Login
