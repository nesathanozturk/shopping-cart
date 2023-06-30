import { useState } from "react";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/product-card";
import { products } from "../../assets/data";
import { Section, Info, TitleAlt, Input, Items } from "./styles";

function Home() {
  const [term, setTerm] = useState("");

  return (
    <>
      <Navbar />
      <Section>
        <div>
          <Info>
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
                <ProductCard
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
    </>
  );
}

export default Home;
