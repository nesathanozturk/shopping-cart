import { Nav, Logo, NavLink, Basket, User, Close, Hamburger } from "./styles";

function Navbar() {
  return (
    <Nav>
      <div>
        <Logo to="/">Shopping Cart</Logo>
      </div>
      <NavLink to="/">Products</NavLink>
      <NavLink to="/basket">
        <Basket />
      </NavLink>
    </Nav>
  );
}

export default Navbar;
