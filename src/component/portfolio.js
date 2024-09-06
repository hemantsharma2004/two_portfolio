
import { motion } from "framer-motion";
import { fadeIn
  
 } from "./varient";
 const Portfolio=()=>{
 
      const portfolios=[
        {
             id:1,
             src:"https://www.shutterstock.com/image-vector/weather-forecast-widget-concept-temperature-260nw-1944970438.jpg",
             demo:""
        },
        {
            id:2,
            src:"https://i.ytimg.com/vi/TlG25RUhkTk/maxresdefault.jpg",
            demo:"https://yumhub-two.vercel.app/",
       },
       {
        id:3,
        src:"https://imag.malavida.com/mvimgbig/download-fs/netflix-para-chrome-18150-2.jpg",
        demo:"https://yumhub-two.vercel.app/",
   },
   {
    id:4,
    src:"https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2023/06/shopify-website-homepage.png",
    demo:"",
},
      ]


     return(
        <div
        name="profile"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
         <motion.div
        variants={fadeIn('left', 'up', 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src , demo}) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
            
               <a href={demo}>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
               Demo
              </button>
              </a>
                
                <a href="https://github.com/hemantsharma2004" target="_blank" rel="noopener noreferrer">
            <button className="w-1/2 px-4 py-3 m-4 duration-200 hover:scale-105">
             Code
               </button>
               </a>

                </div>
              </div>
            ))}
          </div>
        </div>
        </motion.div>
      </div>
     )
 }

 export default Portfolio;