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

export const Products = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 30px;
  flex-wrap: wrap;
`;

export const ProductItem = styled.div`
  background-color: #fff;
  position: relative;
  width: 15rem;
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
  height: 17rem;
`;

export const CardContent = styled.div`
  padding: 0.5rem;
`;

export const CardTitle = styled.p`
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  color: #3d3d3d;
`;

export const CardPrice = styled.p`
  font-size: 1rem;
  letter-spacing: 0.1rem;
  color: #666;
`;

export const CardButton = styled.button`
  background: #008000;
  color: #fff;
  width: 100%;
  margin-bottom: 5px;
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 10px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #096b09;
  }
`;

export const Wrapper = styled.div``;
