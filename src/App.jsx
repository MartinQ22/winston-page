import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";
import Logo from "./components/Logo.jsx";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <ItemListContainer text="Bienvenido a Winston!" />
      </main>
    </>
  );
}

export default App;
