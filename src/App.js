import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";

import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import { ThemeContext } from "./Context";
import { useContext } from "react";


function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : ''
      }}
    >
      <Navbar />
      <Intro />
      <Experience />
      <Education /> 
      <Portfolio />  
      <Contact />
      <Footer />
    </div> 
  );
}

export default App;
