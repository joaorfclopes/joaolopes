import React from "react";
import { ReactComponent as Shape1 } from "../assets/svg/shape1.svg";
import { ReactComponent as Shape2 } from "../assets/svg/shape2.svg";
import Title from "../components/Title";

export default function Home() {
  return (
    <div className="view home">
      <Shape1 />
      <Shape2 />
      <Title />
    </div>
  );
}
