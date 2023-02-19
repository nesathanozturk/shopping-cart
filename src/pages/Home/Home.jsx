import Navbar from "../../components/Navbar/Navbar";
import Preview from "../../components/Preview/Preview";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import Sale from "../../components/Sale/Sale";
import Footer from "../../components/Footer/Footer";
import MenWomen from "../../components/MenWomen/MenWomen";

function Home() {
  return (
    <>
      <Navbar />
      <Preview />
      <MenWomen />
      <NewArrivals />
      <Sale />
      <Footer />
    </>
  );
}

export default Home;
