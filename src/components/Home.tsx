import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"/login"}>Login</Link> | <Link to={"/register"}>Sign Up</Link>
    </div>
  );
};
