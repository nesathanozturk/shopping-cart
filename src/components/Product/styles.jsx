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
  width: 30%;
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
  color: #3d3d3d;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
`;

export const CardPrice = styled.p`
  color: #666;
  font-size: 1rem;
  letter-spacing: 0.1rem;
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
`;
