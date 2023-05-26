import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { MainRoutes as Routes } from "./routes";

function App() {
  return (
    <>
    <GlobalStyle />
    <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes />
    </>
  );
}

export default App;
