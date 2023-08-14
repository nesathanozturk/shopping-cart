import styled from "styled-components";

import { breakpoints } from "../../theme";

export const Products = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 30px;
  flex-wrap: wrap;
  text-align: center;
`;

export const ProductItem = styled.div`
  background-color: #fff;
  position: relative;
  width: 15rem;
  overflow: hidden;
  border-radius: 0.4rem;
  cursor: pointer;
  box-shadow: 0 0.7rem 1rem rgba(0, 0, 0, 0.5);
  transition: 0.2s;

  &:hover {
    transform: translateY(-0.5%);
  }

  @media ${breakpoints.xl} {
    width: 10.53rem;
  }

  @media ${breakpoints.md} {
    width: 9rem;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 17rem;
`;

export const CardContent = styled.div`
  padding: 0.5rem;

  @media ${breakpoints.xl} {
    padding: 0.3rem;
  }

  @media ${breakpoints.md} {
    padding: 0.3rem;
  }
`;

export const CardTitle = styled.p`
  color: #3d3d3d;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;

  @media ${breakpoints.xl} {
    font-size: 1rem;
  }
`;

export const CardPrice = styled.p`
  color: #666;
  font-size: 1rem;
  letter-spacing: 0.1rem;

  @media ${breakpoints.xl} {
    font-size: 0.9rem;
  }
`;

export const CardButton = styled.button`
  background: #f0a04b;
  color: #fff;
  width: 10em;
  margin-bottom: 5px;
  padding: 12px 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.1s;

  &:hover {
    transform: scale(1.02);
    background: #d68e46;
  }

  @media ${breakpoints.xl} {
    width: 9em;
    padding: 10px 10px;
  }

  @media ${breakpoints.md} {
    width: 7.9em;
    padding: 8px 8px;
    font-size: 0.93rem;
  }
`;
