import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { Button } from "react-bootstrap";
import { FaLaptop, FaMobileAlt, FaPenNib, FaAd } from "react-icons/fa";
import "./Cards.css";

function Cards() {
  return (
    <div className="txts">
      <div className="txt">
        <h2>What do we do?</h2>
        <p>
          Anything and everything, that helps your business grow via different
          online media.
        </p>
      </div>
      <ul className="tests">
        <li className="test">
          <IconContext.Provider value={{ size: "5rem", className: "logo" }}>
            <div>
              <FaLaptop />
            </div>
          </IconContext.Provider>
          <div>
            <h3>Web Development</h3>
            <p>
              We create optimized web experiences to bump your revenues and
              leave your customers amazed.
            </p>
          </div>
        </li>
        <li className="test">
          <IconContext.Provider value={{ size: "5rem", className: "logo" }}>
            <div>
              <FaMobileAlt />
            </div>
          </IconContext.Provider>
          <div>
            <h3>App Development</h3>
            <p>
              We take your ideas, turning them into reality and putting them in
              hands of your customers to stay connected.
            </p>
          </div>
        </li>
        <li className="test">
          <IconContext.Provider value={{ size: "5rem", className: "logo" }}>
            <div>
              <FaPenNib />
            </div>
          </IconContext.Provider>
          <div>
            <h3>Design</h3>
            <p>
              We design beautiful digital experiences that leave your customers
              amazed.
            </p>
          </div>
        </li>
        <li className="test">
          <IconContext.Provider value={{ size: "5rem", className: "logo" }}>
            <div>
              <FaAd />
            </div>
          </IconContext.Provider>
          <div>
            <h3>Digital Marketing</h3>
            <p>
              We believe in helping your business grow and reach new heights
              using the right digital channels out there.
            </p>
          </div>
        </li>
      </ul>
      <div className="txt">
        <Button variant="dark" size="lg">
          <Link
            to="/Services"
            style={{ textDecoration: "none", color: "white" }}
          >
            ALL OUR SERVICES
          </Link>
        </Button>
      </div>
      <div className="txt">
        <h2>We enjoy what we do!</h2>
        <p>
          We believe that every project and idea has a cause and we work for the
          cause to deliver the best possible results for the projects we work
          on. Our strengths are Design, Development and Marketing so we take
          ideas, turn them into reality and put them out in the digital space
          hoping to leave an impact.
        </p>
      </div>
      <div className="txt">
        <h1>Our Process</h1>
      </div>
    </div>
  );
}

export default Cards;
