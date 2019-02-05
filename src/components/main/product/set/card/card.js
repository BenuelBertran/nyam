import React, {Component} from "react";
import "./card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    const {available, selected} = this.props;
    this.state = {
      isSelected: selected,
      isAvailable: available,
      isFocused: false
    }
  };
  
  focusOn = () => {
    this.setState ({
      isFocused: true
    })
  };
  
  focusOff = () => {
    this.setState ({
      isFocused: false
    })
  };

  cardHandler = () => {
    const {isSelected} = this.state;
    this.setState ({
      isSelected: !isSelected,
      isFocused: false
    })
  };

  buyButtonHandler = (evt) => {
    evt.preventDefault();
    this.setState ({
      isSelected: true
    })
  };

  onKeyPress = (evt) => {
    const {isSelected} = this.state;
    evt.preventDefault();
    if (evt.key === "Enter") {
      this.setState ({
        isSelected: !isSelected,
        isFocused: false
      })
    }
  }
  
  render() {
    const {label, question, title, filling, portionAmount, portion, mouseAmount, mouse, customer, quantity, units, add, link, description, over} = this.props;
    const {isAvailable, isSelected, isFocused} = this.state;
    return ( 
      <React.Fragment>
        <div className={!isAvailable             
          ? "card card--disabled set__card" 
          : isAvailable && !isSelected && isFocused 
          ? "card card--focused set__card" 
          : isSelected && isAvailable && !isFocused 
          ? "card card--selected set__card" 
          : isAvailable && isSelected && isFocused 
          ? "card card--selected card--selected--focused set__card" 
          : "card set__card"}  
          tabIndex="0" 
          onMouseEnter={this.focusOn}
          onMouseLeave={this.focusOff}
          onFocus={this.focusOn}  
          onBlur={this.focusOff}
          onClick={this.cardHandler}
          onKeyPress={this.onKeyPress}>
          <div className="card__lead">
            {isSelected && isFocused && isAvailable
            ? null 
            : <p className="card__label">{label}</p>}
            {isSelected && isAvailable && isFocused && 
            <p className="card__question">{question}</p>}
          </div>
          <div className="card__info">
            <h3 className={!isAvailable 
              ? "title card__title card__title--disabled"
              : "title card__title"}>{title}</h3>
            <p className={!isAvailable 
              ? "card__filling card__filling--disabled" 
              : "card__filling"}>{filling}</p>
            <div className="card__bonus">
              <p className="card__portion"><span className="card__portion-amount card__span">{portionAmount}</span>
              {portion}</p>
              <p className="card__mouse"><span className="card__mouse-amount card__span">{mouseAmount}</span>
              {mouse}</p>
              <p className="card__customer">{customer}</p>
            </div>
          </div>
            <div className={!isAvailable 
              ? "card__weight card__weight--disabled" 
              : isAvailable && !isSelected && isFocused 
              ? "card__weight card__weight--focused" 
              : isSelected && isAvailable && !isFocused 
              ? "card__weight card__weight--selected" 
              : isAvailable && isSelected && isFocused 
              ? "card__weight card__weight--selected card__weight--selected--focused" 
              : "card__weight"}>
            <p className="card__quantity">{quantity}</p>
            <p className="card__units">{units}</p>
          </div>
        </div>
        <div className="card__buy">
          {!isSelected && isAvailable && <p className="card__add">{add}
            <a className="card__link" href="./index.html" onClick={this.buyButtonHandler}> {link}</a>
          </p>}
          {isSelected && isAvailable && <p className="card__description">{description}</p>}
          {!isAvailable && <p className="card__over">{over}</p>}
        </div>
      </React.Fragment>
    )
  } 
};

export {Card};