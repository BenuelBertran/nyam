import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import {Main} from "./components/main/main";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Main
    heading="Кошачий корм Нямушка"
  />,
  document.querySelector(".page__main")
);

serviceWorker.register();
