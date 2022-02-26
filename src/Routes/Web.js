import Card from "../Component/Card";
import "../Component/Cards.css";

function Web() {
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
            src="https://res.cloudinary.com/keystone-demo/image/upload/v1565129461/sucpd5njo7ukftgqpscc.jpg"
          />
          <h2>What is the MERN Stack?</h2>
          <p>
            MERN stands for MongoDB, Express, React, Node, after the four key
            technologies that make up the stack.
            <ul style={{ marginTop: "2.5%" }} className="bullets">
              <li>MongoDB - document database</li>
              <li>Express(.js) - Node.js web framework</li>
              <li>React(.js) - a client-side JavaScript framework</li>
              <li>Node(.js) - the premier JavaScript web server</li>
            </ul>
            Express and Node make up the middle (application) tier. Express.js
            is a server-side web framework, and Node.js the popular and powerful
            JavaScript server platform. Regardless of which variant you choose,
            ME(RVA)N is the ideal approach to working with JavaScript and JSON,
            all the way through.
          </p>
        </div>
      </div>
    </>
  );
}

export default Web;
