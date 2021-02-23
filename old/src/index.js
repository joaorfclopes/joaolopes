import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import $ from "jquery";

const body = document.getElementsByTagName("body")[0];
const stopScroll = () => (body.style.overflow = "hidden");
const startScroll = () => (body.style.overflow = "auto");

const loader = $(".loader");
const showLoader = () => loader.fadeIn();
const hideLoader = () => loader.fadeOut();

const root = $("#root");
const showRoot = () => root.fadeIn();
const hideRoot = () => root.fadeOut();

ReactDOM.render(
  <React.StrictMode>
    <App
      stopScroll={stopScroll}
      startScroll={startScroll}
      hideLoader={hideLoader}
      showLoader={showLoader}
      showRoot={showRoot}
      hideRoot={hideRoot}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
