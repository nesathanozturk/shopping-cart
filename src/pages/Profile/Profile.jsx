import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/authSlice";

import {
  Section,
  Container,
  Wrapper,
  Title,
  ImageContainer,
  Image,
  ButtonContainer,
  Button,
} from "./styles.jsx";
import profilepicture from "../../assets/images/profilepicture.png";

function Profile() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Section>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>Profile</Title>
          <ImageContainer className="image">
            <Image src={profilepicture} alt="Profile Picture" />
          </ImageContainer>
          <Title>Neşathan</Title>
          <ButtonContainer>
            <Button onClick={handleLogout}>Log out</Button>
          </ButtonContainer>
        </Wrapper>
      </Container>
      <Footer />
    </Section>
  );
}

export default Profile;
