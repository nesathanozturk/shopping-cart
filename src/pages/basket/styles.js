import styled from "styled-components";

import { breakpoints } from "../../theme";

export const Section = styled.section`
  background: #fff;
  max-width: 100%;
  margin-top: 20px;
  padding: 20px;
  border-radius: 12px;
  transition: 0.5s;
  position: relative;
`;

export const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ClearButton = styled.button`
  background: transparent;
  color: red;
  width: 120px;
  border: 2px solid red;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: red;
    color: #fff;
  }

  @media ${breakpoints.sm} {
    width: 100px;
    padding: 5px 5px;
  }
`;

export const Total = styled.p`
  margin-top: 10px;
  font-size: 1.4rem;
  text-align: right;

  @media ${breakpoints.sm} {
    font-size: 5.5vw;
  }
`;
