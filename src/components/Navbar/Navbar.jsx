import {
  Nav,
  NavHeader,
  NavLinks,
  Basket,
  Length,
  Image,
  Options,
} from "./styles.jsx";
import { Link } from "react-router-dom";
import { BsFillBasketFill } from "react-icons/bs";

function Navbar() {
  return (
    <Nav>
      <NavHeader>
        <Link to="/" className="nav-logo">
          Ozturk.
        </Link>
      </NavHeader>
      <NavLinks>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/aboutus" className="link">
          About Us
        </Link>
        <Basket>
          <BsFillBasketFill />
          <Length>1</Length>
        </Basket>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          alt="User Profile"
        />
        <Options>
          <span>Basket</span>
          <span>Account</span>
          <span>Log out</span>
        </Options>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
