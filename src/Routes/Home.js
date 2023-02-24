import Apps from "../Component/Apps";
import Cards from "../Component/Cards";
import Read from "../Component/Read";

function Home() {
  return (
    <>
      <div className="App">
        <Apps />
      </div>
      <Cards />
      <Read />
    </>
  );
}

export default Home;
