import {
  Section,
  Info,
  Title,
  Description,
  Products,
  ProductItem,
  CardImg,
  CardContent,
  CardTitle,
  CardPrice,
} from "./styles.jsx";
import { products } from "../../assets/data";

function NewArrivals() {
  return (
    <Section>
      <div>
        <Info>
          <Title>New Arrivals</Title>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
            fugiat. Cumque ducimus sit quos corrupti.
          </Description>
        </Info>
        <Products>
          {products.slice(9, 12).map((product) => (
            <ProductItem key={product.id}>
              <div>
                <CardImg src={product.image} alt={product.title} />
                <CardContent>
                  <CardTitle>{product.title}</CardTitle>
                </CardContent>
                <CardContent>
                  <CardPrice>&#x24;{product.price}</CardPrice>
                </CardContent>
              </div>
            </ProductItem>
          ))}
        </Products>
      </div>
    </Section>
  );
}

export default NewArrivals;
