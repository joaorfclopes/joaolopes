import React from "react";
import { ReactComponent as Cloud1 } from "../assets/svg/cloud1.svg";
import { ReactComponent as Cloud2 } from "../assets/svg/cloud2.svg";
import Title from "../components/Title";

export default function Home() {
  return (
    <section className="home">
      <Cloud1 />
      <Cloud2 />
      <Title sectionScroll="home-scroll" />
    </section>
  );
}
