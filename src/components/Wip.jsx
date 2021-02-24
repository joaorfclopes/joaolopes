import React, { useEffect } from "react";
import $ from "jquery";
import wip from "../assets/wip.svg";
import wipgif from "../assets/wip.gif";

export default function Wip() {
  useEffect(() => {
    setTimeout(() => {
      $(".wip-text").addClass("show");
    }, 200);
  }, []);

  return (
    <div className="wip">
      <h3 className="wip-text wip-title hide">
        <span>João Lopes</span>
      </h3>
      <object data={wip} type="image/svg+xml">
        <img src={wipgif} alt="wip" />
      </object>
      <h2 className="wip-text wip-desc hide">
        Website in development <span className="dot1">.</span>
        <span className="dot2">.</span>
        <span className="dot3">.</span>
      </h2>
    </div>
  );
}
