import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 90vh;
  background: url("https://www.mrporter.com/cms/ycm/resource/blob/516956/afc2ed4911afe2c5b6ad4fee04381a84/9562a843-0ebd-4009-8a19-31fa2192dd87-data.jpg")
    center center/cover no-repeat;
  position: relative;
  color: #fff;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const TitleAlt = styled.p`
  font-size: 1.4rem;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background: transparent;
  color: #f2921d;
  padding: 15px 30px 15px 30px;
  font-size: 1.2rem;
  border: 1px solid #f2921d;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #f2921d;
    color: #fff;
  }
`;
