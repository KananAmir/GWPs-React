import "./App.scss";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import HomePage from "./pages/home-page";
import { getAllData } from "./services";
import { users } from "./data";
function App() {
  // getAllData("suppliers");

  let userName = "Jhon Doe";
  let age = 76;

  let cardTitle = "lorem ipsum";

  return (
    <>
      <Header />
      <hr />
      <HomePage
        userName={userName}
        age={age}
        cardTitle={cardTitle}
        users={users}
      />
      <hr />
      <Footer />
    </>
  );
}

export default App;

// function calcualteSquare(number) {
//   return number ** 2;
// }

// calcualteSquare(4); // 16
// calcualteSquare(7); // 49
