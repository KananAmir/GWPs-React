import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/products-page";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/products" element={<ProductsPage/>} />

       
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
