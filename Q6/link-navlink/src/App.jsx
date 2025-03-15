import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
function App() {
  return (
    <Router>
      <nav>
        {/* Using Link */}
        <Link to="/">Home</Link> |  
        <Link to="/about">About</Link>
        <br />
        {/* Using NavLink with Active Styling */}
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Home
        </NavLink> |  
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
          About
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;
