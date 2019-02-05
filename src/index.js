import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import {Main} from "./components/main/main";

ReactDOM.render(
  <Main
    heading="Кошачий корм Нямушка"
  />,
  document.querySelector(".page__main")
);
