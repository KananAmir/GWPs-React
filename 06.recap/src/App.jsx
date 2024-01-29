import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./layouts/header";
import CounterPage from "./pages/counter-page";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import NotFoundPage from "./pages/not-found-page";
import ProductsPage from "./pages/products-page";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/counter"} element={<CounterPage />} />
        <Route path={"/products"} element={<ProductsPage />} />

        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
