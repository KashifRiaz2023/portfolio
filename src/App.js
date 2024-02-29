import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skills from "./Components/Skills/skills";
import Project from "./Components/Project/project";
import Project2 from "./Components/Project2/project2";
import Project3 from "./Components/Project3/project3";
import Experience from "./Components/Experience/experience";
import Slider from "./Components/Slider/slider";
import Work from "./Components/Work/work";
//import Footer from "./Components/Footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
     <Skills />
       <Project />
      <Project2 />
      <Project3 />
     <Experience />
      <Slider />
       <Work />
  {/*<Footer />*/}
    </div>
  );
}

export default App;