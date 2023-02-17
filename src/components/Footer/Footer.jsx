import { FooterContainer, FooterRow, Links, Ul, Li } from "./styles.jsx";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <FooterContainer>
      <FooterRow>
        <Links href="https://www.instagram.com/nesathanozturk/">
          <AiFillInstagram className="icon" />
        </Links>
        <Links href="https://github.com/nesathanozturk">
          <AiFillGithub className="icon" />
        </Links>
        <Links href="https://www.linkedin.com/in/nesathanozturk/">
          <AiFillLinkedin className="icon" />
        </Links>
      </FooterRow>
      <FooterRow>
        <Ul>
          <Li>
            <Links href="#">Contact Us</Links>
          </Li>
          <Li>
            <Links href="#">Services</Links>
          </Li>
          <Li>
            <Links href="#">Privacy & Politicy</Links>
          </Li>
          <Li>
            <Links href="#">Conditions</Links>
          </Li>
          <Li>
            <Links href="#">Carreer</Links>
          </Li>
        </Ul>
      </FooterRow>
      <FooterRow>
        Copyright &copy; 2023 Neşathan Öztürk - All rights reserved.
      </FooterRow>
    </FooterContainer>
  );
}

export default Footer;
