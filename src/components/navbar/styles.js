import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { breakpoints } from "../../theme";

export const Nav = styled.nav`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);

  @media ${breakpoints.sm} {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

export const Logo = styled(Link)`
  margin: 15px;
  color: #f0a04b;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 2px;

  @media ${breakpoints.xl} {
    font-size: 25px;
  }

  @media ${breakpoints.md} {
    font-size: 22px;
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  color: #000;
  margin: 13px;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #f0a04b;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    background: #666;
    width: 0;
    height: 2px;
    transition: all 0.45s;
  }

  &:hover::before {
    width: 100%;
  }
`;

export const Basket = styled(FaShoppingCart)`
  font-size: 1.7rem;
  margin-right: 15px;
`;
