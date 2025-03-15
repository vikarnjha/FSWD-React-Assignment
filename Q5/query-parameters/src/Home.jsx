import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Welcome to Home</h1>
      {/* Link to Search Page with Query Parameter ?q=react */}
      <Link to="/search?q=react">Search for "React"</Link>
    </div>
  );
};
export default Home;
