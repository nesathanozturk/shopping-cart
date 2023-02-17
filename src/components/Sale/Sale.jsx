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
  CardSale,
} from "./styles.jsx";

function Sale() {
  return (
    <Section>
      <Wrapper>
        <Info>
          <Title>On Sale Products</Title>
        </Info>
        <Products>
          <ProductItem>
            <div>
              <CardImg
                src="https://media.istockphoto.com/id/1255917798/photo/white-marble-product-display-on-gray-background-with-modern-backdrops-studio-empty-pedestal.jpg?s=612x612&w=0&k=20&c=CiyNoKMt9WFOfhJ33KTuhw9WS5RJQAjCvZLu7pDA9A0="
                alt="Product"
              />
              <CardContent>
                <CardTitle>White Marble</CardTitle>
              </CardContent>
              <CardContent>
                <CardPrice>
                  <del>$300</del> <u>$200</u>
                </CardPrice>
              </CardContent>
              <CardSale>Sale!</CardSale>
            </div>
          </ProductItem>
          <ProductItem>
            <div>
              <CardImg
                src="https://media.istockphoto.com/id/1255917798/photo/white-marble-product-display-on-gray-background-with-modern-backdrops-studio-empty-pedestal.jpg?s=612x612&w=0&k=20&c=CiyNoKMt9WFOfhJ33KTuhw9WS5RJQAjCvZLu7pDA9A0="
                alt="Product"
              />
              <CardContent>
                <CardTitle>White Marble</CardTitle>
              </CardContent>
              <CardContent>
                <CardPrice>
                  <del>$300</del> <u>$200</u>
                </CardPrice>
              </CardContent>
              <CardSale>Sale!</CardSale>
            </div>
          </ProductItem>
          <ProductItem>
            <div>
              <CardImg
                src="https://media.istockphoto.com/id/1255917798/photo/white-marble-product-display-on-gray-background-with-modern-backdrops-studio-empty-pedestal.jpg?s=612x612&w=0&k=20&c=CiyNoKMt9WFOfhJ33KTuhw9WS5RJQAjCvZLu7pDA9A0="
                alt="Product"
              />
              <CardContent>
                <CardTitle>White Marble</CardTitle>
              </CardContent>
              <CardContent>
                <CardPrice>
                  <del>$300</del> <u>$200</u>
                </CardPrice>
              </CardContent>
              <CardSale>Sale!</CardSale>
            </div>
          </ProductItem>
        </Products>
      </Wrapper>
    </Section>
  );
}

export default Sale;
