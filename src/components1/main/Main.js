import './main.css';
import myImage1 from '../../images/Amitav.jpg'
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';



const Main = () => {

   


    const typedElement = useRef(null);
    useEffect(() => {
        const options = {
          strings: ['Web developer', 'Also a good student.', 'Java developer', 'C developer'],
          typeSpeed: 50,
        };
      
        const typed = new Typed(typedElement.current, options);
      

        return () => {
          typed.destroy();
        };
      }, []);
  return (
    <div className='main'>
    <main>
      <section className="firstsection">
          <div className="leftsection">
              Hi, my name is <span class="purple">Amitav</span>
              <div>and i am a passionate</div>
              <div></div>
              <span id="element" ref={typedElement}></span>
          </div>
          <div className="rightsection">
              <img src={myImage1} alt=""/>
          </div>
      </section>
      <hr/>
      <section className="secondsection">
          <span className="grey">What I have done so far</span>
          <span><h1> Work I have Done</h1><hr/></span>
          <div className="box">
              <div className="vertical">
                  <div className="vertical-text">
                      {/* HTML Devloper(2022-2023) */}
                      NETFLIX-Clone:
                  </div>
                  <div className="vertical-desk">
                      <p>I have done the Netflix Clone using HTML,CSS and now I am Working on it to devlope in Mern stack it is done so far.</p>
                  </div>

              </div>
               <div className="vertical">
                  <div className="vertical-text">
                      {/* CSS  Devloper(2022-2023) */}
                      Calculator:
                  </div>
                  <div className="vertical-desk">
                      <p>I have diffrent type of Calculator Like Xor calculator,simple calculator,Scientific calculator It is done with pure javascript,Htmland Css.</p>
                  </div>


              </div> 
             <div className="vertical">
                  <div className="vertical-text">
                      {/* JAVA SCRIPT Devloper(2022-2023) */}
                      WhatsApp-Clone:
                  </div>
                  <div className="vertical-desk">
                      <p>I have done the frontened of Whatsapp and the backend is currently progress. </p>
                  </div>


              </div>
              <div className="vertical">
                  <div className="vertical-text">
                      {/* JAVA Devloper(2022-2023) */}
                      GitaAutonomous college BBSR
                  </div>
                  <div className="vertical-desk">
                      <p>I have also done my college project and it is in React i am now devloping it to Mern stack.</p>
                  </div>


              </div>
              {/* <div className="vertical">
                  <div className="vertical-text">
                      C Devloper(2022-2023)
                  </div>
                  <div className="vertical-desk">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos voluptate vel
                          tempora vitae necessitatibus fugiat quo rem velit, accusamus, consectetur assumenda sit
                          aliquid reprehenderit, facilis reiciendis. Amet magni sapiente, eos et necessitatibus
                          voluptatum quos!</p>
                  </div>


              </div> */}
          </div>



      </section>
  </main>
      
  <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>

      
  </div>
  )
}

export default Main
