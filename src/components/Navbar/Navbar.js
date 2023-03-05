import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ basketItemsLength, setModal }) {
  return (
    <header>
      <nav>
        <a href="/">Shopping Cart</a>
        <ul>
          <li onClick={() => setModal(false)}>Products</li>
          <li>
            <FaShoppingCart className="icon" onClick={() => setModal(true)} />
            <span>{basketItemsLength}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
