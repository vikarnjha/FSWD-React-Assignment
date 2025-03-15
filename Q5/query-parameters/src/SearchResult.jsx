import { useLocation } from "react-router-dom";
const SearchResults = () => {
  // Get the current URL
  const location = useLocation();
  // Extract query parameters
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q"); // Get 'q' parameter
  return (
    <div>
      <h2>Search Results</h2>
      <p>
        Showing results for: <strong>{searchQuery}</strong>
      </p>
    </div>
  );
};
export default SearchResults;
