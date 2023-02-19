import {
  Section,
  Info,
  Title,
  Products,
  ProductItem,
  CardImg,
  CardContent,
  CardTitle,
  CardPrice,
} from "./styles.jsx";
import { products } from "../../assets/data";

function MenWomen() {
  return (
    <Section>
      <div>
        <Info>
          <Title>Clothing For Men And Women</Title>
        </Info>
        <Products>
          {products.slice(4, 8).map((product) => (
            <ProductItem>
              <div>
                <CardImg src={product.image} alt={product.title} />
                <CardContent>
                  <CardTitle>{product.title}</CardTitle>
                </CardContent>
                <CardContent>
                  <CardPrice>{product.price}</CardPrice>
                </CardContent>
              </div>
            </ProductItem>
          ))}
        </Products>
      </div>
    </Section>
  );
}

export default MenWomen;
