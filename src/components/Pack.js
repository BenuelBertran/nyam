import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Buy from './Buy';
import 'index.scss';

 class Pack extends Component {
  state = {
    isSelected: false,
    isFocused: false
  };
  
  //Mouse click or press enter to add chosen pack to basket
  packHandler = (e) => {
    const {isSelected} = this.state;

    e.preventDefault();
    if(e.type === 'click' || (e.type === 'keypress' && e.key === 'Enter')) {
      this.setState ({
        isSelected: !isSelected,
        isFocused: false
      });
    }
  };
  
  //Make card border lighter after hover/focus
  focusHandler = (e) => {
    const {isFocused, isSelected} = this.state;
    let card = e.currentTarget;
    let weight = card.querySelector(".card__weight");
    
    if (e.type === "mouseenter" || e.type === "focus") {
      if (isSelected) {
        card.classList.add("card--selected--focused");
        weight.classList.add("card__weight--selected--focused");
      } else if (!isFocused) {
        card.classList.add("card--focused");
        weight.classList.add("card__weight--focused");
      }
      this.setState ({
        isFocused: true
      });
    }
    
    if (e.type === "mouseleave" || e.type === "blur") {
      if (isSelected) {
        card.classList.remove("card--selected--focused");
        weight.classList.remove("card__weight--selected--focused");
      } else if (isFocused) {
        card.classList.remove("card--focused");
        weight.classList.remove("card__weight--focused");
      }
      this.setState ({
        isFocused: false
      });
    }
  };

  render() {
    const {available, filling, portionAmount, portion, mouseAmount, mouse, customer, quantity, units, description, unavailable} = this.props;
    const {isSelected, isFocused} = this.state;

    return (
      <li className="pack catalog__item">
        <Card
          label="Сказочное заморское яство"
          question="Котэ не одобряет?"
          title="Нямушка"
          available={available}
          filling={filling}
          portionAmount={portionAmount}
          portion={portion}
          mouseAmount={mouseAmount}
          mouse={mouse}
          customer={customer}
          quantity={quantity}
          units={units}
          isSelected={isSelected}
          isFocused={isFocused}
          packHandler={this.packHandler}
          focusHandler={this.focusHandler}
        />
        <Buy
          available={available}
          add="Чего сидишь? Порадуй котэ, "
          link="купи"
          description={description}
          unavailable={unavailable}
          isSelected={isSelected}
          packHandler={this.packHandler}
        />
      </li>
    )
  }
};

Pack.propTypes = {
  available: PropTypes.bool.isRequired,
  filling: PropTypes.string.isRequired,
  portionAmount: PropTypes.string,
  portion: PropTypes.string.isRequired,
  mouseAmount: PropTypes.string,
  mouse: PropTypes.string,
  customer: PropTypes.string,
  quantity: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  unavailable: PropTypes.string.isRequired
};

export default Pack;
