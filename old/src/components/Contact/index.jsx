import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Fade from "react-reveal/Fade";

export default class Contact extends React.Component {
  render() {
    return (
      <section>
        <div className="contact">
          <ul>
            <Fade bottom delay={300}>
              <li>
                <a
                  href="https://www.linkedin.com/in/joaorfclopes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="fa" icon={faLinkedinIn} />
                  <span> LinkedIn</span>
                </a>
              </li>
            </Fade>
            <Fade bottom delay={600}>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100006059823061"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="fa" icon={faFacebookF} />
                  <span> Facebook</span>
                </a>
              </li>
            </Fade>
            <Fade bottom delay={900}>
              <li>
                <a
                  href="https://github.com/joaorfclopes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="fa" icon={faGithub} />
                  <span> Github</span>
                </a>
              </li>
            </Fade>
            <Fade bottom delay={1200}>
              <li>
                <a
                  href="https://www.instagram.com/juaum.lopes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="fa" icon={faInstagram} />
                  <span> Instagram</span>
                </a>
              </li>
            </Fade>
          </ul>
        </div>
      </section>
    );
  }
}
