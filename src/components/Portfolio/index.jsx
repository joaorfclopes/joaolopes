import React from "react";
import Fade from "react-reveal/Fade";
import slowj from "../../assets/slowj.svg";
import tile from "../../assets/tile-classics.svg";
import bhumi from "../../assets/bhumi.svg";
import dashboards from "../../assets/dashboards.svg";

export default class Portfolio extends React.Component {
  render() {
    return (
      <section>
        <div className="portfolio">
          <div className="l-container">
            <Fade bottom delay={300}>
              <div className="b-game-card">
                <a
                  href="https://slowj.now.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="b-game-card__cover"
                    style={{ backgroundColor: "#0a0a0a" }}
                  >
                    <img src={slowj} alt="slowj" />
                  </div>
                </a>
              </div>
            </Fade>
            <Fade bottom delay={600}>
              <div className="b-game-card">
                <a
                  href="https://tile-classics.joaorfclopes.now.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="b-game-card__cover"
                    style={{ backgroundColor: "#fde086" }}
                  >
                    <img src={tile} alt="tile" />
                  </div>
                </a>
              </div>
            </Fade>
            <Fade bottom delay={900}>
              <div className="b-game-card">
                <a
                  href="https://dashboards.joaorfclopes.now.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="b-game-card__cover"
                    style={{ backgroundColor: "#832001" }}
                  >
                    <img src={dashboards} alt="dashboards" />
                  </div>
                </a>
              </div>
            </Fade>
            <Fade bottom delay={1200}>
              <div className="b-game-card">
                <a
                  href="http://bhumi.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="b-game-card__cover"
                    style={{ backgroundColor: "#2a5555" }}
                  >
                    <img src={bhumi} alt="bhumi" />
                  </div>
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    );
  }
}
