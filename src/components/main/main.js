import React from "react";
import "./main.scss";
import {Product} from "./product/product";

const Main = (props) => (
  <React.Fragment>
    <h1 className="title main__title screen-readers-only">{props.heading}</h1>
    <Product
      title="Ты сегодня покормил кота?"
    />
  </React.Fragment>
)

export {Main}
