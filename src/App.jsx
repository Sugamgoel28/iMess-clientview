import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RaiseComplaint from "./components/RaiseComplaint";
import RateMess from "./components/RateMess";
import { Feedback } from "@mui/icons-material";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
