import {
  Section,
  Wrapper,
  Top,
  TitleBox,
  Title,
  TitleAlt,
  WhoWeAreTitle,
  WhoWeAreTitleAlt,
} from "./styles.jsx";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function AboutUs() {
  return (
    <Section>
      <Navbar />
      <Wrapper>
        <Top>
          <TitleBox>
            <Title>About Us</Title>
          </TitleBox>
          <div>
            <TitleAlt>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              modi nobis eos doloremque id facere ex, sed sint dolorem placeat
              maxime ducimus autem rem quidem.
            </TitleAlt>
          </div>
        </Top>
        <div>
          <TitleBox>
            <WhoWeAreTitle>Who We are?</WhoWeAreTitle>
          </TitleBox>
          <WhoWeAreTitleAlt>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis recusandae alias aspernatur et nostrum. Aspernatur error
            ea harum sint assumenda doloribus. Ducimus, ex sit ut numquam dicta
            deleniti pariatur eveniet. Laboriosam quasi vel porro consequuntur
            maxime nostrum quisquam voluptas? Quia labore nostrum dolorem
            consectetur ad quo delectus commodi enim iure amet, sequi itaque
            inventore, dolores praesentium, eos dolor optio esse? Aliquam
            aperiam at delectus, harum optio unde eius voluptatem, ratione neque
            deleniti reprehenderit! Quae quam doloribus quisquam laboriosam unde
            sint voluptatibus commodi nostrum, error, distinctio exercitationem
            molestias minima vitae non? Consequuntur, tenetur veritatis eius,
            expedita dolores non excepturi quam eligendi ipsa consequatur
            perspiciatis. Porro sint, quasi sequi doloribus ipsum expedita
            itaque aliquid et, dolor laborum, error cum delectus? Consectetur,
            rem! Aperiam consequatur odit dignissimos illum, aspernatur a porro
            assumenda quae, eos itaque iste dolores hic eum laborum amet
            dolorem, quos nemo quasi officiis praesentium fugiat commodi ab.
            Eos, iste voluptate. Natus ea cum tempora eos adipisci quisquam quos
            labore quo quas deleniti, necessitatibus accusamus nisi repellendus
            eum illo! Consectetur facere in rerum a similique. Eos esse mollitia
            cupiditate itaque beatae. Aliquam qui placeat sint omnis eaque. A
            tempore eius ea debitis laboriosam labore, earum totam est sunt
            tenetur! Eum aut, maxime voluptas saepe adipisci officiis? Tempora,
            ipsum. Pariatur, autem non? Cum iusto sed omnis ad ducimus maiores
            aperiam porro quas reiciendis magni earum quae impedit nobis
            eveniet, error dolorum nesciunt aut! A illum iusto ut magni nobis
            minima, dolores at. Ipsum dolores ipsa corrupti quibusdam
            consequatur, eligendi culpa modi vel debitis voluptatibus minima
            quos iusto iste! Inventore magni nostrum perferendis illum dolorum
            asperiores, dolorem minus nesciunt quod nulla id magnam. Natus
            doloremque aliquid voluptatum autem voluptatem quos commodi, nobis
            provident placeat laborum dolor quia harum eaque beatae incidunt
            adipisci est sequi inventore animi quas repellat architecto.
            Voluptates adipisci ipsum facilis.
          </WhoWeAreTitleAlt>
        </div>
      </Wrapper>
      <Footer />
    </Section>
  );
}

export default AboutUs;
