import {
  Section,
  Wrapper,
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

function NewArrivals() {
  return (
    <Section>
      <Wrapper>
        <Info>
          <Title>New Arrivals</Title>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
            fugiat. Cumque ducimus sit quos corrupti.
          </Description>
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
                <CardPrice>$300</CardPrice>
              </CardContent>
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
                <CardPrice>$300</CardPrice>
              </CardContent>
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
                <CardPrice>$300</CardPrice>
              </CardContent>
            </div>
          </ProductItem>
        </Products>
      </Wrapper>
    </Section>
  );
}

export default NewArrivals;
