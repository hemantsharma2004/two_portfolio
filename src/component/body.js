import { FaArrowRight } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { fadeIn } from "./varient";

import React from "react";

const Body = () => {
  return (
    <div
      name="house"
      className="flex justify-evenly w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 items-center px-40"
    >
      <motion.div
        variants={fadeIn('up', 0.4)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="w-auto" 
      >
        <h1 className="text-5xl text-white pb-6 font-extrabold">
          I'm 
          <Typewriter
            options={{
              strings: [
                'Hemant Sharma',
                'Frontend Developer',
                'React Developer',
                'UI/UX Developer',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="text-gray-500 pb-5">
          I am a tech enthusiast and currently I love to work on web applications using technologies like React, TailwindCSS, and Next.js.
        </p>

        <div className="w-1/5">
          <a
            href="https://drive.google.com/file/d/1VA0djfcBUEiQ0YCkkDZ1Jaw58IiO0-o2/view?usp=sharing"
              target="_blank"  
           rel="noopener noreferrer"
            smooth
            duration={500}
           
            className="group cursor-pointer bg-gradient-to-r flex items-center from-cyan-500 to-blue-500 text-lg text-white p-2 rounded-xl px-4 mb-4"
          >
            Portfolio
            <span className="ml-1 group-hover:rotate-90 duration-200">
              <FaArrowRight />
            </span>
          </a>

          <div className="flex items-center text-4xl cursor-pointer p-2 rounded-lg">
            <a
              href="https://github.com/hemantsharma2004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white mr-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/hemant-sharma-690587256/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white mr-5" />
            </a>
            <a
              href="mailto:hemantshar955@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineMail className="text-white mr-5" />
            </a>
            <a href="tel:9622314436" target="_blank" rel="noopener noreferrer">
              <IoMdContact className="text-white mr-4" />
            </a>
          </div>
        </div>
      </motion.div>


      <motion.div
        variants={fadeIn('up', 0.4)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.9 }}
        className="w-6/12" 
      >
      <div className="w-[420px]">
        <img
          className="h-[500px] w-[450px] text-white rounded-xl ml-9"
          src="https://res.cloudinary.com/drdt2romn/image/upload/v1717949644/hemant_2_es0v9g.jpg"
          alt="boy"
        />
      </div>
      </motion.div>

    </div>
  );
};

export default Body;
