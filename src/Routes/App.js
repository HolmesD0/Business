import Card from "../Component/Card";
import "../Component/Cards.css";

function App() {
  return (
    <>
      <Card />
      <div className="txts">
        <div className="txt">
          <h2>Your website is the face of your business!</h2>
          <p>
            We provide top quality website design and development services to
            help your brand get a better online presence. Our expert team of
            designers and developers create conversion optimized websites that
            not only look good but also convert your visitors into paying
            customers!
          </p>
        </div>
        <div className="txt">
          <img
            style={{ marginBottom: "2.5%" }}
            alt="Web"
            src="https://qph.fs.quoracdn.net/main-qimg-14a9f10d5a89bbb50e1840d31d9c4d3e"
          />
          <h2>What is the MERN Stack?</h2>
          <p>
            MERN Stack: MERN Stack is a Javascript Stack that is used for easier
            and faster deployment of full-stack web applications. MERN Stack
            comprises of 4 technologies namely:
            <ul style={{ marginTop: "2.5%" }} className="bullets">
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
            It is designed to make the development process smoother and easier.
            <br></br>
            Each of these 4 powerful technologies provides an end-to-end
            framework for the developers to work in and each of these
            technologies play a big part in the development of web applications.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
