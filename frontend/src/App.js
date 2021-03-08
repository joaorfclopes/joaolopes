import React, { useEffect } from "react";
import Menu from "./components/Menu";
import Home from "./views/Home";

function App() {
  const showHome = () => {
    document.querySelector(".title-container").classList.add("show");
    document.querySelector(".role-text").classList.add("show");
    setTimeout(() => {
      document.querySelector(".shape1").classList.add("show");
      setTimeout(() => {
        document.querySelector(".shape2").classList.add("show");
      }, 300);
    }, 200);
  };

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".loading").classList.add("hide");
      setTimeout(() => {
        document.querySelector(".loading").classList.add("delete");
        document.querySelector(".menu").classList.add("show");
        showHome();
      }, 500);
    }, 1500);
  }, []);

  return (
    <div className="App">
      <Menu />
      <Home />
    </div>
  );
}

export default App;
