

import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white  '>
    
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-2'>
         <h1 className='text-4xl font-bold inline border-b-4  border-gray-500'>About</h1>
        </div>

        <div className='text-lg mt-20'>
           <p>  
                 My name is Hemant Sharma, and I am a dedicated frontend developer with a strong command of various technologies, including C++. With a passion for crafting engaging and dynamic user experiences, I leverage my expertise to create innovative and intuitive web applications.
           </p>
           <br/>

           <p>Throughout my career, I have honed my skills in frontend development, mastering languages such as HTML, CSS, and JavaScript, along with popular frameworks like React and Angular  I approach each project with a meticulous attention to detail, ensuring that every aspect of the user interface is polished and user-friendly. My ability to adapt to new technologies and frameworks allows me to stay ahead in a rapidly evolving industry, delivering cutting-edge solutions that exceed expectations.</p>
            <p>I am enthusiastic about contributing my skills and experience to innovative projects that push the boundaries of web development, and I am eager to take on new challenges that allow me to continue growing and learning in this dynamic field.</p>
        </div>
        </div>
    </div>
  )
}

export default About