import './navbar.css';
import{Link} from 'react-router-dom';
import myImage from '../../images/Ap.jpg'
// import { useLocation,useNavigate } from 'react-router-dom'


import React from 'react'

const Navbar = () => {

  

  // const history=useNavigate();
  // const handlesinout=()=>{
  //     history("/login")
  //    }
  //    const handlesinin=()=>{
  //     history("/sinup")
  //    }
  //    const handlelogin=()=>{
  //     history("/login")
  //    }





  return (
    <div className='navbar'>
     <img className='circular' src={myImage} alt="Amitav pic " />
      <h1>Amitav-profile</h1>
      <nav>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/skill">Skill's</Link></li>
          {/* <Link className='btn2' to="/login"  onClick={handlelogin}>log in</Link>
         <Link className='btn' to="/login" onClick={handlesinout}>sin out</Link> */}
          
        </ul>
      </nav>
    
    </div>
  )
}

export default Navbar
