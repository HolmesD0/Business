import "./Neo.scss";

function Neo() {
  return (
    <div className="Neo">
      <div className="container">
        <div className="cardeo">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="java">Great Customer Experience</h2>
              <p className="java">
                We believe in providing the absolute best experience to our
                customers!
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>01</h2>
          </div>
        </div>
        <div className="cardeo">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="python">Quality Standards</h2>
              <p className="python">
                We have our quality standards that we have never and will never
                compromise on.
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>02</h2>
          </div>
        </div>
        <div className="cardeo">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="cSharp">Have fun</h2>
              <p className="cSharp">We love what we do and do what we love!</p>
            </div>
          </div>
          <div className="face face2">
            <h2>03</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Neo;
