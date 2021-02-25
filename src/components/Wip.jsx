import React, { useEffect } from "react";
import $ from "jquery";
import wip from "../assets/wip.svg";
import wipgif from "../assets/wip.gif";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";

export default function Wip() {
  const showText = () => {
    setTimeout(() => {
      $(".wip-text").addClass("show");
    }, 800);
  };

  const showSocial = () => {
    setTimeout(() => {
      $(".social").addClass("show");
    }, 1200);
  };

  useEffect(() => {
    showText();
    showSocial();
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
      <div className="social hide">
        <a
          href="https://github.com/joaorfclopes"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/joaorfclopes/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          href="https://www.instagram.com/juaum.lopes/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100006059823061"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook />
        </a>
      </div>
    </div>
  );
}
