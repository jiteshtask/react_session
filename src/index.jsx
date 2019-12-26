import React from "react";
import {render} from "react-dom";

import PropsComponent from  './PropsComponent';

import * as style from "./index.css";


window.onload = () => {
  document.body.innerHTML = '<div id="root"/>';
  render(<PropsComponent />, document.getElementById("root"));
  module.hot.accept();
};
