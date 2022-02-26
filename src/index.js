import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Routes/Home";
import Services from "./Routes/Services";
import Web from "./Routes/Web";
import App from "./Routes/App";
import Design from "./Routes/Design";
import Ads from "./Routes/Ads";
import About from "./Routes/About";
import Contact from "./Component/Contact";
import Subscribe from "./Component/Subscribe";
import DetailBar from "./Component/DetailBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function Nav() {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const [cdt, setCdt] = useState("containerN");
  const [chw, setChw] = useState("100%");
  const Animation = async (e) => {
    if (cdt === "containerN") {
      setChw("100vh");
      await delay(500);
      setCdt("containerN active");
    } else if (cdt === "containerN active") {
      setCdt("containerN");
      await delay(500);
      setChw("100%");
    }
  };
  const Main = async (e) => {
    if (cdt === "containerN active") {
      setCdt("containerN");
      await delay(500);
      setChw("100%");
    }
  };

  return (
    <BrowserRouter>
      <div className={cdt}>
        <div className="navbarN">
          <div className="menuN">
            <h3 className="logo">
              Omar<span>Mustafa</span>
            </h3>
            <div className="hamburger-menuN" onClick={Animation}>
              <div className="bar"></div>
            </div>
          </div>
        </div>

        <div className="main-containerN">
          <div className="main" style={{ height: chw }} onClick={Main}>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/WebDev" element={<Web />} />
              <Route path="/AppDev" element={<App />} />
              <Route path="/Design" element={<Design />} />
              <Route path="/Ads" element={<Ads />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
            <Subscribe />
            <DetailBar />
          </div>

          <div className="shadowN one"></div>
          <div className="shadowN two"></div>
        </div>

        <div className="links">
          <ul>
            <li>
              <Link to="/Home" className="stylea">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Services" className="styleb">
                Services
              </Link>
            </li>
            <li>
              <Link to="/WebDev" className="stylec">
                Web Dev
              </Link>
            </li>
            <li>
              <Link to="/AppDev" className="styled">
                App Dev
              </Link>
            </li>
            <li>
              <Link to="/Design" className="stylee">
                Design
              </Link>
            </li>
            <li>
              <Link to="/Ads" className="stylef">
                Ads
              </Link>
            </li>
            <li>
              <Link to="/About" className="styleg">
                About
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="styleh">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  );
}

class Business extends React.Component {
  render() {
    return <Nav />;
  }
}

const rootElement = document.getElementById("root");
render(<Business />, rootElement);
