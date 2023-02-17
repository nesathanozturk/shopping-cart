import styled from "styled-components";

export const Section = styled.section`
  width: 90%;
  margin: 50px auto 60px auto;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 2.5rem;
  letter-spacing: 2px;
  text-align: center;
`;

export const Description = styled.p`
  color: #666;
  margin-bottom: 10px;
  font-size: 1rem;
  letter-spacing: 1px;
`;

export const Products = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 30px;
`;

export const ProductItem = styled.div`
  background-color: #fff;
  position: relative;
  width: 17rem;
  overflow: hidden;
  border-radius: 0.4rem;
  cursor: pointer;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  transition: 0.2s;

  &:hover {
    transform: translateY(-0.5%);
    box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.5);
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 20rem;
`;

export const CardContent = styled.div`
  padding: 0.4rem;
`;

export const CardTitle = styled.p`
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  color: #3d3d3d;
`;

export const CardPrice = styled.p`
  font-size: 1rem;
  letter-spacing: 0.1rem;
  color: #666;
`;

export const CardSale = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #f0a04b;
  color: #fff;
  padding: 10px;
  border-radius: 50%;
`;

export const Wrapper = styled.div``;
