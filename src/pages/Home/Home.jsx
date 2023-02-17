import Navbar from "../../components/Navbar/Navbar";
import Preview from "../../components/Preview/Preview";
import Orders from "../../components/Orders/Orders";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import Sale from "../../components/Sale/Sale";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Preview />
      <Orders />
      <NewArrivals />
      <Sale />
      <Footer />
    </div>
  );
}

export default Home;
