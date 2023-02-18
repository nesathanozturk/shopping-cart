import {
  Section,
  SliderButtons,
  NextButton,
  PrevButton,
  Wrapper,
  Img,
  Title,
  TitleAlt,
  Button,
} from "./styles.jsx";
import { images } from "../../assets/data";
import {
  IoChevronForwardCircleOutline,
  IoChevronBackCircleOutline,
} from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <SliderButtons onClick={onClick}>
      <NextButton>
        <IoChevronForwardCircleOutline />
      </NextButton>
    </SliderButtons>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <SliderButtons onClick={onClick}>
      <PrevButton>
        <IoChevronBackCircleOutline />
      </PrevButton>
    </SliderButtons>
  );
};

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function Preview() {
  return (
    <Section>
      <Slider {...settings}>
        {images.map((image) => (
          <Img key={image.id} src={image.image} alt={image.alt} />
        ))}
      </Slider>
      <Wrapper>
        <Title>
          NEW Jack & Jones Jackets <br /> In-stock Now
        </Title>
        <TitleAlt>Shop now and get 15% off your order!</TitleAlt>
        <Button>Shop Now</Button>
      </Wrapper>
    </Section>
  );
}

export default Preview;
