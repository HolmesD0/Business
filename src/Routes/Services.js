import Typography from "../Component/Typography";
import Service from "../Component/Service";
import { IconContext } from "react-icons";
import { FaHeartbeat, FaHandHoldingMedical, FaBuilding } from "react-icons/fa";
import "../Component/Cards.css";

function Services() {
  return (
    <>
      <Typography />
      <Service />
      <div className="txts">
        <div className="txt">
          <h2>Why Us?</h2>
          <p>
            Anything and everything, that helps your business grow via different
            online media.
          </p>
        </div>
        <ul className="tests">
          <li className="test">
            <IconContext.Provider value={{ size: "5rem", className: "logo" }}>
              <div>
                <FaHeartbeat />
              </div>
            </IconContext.Provider>
            <div>
              <h3>Clients love us!</h3>
              <p>
                We have helped clients from all over the world and from all
                walks of life to grow their business and do great things!
              </p>
            </div>
          </li>
          <li className="test">
            <IconContext.Provider value={{ size: "5rem", className: "logo" }}>
              <div>
                <FaHandHoldingMedical />
              </div>
            </IconContext.Provider>
            <div>
              <h3>Creative and Professional</h3>
              <p>
                We proud ourselves in being different and creative. We put our
                heart and soul into our work and enjoy every moment of it.
              </p>
            </div>
          </li>
          <li className="test">
            <IconContext.Provider value={{ size: "5rem", className: "logo" }}>
              <div>
                <FaBuilding />
              </div>
            </IconContext.Provider>
            <div>
              <h3>5 Years of Experience</h3>
              <p>
                Established in 2015, we have been killing it ever since!
                At-least that is what we want to believe.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Services;
