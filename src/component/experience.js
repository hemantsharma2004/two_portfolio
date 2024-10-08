import { motion } from "framer-motion";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: "https://t3.ftcdn.net/jpg/05/15/64/04/360_F_515640411_OqqR0RBCCWu9zUlvcb7mBNuXEYIJnY3H.jpg",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
      title: "CSS",
      style: "shadow-blue-400",
    },
    {
      id: 3,
      src: "https://1.bp.blogspot.com/-TGQt5uRcAkg/XuMIJoAhwnI/AAAAAAAAA34/l8bWxNY_DwMrowIr4rjV7KHpUHTIDpsRQCLcBGAsYHQ/s1600/js.png",
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png",
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp",
      title: "TailwindCSS",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: "https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png",
      title: "Redux",
      style: "shadow-violet-400",
    },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-52">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -100 },  
          show: { opacity: 1, x: 20 },  
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 1 }} 
        transition={{ duration: 2, ease: "easeInOut" }} 
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"
      >
        <div>
          <h1 className="text-4xl inline border-b-4 border-gray-600 font-bold">Experience</h1>
          <p className="pt-7 pb-16">These are the technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 gap-8 text-center pb-8">
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 pb-2 rounded-lg ${style}`}
              initial={{ opacity: 0, x: -100 }}  
              whileInView={{ opacity: 1, x: 20 }} 
              viewport={{ once: true, amount: 1 }} 
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <img className="w-24 mx-auto pt-2" src={src} alt={title} />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
