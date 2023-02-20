import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  Section,
  Container,
  Wrapper,
  Title,
  ImageContainer,
  Image,
  Username,
  ButtonContainer,
  Button,
} from "./styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/authSlice";
import profilepicture from "../../assets/images/profilepicture.png";

function Profile() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

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
          <Username>{user}</Username>
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
