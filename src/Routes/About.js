import Wave from "../Component/Wave";
import Read from "../Component/Read";
import Neo from "../Component/Neo";
import "../Component/Cards.css";

function About() {
  return (
    <>
      <Wave />
      <div className="txts">
        <div className="txt">
          <h2>We enjoy what we do!</h2>
          <p>
            We believe that every project and idea has a cause and we work for
            the cause to deliver the best possible results for the projects we
            work on. Our strengths are Design, Development and Marketing so we
            take ideas, turn them into reality and put them out in the digital
            space hoping to leave an impact.
          </p>
        </div>
        <div className="txt">
          <h2>Our Process</h2>
        </div>
      </div>
      <Read />
      <div className="txts">
        <div className="txt">
          <h2>Values we strive for</h2>
        </div>
      </div>
      <Neo />
    </>
  );
}

export default About;
