import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SearchResults from "./SearchResult";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* Search Page with Query Parameters */}
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}
export default App;
