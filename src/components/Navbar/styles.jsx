import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFillBasketFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export const Nav = styled.nav`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);

  .nav-toggle {
    display: none;
  }

  @media (max-width: 700px) {
    .nav-toggle {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .nav-items {
      background: #f0a04b;
      position: absolute;
      top: 90px;
      display: flex;
      flex-direction: column;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      z-index: 999;
      transition: all 0.45s;
    }

    .open {
      transform: translateX(0);
    }
  }
`;

export const NavItems = styled.div`
  @media (max-width: 700px) {
    .nav-items {
      background: #fff;
      position: absolute;
      top: 60px;
      display: flex;
      flex-direction: column;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      transition: all 0.45s;
    }
  }
`;

export const Logo = styled.span`
  margin: 15px;
  color: #f0a04b;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
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
    background: #000;
    width: 0;
    height: 2px;
    transition: all 0.45s;
  }

  &:hover::before {
    width: 100%;
  }

  @media (max-width: 700px) {
    color: #fff;
  }
`;

export const Basket = styled(BsFillBasketFill)`
  font-size: 1.39rem;
`;

export const Hamburger = styled(GiHamburgerMenu)`
  color: #000;
  margin-top: 5px;
  font-size: 30px;
`;

export const Close = styled(AiOutlineClose)`
  color: #000;
  margin-top: 5px;
  font-size: 30px;
`;
