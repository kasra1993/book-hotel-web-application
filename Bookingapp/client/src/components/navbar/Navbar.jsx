import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>

        <div className="navItems">
          {user ? (
            <h3>{user.username}</h3>
          ) : (
            <>
              <button className="navButton">Register</button>
              <button className="navButton">Login</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
