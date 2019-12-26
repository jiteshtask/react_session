import React from "react";
import {render} from "react-dom";

import AddingStateToComponent from './AddingStateToComponent';
import * as style from "./index.css";


window.onload = () => {
  document.body.innerHTML = '<div id="root"/>';
  render(<AddingStateToComponent />, document.getElementById("root"));
  module.hot.accept();
};
