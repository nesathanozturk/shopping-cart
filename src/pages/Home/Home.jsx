import Navbar from "../../components/Navbar/Navbar";
import Preview from "../../components/Preview/Preview";
import Orders from "../../components/Orders/Orders";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Preview />
      <Orders />
    </div>
  );
}

export default Home;
