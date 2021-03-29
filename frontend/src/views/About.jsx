import React from "react";
import { ReactComponent as Cloud2 } from "../assets/svg/cloud2.svg";
import { ReactComponent as Tree1 } from "../assets/svg/tree1.svg";

export default function About() {
  return (
    <section className="about">
      <Cloud2 />
      <div data-aos="fade-up" data-aos-delay="800">
        <Tree1 />
      </div>
    </section>
  );
}
