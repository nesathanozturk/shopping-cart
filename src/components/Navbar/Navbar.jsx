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
      <NavHeader>
        <Title>Ozturk.</Title>
      </NavHeader>
      <NavLinks>
        <Basket>
          <BsFillBasketFill />
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
