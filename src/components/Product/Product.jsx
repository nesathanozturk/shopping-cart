import { useState } from "react";
import {
  Section,
  Info,
  Title,
  TitleAlt,
  Input,
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
  const [term, setTerm] = useState("");

  return (
    <Section>
      <div>
        <Info>
          <Title>Products</Title>
          <TitleAlt>What are you looking for?</TitleAlt>
          <Input
            type="text"
            placeholder="Search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </Info>
        <Products>
          {products
            .filter((product) => {
              // Filter products by title.
              if (term == "") {
                return product;
              } else if (
                product.title
                  .toLocaleLowerCase()
                  .includes(term.toLocaleLowerCase())
              ) {
                return product;
              }
            })
            .map((product) => (
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
            ))}
        </Products>
      </div>
    </Section>
  );
}

export default Product;
