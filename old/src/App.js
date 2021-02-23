import React from "react";
/* Styles */
import "./styles/styles.css";
/* Components */
import Progress from "./components/Progress";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.stopScroll();
    this.props.hideRoot();
    this.props.showLoader();
  }

  componentDidMount = () => {
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        setTimeout(() => {
          this.props.hideLoader();
          this.props.showRoot();
          setTimeout(() => {
            this.props.startScroll();
          }, 4200);
        }, 1500);
      }
    };
  };

  render = () => {
    return (
      <div className="App">
        <Progress />
        <Home />
        <Portfolio />
        <Contact />
      </div>
    );
  };
}
