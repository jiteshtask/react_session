import React from "react";
import {render} from "react-dom";

import MyRoutes from './MyRoutes'; 
import * as style from "./index.css";


window.onload = () => {
  document.body.innerHTML = '<div id="root"/>';
  render(<MyRoutes />, document.getElementById("root"));
  module.hot.accept();
};
