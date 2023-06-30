import './footer.css';
import {Link,useNavigate} from 'react-router-dom'


import React from 'react'

const Footer = () => {

    const history=useNavigate();
    const handlesinout=()=>{
        history("/login")
       }
       const handlesinin=()=>{
        history("/signup")
       }
       const handlelogin=()=>{
        history("/login")
       }
  return (
    <div className='foot'>
       <footer>
        <div class="footer">
            <div class="first-footer">
                <h3>Amitav's devloper portfolio</h3>
            </div>
            <div class="second-footer">
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About Us</Link></li>
                    <li> <Link to="/contact">Contact Us</Link></li>
                    <li> <Link to="/skill">Skill's</Link></li>
                   
                </ul>
            </div>
            <div class="third-footer">
                <ul>
                <li><Link className='btn2' to="/login"  onClick={handlelogin}>log in</Link></li>
                  <li> <Link className='btn' to="/login" onClick={handlesinout}>sin out</Link></li>
                  <li> <Link className='btn1' to="/signup" onClick={handlesinin}>sin up</Link></li>
                    {/* <li> <a href="/">Home</a></li>
                    <li> <a href="/">About</a></li>
                    <li> <a href="/">Services</a></li>
                    <li> <a href="/">Projects</a></li>
                    <li> <a href="/">Contact Me</a></li> */}
                </ul>
            </div>
            {/* <div class="fourth-footer">
                <ul>
                    <li> <a href="/">Home</a></li>
                    <li> <a href="/">About</a></li>
                    <li> <a href="/">Services</a></li>
                    <li> <a href="/">Projects</a></li>
                    <li> <a href="/">Contact Me</a></li>
                </ul>
            </div> */}
        </div>
        <div class="footer-rights">
            www.Amitavsportfoilio.com|All rights reserved here!
        </div>
    </footer>
    </div>
  )
}

export default Footer
