import React from "react";
import {render} from "react-dom";

import App from "./App";
import LifeCycle from './LifeCycle';
import Component from  './Component';
import AddingStateToComponent from './AddingStateToComponent';
import EventHandling from './EventHandling';
import ReactBuildingBlocks from './ReactBuildingBlocks';
import MyRoutes from './AppRoutes'
import DefaultProps from './DefaultProps';
import * as style from "./index.css";


window.onload = () => {
  document.body.innerHTML = '<div id="root"/>';
  render(<MyRoutes />, document.getElementById("root"));
  module.hot.accept();
};
