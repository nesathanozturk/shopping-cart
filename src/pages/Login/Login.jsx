import {
  Section,
  Container,
  Wrapper,
  Form,
  InputContainer,
  Title,
  Help,
  Input,
  CheckboxContainer,
  Label,
  Link,
  ButtonContainer,
  Button,
} from "./styles.jsx";
import Footer from "../../components/Footer/Footer";

function Login() {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Title>Log in</Title>
          <Form>
            <InputContainer>
              <Input type="text" placeholder="Username" />
            </InputContainer>
            <InputContainer>
              <Input type="password" placeholder="Password" />
            </InputContainer>
            <Help>
              <CheckboxContainer>
                <input type="checkbox" name="checkbox" />
                <Label>Remember me</Label>
              </CheckboxContainer>
              <div>
                <Link href="/">Forgot?</Link>
              </div>
            </Help>
            <ButtonContainer>
              <Button type="button">Log In</Button>
            </ButtonContainer>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </Section>
  );
}

export default Login;
