import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductItem from "../../components/ProductItem/ProductItem";
import Footer from "../../components/Footer/Footer";
import { products } from "../../assets/data";
import { Section, Info, Title, TitleAlt, Input, Items } from "./styles.jsx";

function Products() {
  const [term, setTerm] = useState("");

  return (
    <>
      <Navbar />
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
          <Items>
            {products
              .filter((product) => {
                // Filter products by title.
                if (term === "") {
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
                <ProductItem
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              ))}
          </Items>
        </div>
      </Section>
      <Footer />
    </>
  );
}

export default Products;
