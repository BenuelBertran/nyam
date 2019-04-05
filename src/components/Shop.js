import React from 'react';
import PropTypes from 'prop-types';
import Catalog from './Catalog';
import 'index.scss';

const Shop = (props) => {
  const {title, productsData} = props;

  return (
    <section className="shop main__section">
      <h2 className="title shop__title">
        {title}
      </h2>
      <Catalog
        productsData={productsData}
      />
    </section>
  )
};

Shop.propTypes = {
  title: PropTypes.string.isRequired,
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

export default Shop;
