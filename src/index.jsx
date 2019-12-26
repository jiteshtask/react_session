import React from "react";
import {render} from "react-dom";

import Component from  './Component';

import * as style from "./index.css";


window.onload = () => {
  document.body.innerHTML = '<div id="root"/>';
  render(<Component />, document.getElementById("root"));
  module.hot.accept();
};
