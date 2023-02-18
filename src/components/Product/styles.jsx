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
  background: #0652dd;
  color: #fff;
  width: 10em;

  margin-bottom: 5px;
  padding: 12px 10px;
  border: none;
  border-radius: 100px;
  font-size: 1rem;
  font-weight: bold;
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Wrapper = styled.div``;
