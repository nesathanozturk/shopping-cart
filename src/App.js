import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Basket from "./pages/basket";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </>
  );
}

export default App;
