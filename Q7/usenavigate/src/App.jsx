import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate(); // Initialize navigation function
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
    </div>
  );
};
const Dashboard = () => <h2>Dashboard Page</h2>;
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
export default App;
