import React, { useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Menu from "./components/Menu";
import Home from "./views/Home";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
import Contacts from "./views/Contacts";
import { scrollTop, scrollDown, scrollUp } from "./utils";

function App() {
  const handlers = useSwipeable({
    onSwipedUp: (event) => scrollDown(event),
    onSwipedDown: (event) => scrollUp(event),
  });

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".loading").classList.add("hide");
      setTimeout(() => {
        document.querySelector(".loading").classList.add("delete");
        document.querySelector(".menu").classList.add("show");
        //showHome();
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
        <Portfolio />
        <Contacts />
      </div>
    </ReactScrollWheelHandler>
  );
}

export default App;
