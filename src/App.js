import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experience />
    </div> 
  );
}

export default App;
