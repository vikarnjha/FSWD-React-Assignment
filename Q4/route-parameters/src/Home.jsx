import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome Home</h1>
      <Link to="/user/101">Go to User 101 Profile</Link>
    </div>
  );
};

export default Home;
