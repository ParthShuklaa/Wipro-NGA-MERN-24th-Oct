import React from "react";
import ReactDom from "react-dom";

const el = (
    <div title ="welcome to react"> 
    <h1>an introduction to react</h1>
    <p id =" introduction">
    <span className="text-bold">React</span>
    &ndsp;is a js library for building ui
    </p>
      </div>
);
ReactDom.render(el,document.getElementById('root'));

