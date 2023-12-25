import "./App.css";
import CardComp from "./components/card";
import CarouselComp from "./components/carousel";
// import { products } from "./data";
import HomePage from "./pages/home-page";

import icon1 from "./assets/images/icon1.png";
import icon2 from "./assets/images/icon2.png";
import icon3 from "./assets/images/icon3.png";
import { useState } from "react";
import ChildComp from "./components/child-component";

//hooks - useState, ...
function App() {
  const [userName, setUserName] = useState("Nargiz");
  const [result, setResult] = useState(55);
  const [skills, setSkills] = useState([
    "sleep",
    "eat",
    "drink",
    "again sleep",
  ]);

  function getChildCompData(data) {
    console.log(data);
  }

  const products = [
    {
      title: "Strategy Planning",
      description:
        "There are many variations of passages of lorem Ipsum available but the new majority have suffered.",
      imgUrl: icon1,
    },
    {
      title: "Insurance Services",
      description:
        "There are many variations of passages of lorem Ipsum available but the new majority have suffered.",
      imgUrl: icon2,
    },
    {
      title: "Audit & Evaluation",
      description:
        "There are many variations of passages of lorem Ipsum available but the new majority have suffered.",
      imgUrl: icon3,
    },
  ];

  return (
    <>
      {/* <CarouselComp /> */}
      {/* <HomePage products={products} /> */}
      <HomePage products={products} userName={userName} skills={skills} />

      <ChildComp getChildCompData={getChildCompData} />
    </>
  );
}

export default App;
