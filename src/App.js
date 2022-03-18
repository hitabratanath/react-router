import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./styles.css";
import Navbar from "./Navbar";
import OrderPlaced from "./OrderPlaced";
import NoMatch from "./NoMatch";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
