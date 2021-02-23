import React from "react";

export default class Home extends React.Component {
  render = () => {
    return (
      <section>
        <div className="home">
          <div className="box">
            <div className="title">
              <span className="block"></span>
              <h1>
                João Lopes<span></span>
              </h1>
            </div>
            <div className="role">
              <div className="block"></div>
              <p>Software Developer</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
}
