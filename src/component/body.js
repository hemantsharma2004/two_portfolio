import { FaArrowRight } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect';



import React from "react";

const Body=()=>{
     return(
         <div name="house" className="flex justify-evenly w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 items-center  px-20">

            <div className="w-6/12" >
               <h1 className="text-5xl text-white pb-6 font-extrabold ">I'm a<Typewriter
  options={{
    strings: ['Hemant', 'Frontened Developer' , 'React Developer', 'UI/UX Developer'],
    autoStart: true,
    loop: true,
  }}
/></h1>
               <p className="text-gray-500 pb-5"> i am a tech enthustaic guy and currently i love to work on web application using technologies like React, TailwindCss, Next</p>
                
                <div className="w-1/5">
               <Link to="profile" smooth duration={500} className=" group cursor-pointer bg-gradient-to-r flex  items-center from-cyan-500 to-blue-500 text-lg text-white p-2 rounded-xl px-4 mb-4">portfolio
                <span className="ml-1 group-hover:rotate-90 duration-200"><FaArrowRight /></span></Link>


               <div className="flex items-center text-4xl cursor-pointer p-2 rounded-lg">
              <a href="https://github.com/hemantsharma2004" target="_blank" rel="noopener noreferrer"><FaGithub className="text-white mr-5" /></a>
                <a href="https://www.linkedin.com/in/hemant-sharma-690587256/" target="_blank" rel="noopener noreferrer"> <FaLinkedin className="text-white mr-5" /></a>
             <a href="mailto:hemantshar955@gmail.com" target="_blank" rel="noopener noreferrer"><HiOutlineMail className="text-white mr-5" /></a>
                <a href="tel:9622314436" target="_blank" rel="noopener noreferrer"><IoMdContact className="text-white mr-4" /></a>
              </div>
              </div>
              </div>


                 <div className="w-[450px] ">
                   <img className="h-[500px] w-[450px] text-white rounded-xl" src="https://res.cloudinary.com/drdt2romn/image/upload/v1717949644/hemant_2_es0v9g.jpg" alt="boy" ></img>
                 </div>
            
         </div>
     )
}

export default Body;