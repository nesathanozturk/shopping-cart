import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import AboutUs from "./pages/AboutUs/AboutUs";
import Basket from "./pages/Basket/Basket";
import Profile from "./pages/Profile/Profile";
import NotFound404 from "./pages/NotFound404/NotFound404";
import { useSelector } from "react-redux";

function App() {
  const isLogin = useSelector((state) => state.auth.Login);

  return (
    <div>
      {isLogin ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
