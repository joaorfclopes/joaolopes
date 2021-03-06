import React, { useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Menu from "./components/Menu";
import Home from "./views/Home";
import About from "./views/About";
import { scrollTop, scrollDown, scrollUp, showHome } from "./utils";

function App() {
  const handlers = useSwipeable({
    onSwipedUp: (event) => scrollDown(event),
    onSwipedDown: (event) => scrollUp(event),
  });

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    setTimeout(() => {
      document.querySelector(".loading").classList.add("hide");
      setTimeout(() => {
        document.querySelector(".loading").classList.add("delete");
        document.querySelector(".menu").classList.add("show");
        showHome();
      }, 500);
    }, 1500);
    scrollTop();
  }, []);

  return (
    <ReactScrollWheelHandler
      upHandler={(event) => scrollUp(event)}
      downHandler={(event) => scrollDown(event)}
    >
      <div {...handlers} className="App">
        <Menu />
        <Home />
        <About />
      </div>
    </ReactScrollWheelHandler>
  );
}

export default App;
