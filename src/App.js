import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import AboutUs from "./pages/AboutUs/AboutUs";
import NotFound404 from "./pages/NotFound404/NotFound404";
import Products from "./pages/Products/Products";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}

export default App;
