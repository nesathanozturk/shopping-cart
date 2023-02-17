import { Section, Image, ErrorText, Text, Button } from "./styles";
import { Link } from "react-router-dom";

function NotFound404() {
  return (
    <Section>
      <Image src="https://i.ibb.co/W6tgcKQ/softcodeon.gif" />
      <ErrorText>
        Whoops, We can't seem to find the resource you're looking for.
      </ErrorText>
      <Text>Please check that the Web site address is spelled correctly.</Text>
      <Button>
        <Link className="error" href="/">
          Go to Homepage
        </Link>
      </Button>
    </Section>
  );
}

export default NotFound404;
