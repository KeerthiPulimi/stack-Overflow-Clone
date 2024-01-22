import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { useState } from "react";

function App() {
  const [slideIn, setSlideIn] = useState(true);
  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  };
  console.log(setSlideIn)
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
      </Router>
    </div>
  );
}

export default App;
