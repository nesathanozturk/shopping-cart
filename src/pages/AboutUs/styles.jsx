import styled from "styled-components";
import { breakpoints } from "../../theme";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  text-align: center;
`;

export const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 80px;
`;

export const Top = styled.div`
  margin-bottom: 3rem;
`;

export const TitleBox = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.span`
  font-size: 3rem;
  letter-spacing: 0.3rem;
  border-bottom: 1px solid #000;

  @media ${breakpoints.xl} {
    font-size: 2.2rem;
  }
`;

export const TitleAlt = styled.p`
  color: #f0a04b;
  font-size: 1.4rem;

  @media ${breakpoints.xl} {
    font-size: 1.1rem;
  }
`;

export const WhoWeAreTitle = styled.span`
  margin-bottom: 20px;
  font-size: 3rem;
  letter-spacing: 0.3rem;
  border-bottom: 1px solid #000;

  @media ${breakpoints.xl} {
    font-size: 2.2rem;
  }
`;

export const WhoWeAreTitleAlt = styled.p`
  font-size: 1.1rem;
  text-align: left;
  line-height: 1.5;
  font-weight: 100;

  @media ${breakpoints.xl} {
    font-size: 1rem;
  }
`;
