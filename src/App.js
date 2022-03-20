import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./styles.css";
import Navbar from "./Navbar";
import OrderPlaced from "./OrderPlaced";
import NoMatch from "./NoMatch";
import Products from "./Products";
import NewProducts from "./NewProducts";
import FeaturedProducts from "./FeaturedProducts";
import Users from "./Users";
import SearchParams from "./SearchParams";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
        <Route path="/products" element={<Products />}>
          <Route path="newprod" element={<NewProducts />} />
          <Route path="featuredprod" element={<FeaturedProducts />} />
        </Route>
        <Route path="users/:userID" element={<Users />} />
        <Route path="/search" element={<SearchParams />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
