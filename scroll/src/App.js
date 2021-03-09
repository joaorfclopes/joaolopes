import React, { useEffect } from "react";
import $ from "jquery";
import { useSwipeable } from "react-swipeable";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Home from "./views/Home";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
import Contacts from "./views/Contacts";
import { options } from "./utils";

function App() {
  const scrollTop = () => {
    $("html, body").animate({
      scrollTop: 0,
    });
  };

  const scrollUp = (event) => {
    const srcElement = event.event
      ? event.event.srcElement.className
      : event.target.className;
    const index = options.indexOf(srcElement);
    const target = options[index - 1];
    try {
      $("html, body").animate(
        {
          scrollTop: $(`.${target}`).offset().top,
        },
        800
      );
    } catch (error) {}
  };

  const scrollDown = (event) => {
    const srcElement = event.event
      ? event.event.srcElement.className
      : event.target.className;
    const index = options.indexOf(srcElement);
    const target = options[index + 1];
    try {
      $("html, body").animate(
        {
          scrollTop: $(`.${target}`).offset().top,
        },
        800
      );
    } catch (error) {}
  };

  const handlers = useSwipeable({
    onSwipedUp: (event) => scrollDown(event),
    onSwipedDown: (event) => scrollUp(event),
  });

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <ReactScrollWheelHandler
      upHandler={(event) => scrollUp(event)}
      downHandler={(event) => scrollDown(event)}
    >
      <div {...handlers} className="App">
        <Home />
        <About />
        <Portfolio />
        <Contacts />
      </div>
    </ReactScrollWheelHandler>
  );
}

export default App;
