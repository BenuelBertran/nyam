import React, {Component} from "react";
import PropTypes from "prop-types";
import "./set.scss";
import {Card} from "./card/card";

class Set extends Component {
  render() {
    const {data} = this.props;
    const renderProducts = data.map(function(item) {
      return(
        <li className="set__item" key={item.id}>
          <Card
            label={item.label}
            question={item.question}
            title={item.title}
            filling={item.filling}
            portionAmount={item.portionAmount}
            portion={item.portion}
            mouseAmount={item.mouseAmount}
            mouse={item.mouse}
            customer={item.customer}
            quantity={item.quantity}
            units={item.units}
            add={item.add}
            link={item.link}
            description={item.description}
            over={item.over}
            available={item.available}
            selected={item.selected}  
          />
        </li>
      )
    });
    
    return (
      <ul className="set product__list">
        {renderProducts}
      </ul>
    )
  } 
};

Set.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape ({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    filling: PropTypes.string.isRequired,
    portionAmount: PropTypes.string,
    portion: PropTypes.string.isRequired,
    mouseAmount: PropTypes.string,
    mouse: PropTypes.string,
    customer: PropTypes.string,
    quantity: PropTypes.string.isRequired,
    units: PropTypes.string.isRequired,
    add: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    over: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired
  }))
};

export {Set};
