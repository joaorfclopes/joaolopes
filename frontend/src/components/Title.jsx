import React from "react";

export default function Title(props) {
  return (
    <div className={`title-container ${props.sectionScroll}`}>
      <div className={`box ${props.sectionScroll}`}>
        <div className={`title ${props.sectionScroll}`}>
          <h1 className={`title-text ${props.sectionScroll}`}>João Lopes</h1>
        </div>
        <div className={`role ${props.sectionScroll}`}>
          <p className={`role-text ${props.sectionScroll}`}>
            Front-End Developer
          </p>
        </div>
      </div>
    </div>
  );
}
