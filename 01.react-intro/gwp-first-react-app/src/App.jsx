import "./App.css";
import MainButton from "./components/button";
import Card from "./components/card/Card";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import { getAllData } from "./services/api";
import { data as products } from "./services/data";

// let styleObj = {
//   color: "red",
//   backgroundColor: "green",
// };

function App() {
  getAllData();

  return (
    <div className="App">
      <Header />

      <div
        className="boxes"
        // style={{
        //   color: "white",
        //   backgroundColor: "teal",
        // }}
      >
        <div className="container">
          <h1>Hello React JS!</h1>

          <MainButton />

          <div className="cards" style={{ display: "flex", flexWrap: "wrap" }}>
            {products.map((item) => {
              return (
                <div id="card">
                  <h3>{item.title}</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <img src={item.imgUrl} alt="card" />
                </div>
              );
            })}
          </div>

          <hr />
          <Card />
        </div>
      </div>

      <hr />

      <Footer />
    </div>
  );
}

export default App;

// class, function comps
