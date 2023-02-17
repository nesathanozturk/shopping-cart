import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #f0a04b;
  padding: 20px 0px;
  text-align: center;

  @media (max-width: 720px) {
    padding: 5%;
    text-align: left;
  }
`;

export const FooterRow = styled.div`
  width: 100%;
  margin: 1% 0%;
  padding: 0.6% 0%;
  color: #fff;
  font-size: 1.1em;
`;

export const Links = styled.a`
  color: #fff;
  text-decoration: none;
  transition: 0.5s;

  .icon {
    margin-left: 10px;
    font-size: 2.6rem;
  }

  &:hover {
    color: #ccc;
  }
`;

export const Ul = styled.ul`
  width: 100%;
`;

export const Li = styled.li`
  display: inline-block;
  margin: 0 30px;

  @media (max-width: 720px) {
    display: block;
    margin: 10px 0;
    text-align: left;
  }
`;
