
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  import Home from "./Home";
  import Navbar from "./Navbar";
  import About from "./About";
  import Contact from "./Contact";
  import SignUp from "./SignUp";
  
  function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    );
  }
  
  
  

export default App;
