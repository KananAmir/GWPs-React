import { useState } from "react";

import "./App.css";
import PrimaryButton from "./components/button";

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <PrimaryButton text={"Sign In"} bg={"red"} />
      <hr />
      <PrimaryButton text={"Sign Up"} />
    </>
  );
}

export default App;
