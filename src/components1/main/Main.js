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
          <h1> Work experience</h1>
          <div className="box">
              <div className="vertical">
                  <img className="image-top" src="HTml.jpeg" alt=""/>
                  <div className="vertical-text">
                      HTML Devloper(2022-2023)
                  </div>
                  <div className="vertical-desk">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos voluptate vel
                          tempora vitae necessitatibus fugiat quo rem velit, accusamus, consectetur assumenda sit
                          aliquid reprehenderit, facilis reiciendis. Amet magni sapiente, eos et necessitatibus
                          voluptatum quos!</p>
                  </div>

              </div>
              <div className="vertical">
                  <img className="image-top" src="css.jpeg" alt=""/>
                  <div className="vertical-text">
                      CSS  Devloper(2022-2023)
                  </div>
                  <div className="vertical-desk">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos voluptate vel
                          tempora vitae necessitatibus fugiat quo rem velit, accusamus, consectetur assumenda sit
                          aliquid reprehenderit, facilis reiciendis. Amet magni sapiente, eos et necessitatibus
                          voluptatum quos!</p>
                  </div>


              </div>
              <div className="vertical">
                  <img className="image-top" src="js.jpeg" alt=""/>
                  <div className="vertical-text">
                      JAVA SCRIPT Devloper(2022-2023)
                  </div>
                  <div className="vertical-desk">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos voluptate vel
                          tempora vitae necessitatibus fugiat quo rem velit, accusamus, consectetur assumenda sit
                          aliquid reprehenderit, facilis reiciendis. Amet magni sapiente, eos et necessitatibus
                          voluptatum quos!</p>
                  </div>


              </div>
              <div className="vertical">
                  <img className="image-top" src="java.jpeg" alt=""/>
                  <div className="vertical-text">
                      JAVA Devloper(2022-2023)
                  </div>
                  <div className="vertical-desk">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos voluptate vel
                          tempora vitae necessitatibus fugiat quo rem velit, accusamus, consectetur assumenda sit
                          aliquid reprehenderit, facilis reiciendis. Amet magni sapiente, eos et necessitatibus
                          voluptatum quos!</p>
                  </div>


              </div>
              <div className="vertical">
                  <img className="image-top" src="c.jpeg" alt=""/>
                  <div className="vertical-text">
                      C Devloper(2022-2023)
                  </div>
                  <div className="vertical-desk">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos voluptate vel
                          tempora vitae necessitatibus fugiat quo rem velit, accusamus, consectetur assumenda sit
                          aliquid reprehenderit, facilis reiciendis. Amet magni sapiente, eos et necessitatibus
                          voluptatum quos!</p>
                  </div>


              </div>
          </div>



      </section>
  </main>
      
  <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>

      
  </div>
  )
}

export default Main
