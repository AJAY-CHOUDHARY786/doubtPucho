import React, { useState, useEffect, useRef } from "react";
import { CiCamera } from "react-icons/ci";
import DoubtFooter from "../component/DoubtFooter";
import TeacherCrausal from "../component/TeacherCrausal";
import VideoCarousel from "../component/VideoCarousel";
import TestimoniolCarousel from "../component/TestimoniolCarousel";
import TypingAnimation from "../component/TypingAnimation";
// *******************************************Animated-text*******************************

// ******************************************************atext******
const NewDoubt = () => {
  
  // ******************************************Animate**************************

  // *************************video-car*****

  return (
    <div>
     
      <div className="NewDoubtContainer">
        <div className="NewCont">
          <div className="NewDoubtMaincontainer">
            <div className="NewContainerOne">
              <div className="Newtext-animate">
                <span className="Newtext-why-fix">
                  <img src="./DOUBTPUCHO LOGO 1 (3).png" alt="" /> <br />
                </span>
                <TypingAnimation  text='"Ab Kaho No Doubt!"' />
              </div>
              <button className="NewDoubtSubbmit">Ask Doubt </button>
            </div>

            <div className="NewcontainerTwo">
              <div className="Newconimagesec1">
                {" "}
                {/* <ImageCarousel images={imagesArray} /> */}
                <video controls width="95%" style={{ borderRadius: "24px" }}>
                  <source src="https://www.youtube.com/watch?v=d8A8JmAImc4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="Newvideosec"></div>
            </div>
          </div>
          <div className="NewDoubtMaincontainers">
            <h1> Ask Your Questions</h1>
            <div className="capture">
              <div className="capicon">
                <div className="Capspan">  <span style={{margin:"0px 10px"}}>
                 <img src="/photo-camera-vector-icon-600nw-1345025204__1_-removebg-preview.png" alt=""  />
                </span>Capture Your Doubt </div>
              </div>
              <button className="CapButton">Submit</button>
            </div>
          </div>
        </div>

        <section>
          <div className="ProcessContainer">
            <h1>Steps for Asking a Doubt on <span className="ProcessContainerImage" style={{margin:"0px 10px"}}>
                 <img src="/DOUBTPUCHO LOGO 1 (3).png" alt=""  />
                </span></h1>
            
            <div className="ProcessSubContainer">
              <div className="ProcessSubmain1">
                
                <div className="ProcessPara1">
                <h3>Step 1</h3>
                <p>
                <span  style={{fontWeight:"700"}}>Capture:</span> Snap a photo of your doubt using DoubtPucho&rsquo;s user-friendly interface.
                  </p>
                 
             
                </div>
                <div className="ProcessSubmain">
             
             <div className="Processpara">
               <p>1.</p>
             </div>
           
         </div>
                <div className="Processparas">
                  <img
                    src="https://clipart-library.com/img/808889.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="ProcessSubContainer">
             
            </div>
            <div className="ProcessSubContainer">
              <div className="ProcessSubmain1">
                <div className="ProcessPara1">
                <h3>Step 2</h3>
                <p>
                <span style={{fontWeight:"700"}}>Upload:</span> Effortlessly upload the image to the platform for quick assistance.
                  </p>
                </div>
                <div className="ProcessSubmain">
               
               <div className="Processpara">
                 <p>2.</p>
               </div>
             </div>
                <div className="Processparas">
                  <img
                    src="https://clipart-library.com/img/808889.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="ProcessSubContainer">
             
            </div>
            <div className="ProcessSubContainer">
              <div className="ProcessSubmain1">
                <div className="ProcessPara1">
                <h3>Step 3</h3>
                <p>
                <span style={{fontWeight:"700"}}>Submit:</span> Receive timely and accurate solutions from our expert team to conquer your academic challenges.
                  </p>
                </div>
                <div className="ProcessSubmain">
               
               <div className="Processpara">
                 <p>3.</p>
               </div>
             </div>
                <div className="Processparas">
                  <img
                    src="https://clipart-library.com/img/808889.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="DoubtNextsec">
            <div className="Doubtsubsec">
              <h1>Your Doubt Solving Expert</h1>
            </div>
            {/* ***********************car***************** */}
            <div className="DubtsecTeacher">
              <TeacherCrausal />
            </div>
          </div>
        </section>
        {/* <section className="NewmainiconContainer">
          <div className="Newcontainer">
         
            <h1>Need help with specific Subject?</h1>

          
            <p>Choose your specific subject to solve:</p>

          
            <div className="NewiconContainer">
             
                <a href="#" className="NewiconBox">
                  <img src="https://www.bartleby.com/static/subjectsV2/businessV2.svg" alt="CAT Icon" />
                  <p>CAT</p>
                </a>
             

             
                <a href="#" className="NewiconBox">
                  <img src="https://www.bartleby.com/static/subjectsV2/businessV2.svg" alt="CLAT Icon" />
                  <p>CLAT</p>
                </a>
              

            
                <a href="#" className="NewiconBox">
                  <img src="https://www.bartleby.com/static/subjectsV2/businessV2.svg" alt="IPMAT Icon" />
                  <p>IPMAT</p>
                </a>
              

           
                <a href="#" className="NewiconBox">
                  <img src="https://www.bartleby.com/static/subjectsV2/businessV2.svg" alt="CUET Icon" />
                  <p>CUET</p>
                </a>
           
            </div>
          </div>
        </section> */}
        <section>
          <div className="cardboxContainer">
            <div className="cardCont">
              <h1>Instant Doubt Solution! Your Gatway to Clarity </h1>
            </div>
            <div className="cardcont2">
              <div className="box1">
                <span>
                  <img
                    src="/11663460_20944447-removebg-preview.png"
                    alt=""
                    style={{
                      width: "60%",
                      borderRadius: "120px",
                      marginBottom: "12px",
                    }}
                  />
                </span>
                <h5>Quick Resolution</h5>
                <p>Get your video solution within an hour </p>
              </div>
              <div className="box1">
                <span>
                  <img
                    src="/12953423_isometric_60-removebg-preview.png"
                    alt=""
                    style={{
                      width: "60%",
                      borderRadius: "120px",
                      marginBottom: "12px",
                    }}
                  />
                </span>
                <h5>Personalized Learning</h5>
                <p>Understand concepts through custom-tailored explanations.</p>
              </div>
              <div className="box1">
                <span>
                  <img
                    src="/11434267_4710037-removebg-preview.png"
                    alt=""
                    style={{
                      width: "60%",
                      borderRadius: "12px",
                      marginBottom: "12px",
                    }}
                  />
                </span>
                <h5>Effortless Process</h5>
                <p>Simply snap, submit, and learn!</p>
              </div>
            </div>
          </div>
        </section>

        <section className="WhatMain">
          <div className="Whatcontainer">
            {/* Heading */}
            <h1>No matter the question, DoubtPucho&rsquo;s got your back!</h1>

            {/* Main content container */}
            <div className="WhatcontentContainer">
              {/* Left section with image */}
              <div className="WhatleftSection">
                <img src="https://www.bartleby.com/static/homepage-v4/learn-product-new.webp" alt="Your Image Alt Text"  />
              </div>

              {/* Right section with subheading, paragraph, and button */}
              <div className="WhatrightSection">
                <h3>Get Help <TypingAnimation text ="Anytime , Anywhere"/> with <span className="ImageSpan" >
                 <img src="/DOUBTPUCHO LOGO 1 (3).png" alt=""/>
                </span>!</h3> 
                <p>
                DoubtPucho is your go-to platform for quick and reliable solutions to all your academic queries. Whether you&rsquo;re struggling with math, science, languages, or any other subject, DoubtPucho has your back! Our user-friendly interface allows you to snap a picture of your question anytime, anywhere, and our team of expert tutors will provide you with clear, concise explanations in no time. 
                Say goodbye to homework stress and hello to hassle-free learning.
                </p>
                <button>Explore</button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="videoTestimoniols">
            <div className="vidhead">
             
            </div>
            <div className="videosubTest">
              <div className="vid1">
                {" "}
                <h3>
                What Students Says
                <span style={{ color: "#55328F" }}> About us!</span>
              </h3>
                <h4>
                  {" "}
                  <span style={{ color: "#55328F" }}>Love</span> and
                  <span style={{ color: "#55328F" }}>
                    {" "}
                    Share experience
                  </span>{" "}
                  with us
                </h4>
              </div>

              <div className="vid2">
                {" "}
                <VideoCarousel />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="testimoniols">
          <h1>Testimoniols</h1>
            <TestimoniolCarousel/>
          </div>
        </section>

        <section>
          <div className="LastContainer">
            <div className="LastSubcont">
              <div className="last1">
                <h3>Ready to get started with coachify?</h3>
              </div>
              <div className="last2">
                <button style={{ color: "#55328F", backgroundColor: "white" }}>
                  <span >
                    Lets Get Started
                  </span>
                </button>
                <button   style={{
                      color: "White",
                      backgroundColor: "#55328F",
                      border: "1px solid white",
                    }}>
                  <span
                  
                  >
                    Contact Us
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <DoubtFooter />
    </div>
  );
};

export default NewDoubt;
