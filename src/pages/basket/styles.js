import styled from "styled-components";
import { RiErrorWarningFill } from "react-icons/ri";
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

export const WarningContainer = styled.div`
  background: #feebc8;
  width: 100%;
  display: flex;
  padding: 15px;
`;

export const WarningText = styled.p`
  font-size: 1.4rem;

  @media ${breakpoints.sm} {
    font-size: 5.5vw;
  }
`;

export const WarningIcon = styled(RiErrorWarningFill)`
  color: #dd6b20;
  margin-right: 10px;
`;
