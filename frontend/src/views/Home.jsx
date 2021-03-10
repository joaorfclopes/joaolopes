import React from "react";
import Title from "../components/Title";
import { ReactComponent as Cloud1 } from "../assets/svg/cloud1.svg";

export default function Home() {
  return (
    <section className="home">
      <Cloud1 />
      <Title sectionScroll="home-scroll" />
    </section>
  );
}
