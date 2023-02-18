import styled from "styled-components";

export const Section = styled.section`
  margin-top: 50px;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  background: #fff;
  max-width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 6px;
  display: grid;
  margin: auto;
  padding: 50px 30px;
  border: 1px solid #e6e6e6;
  border-radius: 12px;

  @media (max-width: 943px) {
    flex-wrap: wrap;
  }
`;

export const Order = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Num = styled.h1`
  background: #f0a04b;
  color: #fff;
  width: 110px;
  height: 70px;
  margin-right: 20px;
  border-radius: 60%;
  line-height: 70px;
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

export const Description = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 25px;
`;
