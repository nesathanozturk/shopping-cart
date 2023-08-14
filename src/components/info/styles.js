import styled from "styled-components";

import { breakpoints } from "../../theme";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleAlt = styled.h3`
  color: #666;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.2em;
  letter-spacing: 2px;
  text-align: center;
`;

export const Input = styled.input`
  background-color: #e6e6e6;
  color: #403866;
  width: 25rem;
  height: 42px;
  margin-bottom: 20px;
  padding: 0 20px 0 20px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  outline: none;

  &::placeholder {
    font-size: 1rem;
  }

  @media ${breakpoints.md} {
    width: 18rem;
  }
`;
