import styled from "styled-components";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

import { breakpoints } from "../../theme";

export const BasketCard = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  transition: 0.5s;

  &:hover {
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 105px;
  height: 125px;
  object-fit: cover;
  margin-right: 20px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Price = styled.h3`
  font-size: 17px;
`;

export const Title = styled.p`
  margin: 10px 0;
`;

export const Buttons = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 5px 20px;
  background-color: #212121;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);

  @media ${breakpoints.lg} {
    padding: 2px 10px;
  }
`;

export const Button = styled.button`
  color: #fff;
  font-size: 25px;
`;

export const Amount = styled.span`
  padding: 5px;
  font-size: 1.1rem;
`;

export const Remove = styled(MdOutlineRemoveCircleOutline)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: red;
  font-size: 1.6rem;
`;
