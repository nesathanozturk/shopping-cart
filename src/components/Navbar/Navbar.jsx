import { useState } from "react";
import {
  Nav,
  Logo,
  NavLink,
  Basket,
  User,
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
      <div className={`nav-items ${isOpen && "open"}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/basket">
          <Basket />
        </NavLink>
        <NavLink>
          <User />
        </NavLink>
      </div>
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
