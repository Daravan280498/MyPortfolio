import Layout from "./components/Layout/Layout";
import TechStack from "./pages/TechStack/TechStack";
import Project from "./pages/Project/Project";
import About from "./pages/About/About"
import WorkExp from "./pages/WorkExp/WorkExp";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";
import ScrollTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Fade from "react-reveal/Fade";
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <TechStack />
          <Project />
          <WorkExp />
          <Education />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Fade left>
            <h4 className="text-center" style={{ color: "#1e2125" }}>
              Made by Daravan Singh &copy; 2024
            </h4>
          </Fade>
        </div>
      </div>
      <ScrollTop
        smooth
        color="#ff014f"
        style={{
          backgroundImage: "linear-gradient(145deg, #e2e8ec, #ffffff)",
          boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
          borderRadius: "80px",
        }} />
    </>
  );
}
export default App;

