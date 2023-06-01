import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { MainRoutes as Routes } from "./routes";
import { UserProvider } from "./contexts/UserContext";
import { ContactProvider } from "./contexts/ContactContext";

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
      <UserProvider>
        <ContactProvider>
          <Routes />
        </ContactProvider>
      </UserProvider>
    </>
  );
}

export default App;
