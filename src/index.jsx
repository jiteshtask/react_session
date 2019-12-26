import React from "react";
import {render} from "react-dom";

import EventHandling from './EventHandling';
import ReactBuildingBlocks from './ReactBuildingBlocks';
import * as style from "./index.css";


window.onload = () => {
  document.body.innerHTML = '<div id="root"/>';
  render(<EventHandling />, document.getElementById("root"));
  module.hot.accept();
};
