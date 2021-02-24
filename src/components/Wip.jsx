import React from "react";
import wip from "../assets/wip.svg";
import wipgif from "../assets/wip.gif";

export default function Wip() {
  return (
    <div className="wip">
      <h3>
        <span>João Lopes</span>
      </h3>
      <object data={wip} type="image/svg+xml">
        <img src={wipgif} alt="wip" />
      </object>
      <h2>
        Website in development <span className="dot1">.</span>
        <span className="dot2">.</span>
        <span className="dot3">.</span>
      </h2>
    </div>
  );
}
