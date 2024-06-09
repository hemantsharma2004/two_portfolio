import Body from "./component/body"
import About from "./component/about";
import Navbar from "./component/navbar";
import Portfolio from "./component/portfolio";
import Experience from "./component/experience";
import Contact from "./component/contact";

 const App=()=>{
   return(
     <div>
      <Navbar />
       <Body />
        <About />
        <Portfolio />
        <Experience />
        <Contact/>
     </div>
   )
 }

 export default App;