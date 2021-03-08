import React, { useEffect } from "react";
import { ReactComponent as Shape1 } from "../assets/svg/shape1.svg";
import { ReactComponent as Shape2 } from "../assets/svg/shape2.svg";
import Title from "../components/Title";

export default function Home() {
  const showShapes = () => {
    document.querySelector(".shape1").classList.add("show");
    setTimeout(() => {
      document.querySelector(".shape2").classList.add("show");
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".loading").classList.add("hide");
      setTimeout(() => {
        document.querySelector(".loading").classList.add("delete");
        document.querySelector(".title-container").classList.add("show");
        document.querySelector(".role-text").classList.add("show");
        setTimeout(() => {
          showShapes();
        }, 100);
      }, 500);
    }, 1500);
  }, []);

  return (
    <div className="home">
      <Shape1 />
      <Shape2 />
      <Title />
    </div>
  );
}
