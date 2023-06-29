import { useLocation,useNavigate } from 'react-router-dom'



import React from 'react'

const Home = () => {

  const history=useNavigate();
   const location = useLocation();
    

   const handlesinout=()=>{
    history("/")
   }

  return (
    <div>
        <h1>Hello {location.state.id} and Welcome to Amitav portfolio</h1>
        <button onClick={handlesinout}>sin out</button>
    </div>
    
  )
}

export default Home
