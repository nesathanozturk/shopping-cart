import {
  Section,
  Wrapper,
  Info,
  Title,
  Products,
  ProductItem,
  CardImg,
  CardContent,
  CardTitle,
  CardPrice,
  CardButton,
} from "./styles.jsx";
import { products } from "../../assets/data";

function Product() {
  return (
    <Section>
      <Wrapper>
        <Info>
          <Title>Products</Title>
        </Info>
        <Products>
          {products.map((product) => (
            <>
              <ProductItem key={product.id}>
                <div>
                  <CardImg src={product.image} alt={product.title} />
                  <CardContent>
                    <CardTitle>{product.title}</CardTitle>
                  </CardContent>
                  <CardContent>
                    <CardPrice>${product.price}</CardPrice>
                  </CardContent>
                  <CardContent>
                    <CardButton>Add to Basket</CardButton>
                  </CardContent>
                </div>
              </ProductItem>
            </>
          ))}
        </Products>
      </Wrapper>
    </Section>
  );
}

export default Product;
