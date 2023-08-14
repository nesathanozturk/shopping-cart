import { useState } from "react";

import Navbar from "../../components/navbar";
import Info from "../../components/info";
import ProductCard from "../../components/product-card";

import { products } from "../../assets/data";

import { Section, Items } from "./styles";

function Home() {
  const [term, setTerm] = useState("");

  const filteredProducts = products
    .filter((product) =>
      product.title.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    )
    .map((product) => <ProductCard key={product.id} product={product} />);

  return (
    <>
      <Navbar />
      <Section>
        <Info term={term} setTerm={setTerm} />
        <Items>{filteredProducts}</Items>
      </Section>
    </>
  );
}

export default Home;
