import React from "react";
import "./App.css";
import Movies from "./components/movies";
import Header from "./components/header";

function App() {
  return (
    <main className="container">
      <Header />
      <Movies />
    </main>
  );
}

export default App;
