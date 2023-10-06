import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";

import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experience />
      <Education />   
      <Contact />
    </div> 
  );
}

export default App;
