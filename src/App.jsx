import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RaiseComplaint from "./components/RaiseComplaint";
import RateMess from "./components/RateMess";
import { Feedback } from "@mui/icons-material";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <Feedback /> */}
    </>
  );
}

export default App;
