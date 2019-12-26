import React from "react";
import {render} from "react-dom";

import LifeCycle from './LifeCycle';
import * as style from "./index.css";


window.onload = () => {
  document.body.innerHTML = '<div id="root"/>';
  render(<LifeCycle />, document.getElementById("root"));
  module.hot.accept();
};
