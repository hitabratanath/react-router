import { NavLink, Outlet } from "react-router-dom";
const activeStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "underline" : "none"
  };
};
const Products = () => {
  return (
    <div className="products">
      <h3>Search products</h3>
      <input type="search" placeholder="enter keyword" />
      <nav className="prod-heading">
        <NavLink to="featuredprod" style={activeStyle}>
          Featured Products
        </NavLink>
        <NavLink to="newprod" style={activeStyle}>
          New Products
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
export default Products;
