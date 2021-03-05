import React, { useEffect } from "react";
import { ReactComponent as Shape1 } from "../assets/svg/shape1.svg";
import { ReactComponent as Shape2 } from "../assets/svg/shape2.svg";

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
      <div className="title-container">
        <div className="box">
          <div className="title">
            <h1>João Lopes</h1>
          </div>
          <div className="role">
            <p className="role-text">Front-End Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
