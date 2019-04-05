import React from 'react';
import PropTypes from 'prop-types';
import smallCat from 'images/card-bg@1x.png';
import smallCatW from 'images/card-bg@1x.webp';
import bigCat from 'images/card-bg@2x.png';
import bigCatW from 'images/card-bg@2x.webp';
import 'index.scss';

const Card = (props) => {
  const {label, question, title, available, filling, portionAmount, portion, mouseAmount, mouse, customer, quantity, units, isSelected, isFocused, packHandler, focusHandler} = props;

  return (
    <div 
      className={available && !isSelected
        ? "card pack__wrapper"
        : available && isSelected
        ? "card card--selected pack__wrapper"
        : "card card--disabled pack__wrapper"}
      tabIndex="0"
      onMouseEnter={available ? focusHandler : null}
      onMouseLeave={available ? focusHandler : null}
      onFocus={available ? focusHandler : null}
      onBlur={available ? focusHandler : null}
      onClick={available ? packHandler : null}
      onKeyPress={available ? packHandler  : null}>
      
      {isSelected && isFocused
        ? null 
        : <p className="card__lead">{label}</p>}
      
      {isSelected && isFocused &&
        <p className="card__lead card__lead--pink">{question}</p>}
      
      <h3 className={available
        ? "title card__title"
        : "title card__title card__title--disabled"}>{title}
      </h3>
      
      <p className={available
        ? "card__filling"
        : "card__filling card__filling--disabled"}>{filling}
      </p>
      
      <p className="card__set">
        <b>{portionAmount}</b>{portion}<br/><b>{mouseAmount}</b>{mouse}<br/>{customer}
      </p>
      
      <div 
        className={available  && !isSelected
          ? "card__weight"
          : available && isSelected
          ? "card__weight card__weight--selected"
          : "card__weight card__weight--disabled"}>
        
        <p className="card__quantity">{quantity}</p>
        <p className="card__units">{units}</p>
      </div>
      
      <picture className="card__picture">
        <source 
          className="card__source" 
          type="image/webp" 
          srcSet={`${smallCatW} 1x, ${bigCatW} 2x`}>
        </source>
        <img 
          className={available
            ? "card__image"
            : "card__image card__image--disabled"}
          src={`${smallCat} 1x`}
          srcSet={`${bigCat} 2x`}
          width="298"
          height="267"
          alt="Довольный кот">
        </img>
      </picture>
    </div>
  )
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
  filling: PropTypes.string.isRequired,
  portionAmount: PropTypes.string,
  portion: PropTypes.string.isRequired,
  mouseAmount: PropTypes.string,
  mouse: PropTypes.string,
  customer: PropTypes.string,
  quantity: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isFocused: PropTypes.bool.isRequired,
  packHandler: PropTypes.func.isRequired,
  focusHandler: PropTypes.func.isRequired
};

export default Card;
