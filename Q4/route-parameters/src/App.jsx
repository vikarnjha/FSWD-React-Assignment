import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import UserProfile from "./UserProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
