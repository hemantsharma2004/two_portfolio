import { motion } from "framer-motion";
import { fadeIn } from "./varient";

const Contact=()=>{
     return(
         <div name="contact" className="w-full h-full bg-gradient-to-b pb-10 from-black  pt-52 to-gray-800 p text-white-">

            <motion.div
              variants={fadeIn('left', 'up', 0.2)} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
               className="text-white max-w-screen-lg mx-auto">
                <div className="pb-8">
                    <h1 className="text-4xl font-bold border-b-4 border-gray-500 inline" >Contact</h1>
                    <p className="py-6 text-lg">Get in touch with me</p>
                </div>

                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/jawlxndb" method="POST" className=" flex flex-col w-1/2">
                        <input type="text" name="name" placeholder="Name " className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></input>
                        <input type="text" name="name" placeholder="Number " className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"></input>
                        <textarea name="message" placeholder="Enter your message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "></textarea>
                        <button className="text-white bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-3 mt-6 flex  items-center rounded-md mx-auto hover:scale-105 duration-300">Submit</button>
                    </form>
                </div>
            </motion.div>

         </div>
     )
}

export default Contact;