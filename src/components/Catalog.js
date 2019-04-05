import React from 'react';
import PropTypes from 'prop-types';
import Pack from './Pack';
import 'index.scss';

const Catalog = (props) => {
  const {productsData} = props;
  const productsList = productsData.map(function(product) {
    return(
      <Pack
        key={product.id}
        available={product.available}
        filling={product.filling}
        portionAmount={product.portionAmount}
        portion={product.portion}
        mouseAmount={product.mouseAmount}
        mouse={product.mouse}
        customer={product.customer}
        quantity={product.quantity}
        units={product.units}
        description={product.description}
        unavailable={product.unavailable}
      />
    )
  });

  return (
    <ul className="catalog shop__list">
      {productsList}
    </ul>
  )
};

Catalog.propTypes = {
  productsData: PropTypes.arrayOf(PropTypes.shape ({
    id: PropTypes.number.isRequired,
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
  }))
};

export default Catalog;
