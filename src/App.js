import "./App.css";
import "./App.scss";
import { About, Header, Footer, Skills, Work } from "./container";
import { Navbar } from "./components";
import { useContext } from "react";
import { ThemeContext } from "./Context";
function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="app"
      style={{
        backgroundColor: darkMode ? "#222" : "",
        color: darkMode && "#fff",
      }}
    >
      <Navbar />
      <Header />
      <About
        style={{
          backgroundColor: "#222",
        }}
      />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default App;
