import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";
import { Parallax, Background } from "react-parallax";

import MyNavbar from "./components/navbar/my-navbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.component";
import TitleMessage from "./components/title-message/title-message.component";

import "./App.css";
import About from "./pages/about/about.component";
import BackgroundImage from "./assets/img/parallax/background.webp";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      {/* About me section */}
      <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          // bgImage={require("./assets/img/parallax/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
           <Background className="custom-bg">
            <img src={BackgroundImage} alt="fill murray" />
            </Background>
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
      
        </Parallax>
      </div>
    </div>
  );
}

export default App;
