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
  CardSale,
} from "./styles.jsx";
import { products } from "../../assets/data";

function Sale() {
  return (
    <Section>
      <div>
        <Info>
          <Title>On Sale Products</Title>
        </Info>
        <Products>
          {products.slice(1, 4).map((product) => (
            <ProductItem key={product.id}>
              <div>
                <CardImg src={product.image} alt={product.title} />
                <CardContent>
                  <CardTitle>{product.title}</CardTitle>
                </CardContent>
                <CardContent>
                  <CardPrice>&#x24;{product.price}</CardPrice>
                </CardContent>
                <CardSale>Sale!</CardSale>
              </div>
            </ProductItem>
          ))}
        </Products>
      </div>
    </Section>
  );
}

export default Sale;
