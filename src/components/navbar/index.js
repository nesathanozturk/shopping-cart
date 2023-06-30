import { Nav, Logo, NavLink, Basket } from "./styles";

function Navbar() {
  return (
    <Nav>
      <div>
        <Logo to="/">Shopping Cart</Logo>
      </div>
      <div>
        <NavLink to="/">Products</NavLink>
        <NavLink to="/basket">
          <Basket />
        </NavLink>
      </div>
    </Nav>
  );
}

export default Navbar;
