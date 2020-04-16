import React from "react";
import "./index.css";

// const p1 = require("./Preview.png");
// const p2 = require('./Preview 2.png');
// const p3 = require("./Preview 3.png");
// const p4 = require("./Preview.png");

const Preview = ({ name, p1, p2, p3 }) => {
  return (
    <div className="Pre">
      <h2>{name}</h2>
      <section className="preview">
        <a href="">
          <img src={p1} alt="" />
        </a>
        <a href="">
          <img src={p2} alt="" />
        </a>
        <a href="">
          <img src={p3} alt="" />
        </a>
        <a href="">
          <img src={p1} alt="" />
        </a>
        <a href="">
          <img src={p2} alt="" />
        </a>
        <a href="">
          <img src={p3} alt="" />
        </a>
        <a href="">
          <img src={p1} alt="" />
        </a>
        
      </section>
    </div>
  );
};

export default Preview;
