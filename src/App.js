import Home from "./pages/Home/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Home />
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
