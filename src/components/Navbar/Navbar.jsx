import {
  Nav,
  NavHeader,
  Title,
  NavLinks,
  Basket,
  Image,
  Options,
} from "./styles.jsx";
import { BsFillBasketFill } from "react-icons/bs";

function Navbar() {
  return (
    <Nav>
      <NavHeader class="nav-header">
        <Title class="nav-title">Ozturk.</Title>
      </NavHeader>
      <NavLinks class="nav-links">
        <Basket>
          <BsFillBasketFill />
        </Basket>
        <Image
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="User Profile"
        />
        <Options className="options">
          <span>Basket</span>
          <span>Account</span>
          <span>Log out</span>
        </Options>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
