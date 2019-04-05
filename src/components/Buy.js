import React from 'react';
import PropTypes from 'prop-types';
import 'index.scss';

const Buy = (props) => {
  const {available, add, link, description, unavailable, isSelected, packHandler} = props;

  return (
    <div 
      className="buy pack__wrapper">
      {available && !isSelected &&
        <p className="buy__add">{add}
          <a 
            className="buy__link"
            href="./index.html" 
            onClick={packHandler} 
            onKeyPress={packHandler}>{link}
          </a>
        </p>}
      
      {available && isSelected && 
        <p className="buy__description">{description}</p>}
      
      {!available &&
        <p className="buy__unavailable">{unavailable}</p>}
    </div>
  )
};

Buy.propTypes = {
  add: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired, 
  available: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  unavailable: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  packHandler: PropTypes.func.isRequired
};

export default Buy;
