import React from "react";
import {FaWhatsapp,FaInstagram,FaLinkedinIn} from "react-icons/fa"
import {MdOutlineAttachEmail} from "react-icons/md"

export const About = (props) => {
 
    
  return (
    <div className="container py-3" style={{backgroundColor:`${props.mode===`dark`?`rgb(64, 64, 64)`:props.areaColor(props.colorName)}`,color:`${props.mode===`dark`?`white`:`black`}`}}>
      <h1>About</h1>
      <div className="accordion" id="accordionExample" style={{overflow:"hidden"}}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne" >
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{backgroundColor:`${props.mode===`dark`?`rgb(64, 64, 64)`:props.areaColor(props.colorName)}`,color:`${props.mode===`dark`?`white`:`black`}`}}
            >
              Who I am?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:`${props.mode===`dark`?`rgb(64, 64, 64)`:props.areaColor(props.colorName)}`,color:`${props.mode===`dark`?`white`:`black`}`}}>
            <img src="mypic.jpeg" alt="" srcset="" style={{width:"127px"}}  className="my-2 mx-2"/>
            <br />
              <strong>Hello I'm Supreet Parida</strong>
              <br />
              I'm 20 years old. I have completed my 12th in ST.Xavier's High School. And I'm currently pursuing BTech in CSE with a specialisation of Data Science in CV Raman Global University
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
               style={{backgroundColor:`${props.mode===`dark`?`rgb(64, 64, 64)`:props.areaColor(props.colorName)}`,color:`${props.mode===`dark`?`white`:`black`}`}}
            >
              What I Do?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:`${props.mode===`dark`?`rgb(64, 64, 64)`:props.areaColor(props.colorName)}`,color:`${props.mode===`dark`?`white`:`black`}`}}>
              <strong>Web Development and Design</strong> 
              <br />
              I spent the last one year working both as a freelance web developer and designer. I acquired project and time management skills, as well as the ability to communicate. I have worked on a multitude of web and print based projects for a range of clients providing Web Design (Photoshop, Illustrator, InDesign) and Development (PHP, HTML, CSS, LESS, JS, jQuery, WordPress, Bootstrap, Responsive Layouts), eCommerce Solutions and Graphic Design.
              <br />
              I also take interest in Editing. Photography is my passion - nature is my refuge. Combine the two, and that is where I am most at peace.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
             style={{backgroundColor:`${props.mode===`dark`?`rgb(64, 64, 64)`:props.areaColor(props.colorName)}`,color:`${props.mode===`dark`?`white`:`black`}`}}
            >
              What is TextUtils ?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:`${props.mode===`dark`?`rgb(64, 64, 64)`:props.areaColor(props.colorName)}`,color:`${props.mode===`dark`?`white`:`black`}`}}>
            <strong>Analyze Your Text</strong><br />
              Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or <br />
              <strong>Free to Use</strong><br />
              TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. <br />
              <strong>Broswer Compatible</strong><br />
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc. <br />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
               style={{backgroundColor:`${props.mode===`dark`?`rgb(64, 64, 64)`:props.areaColor(props.colorName)}`,color:`${props.mode===`dark`?`white`:`black`}`}}
            >
              Contact Me
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:`${props.mode===`dark`?`rgb(64, 64, 64)`:props.areaColor(props.colorName)}`,color:`${props.mode===`dark`?`white`:`black`}`}}>
            
            <a className="onHover" href="https://api.WhatsApp.com/send?phone=+917847961645" style={{color:`${props.mode===`dark`?`white`:`black`}`}}><FaWhatsapp className="mx-2 my-2" size="2rem" color="rgb(81, 241, 109)"/> 7847961645 </a><br />
            <a className="onHover" href="https://www.linkedin.com/in/supreetparida/" style={{color:`${props.mode===`dark`?`white`:`black`}`}}><FaLinkedinIn className="mx-2 my-2" size="2rem" color="rgb(0, 119, 181)" prefix="far"/>My Linkedin profile</a><br/>
            <a className="onHover" href="mailto: supreetparida76@gmail.com" style={{color:`${props.mode===`dark`?`white`:`black`}`}}><MdOutlineAttachEmail className="mx-2 my-2" size="2rem" color="rgb(202, 71, 58)" prefix="far"/> Email me </a><br/>
            <a className="onHover" href="https://www.instagram.com/invites/contact/?i=4nfhuy6cm54a&utm_content=2okyiib" style={{color:`${props.mode===`dark`?`white`:`black`}`}}><FaInstagram className="mx-2 my-2" size="2rem" color="rgb(238, 112, 39)" prefix="far"/> Follow me on Instagram</a><br/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
