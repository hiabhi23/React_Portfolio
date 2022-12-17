import React from "react";
import "./index.css";
import "./components/Layout/Layout.css";
import Home from './routes/Home/Home';
import Project from './routes/Project/Project';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App(){
  return (
    <div className="App">
      <Navbar/>
        <Router>
          <Routes>
              <Route path ="/" element = {<Home/>}/>
              <Route path="/projects" element = {<Project />} />
              <Route path="/about" element = {<About />} />
              <Route path="/contact" element = {<Contact />} />
          </Routes>
        </Router>
      <Footer/>
    </div>
  );
}
export default App;