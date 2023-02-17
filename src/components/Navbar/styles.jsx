import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const NavHeader = styled.div`
  display: inline;
`;

export const Title = styled.div`
  margin: 15px;
  color: #f0a04b;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .link {
    color: #000;
    margin-right: 12px;
    font-size: 1.3rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #ccc;
    }
  }
`;

export const Basket = styled.span`
  background-color: #ccc;
  color: #fff;
  postion: relative;
  margin: 10px 5px 5px 5px;
  border-radius: 50%;
  padding: 7px 12px 4px 12px;
  font-size: 25px;
  cursor: pointer;
`;

export const Length = styled.span`
  margin-left: 10px;
  font-size: 1.5rem;
`;

export const Options = styled.div`
  background-color: #ccc;
  color: #fff;
  padding: 20px;
  display: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

export const Image = styled.img`
  width: 42px;
  height: 42px;
  margin: 13px 10px 10px 10px;
  border-radius: 50%;
  cursor: pointer;

  &:hover ~ ${Options} {
    position: absolute;
    top: 80px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
`;
