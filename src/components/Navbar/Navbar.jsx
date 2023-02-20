import { useState } from "react";
import {
  Nav,
  Logo,
  NavItems,
  NavLink,
  Basket,
  Close,
  Hamburger,
} from "./styles.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <div>
        <Logo to="/">Ozturk.</Logo>
      </div>
      <NavItems className={`nav-items ${isOpen && "open"}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/basket">
          <Basket />
        </NavLink>
      </NavItems>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{isOpen ? <Close /> : <Hamburger />}</span>
      </div>
    </Nav>
  );
}

export default Navbar;
