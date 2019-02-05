import React, {Component} from "react";
import "./product.scss";
import {Set} from "./set/set";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  };
  
  componentDidMount() {
    fetch("https://benuelbertran.github.io/nyam/data/productList.json")
      .then(response => response.json())
      .then(data => this.setState({products: data}));
  }
  
  render() {
    const {title} = this.props;
    const {products} = this.state;
    return (
      <section className="product main__section">
        <h2 className="title product__title">
          {title}
        </h2>
        <Set
          data={products}
        />
      </section>
    )
  }
}

export {Product}