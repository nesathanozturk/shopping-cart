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
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/authSlice";

function Login() {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(login());
  };

  return (
    <Section>
      <Container>
        <Wrapper>
          <Title>Log in</Title>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <Input type="text" placeholder="Username" required />
            </InputContainer>
            <InputContainer>
              <Input type="password" placeholder="Password" required />
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
              <Button type="submit">Log In</Button>
            </ButtonContainer>
          </Form>
        </Wrapper>
      </Container>
    </Section>
  );
}

export default Login;
