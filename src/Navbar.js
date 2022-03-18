import { NavLink } from "react-router-dom";

const activeStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : "none",
    color: isActive ? "black" : "white"
  };
};
const Navbar = () => {
  return (
    <nav className="nav-container">
      <NavLink to="/" style={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/about" style={activeStyle}>
        About us
      </NavLink>
      <NavLink to="/products" style={activeStyle}>
        Products
      </NavLink>
    </nav>
  );
};
export default Navbar;
