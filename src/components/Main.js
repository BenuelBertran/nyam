import React from 'react';
import PropTypes from 'prop-types';
import Shop from './Shop';
import 'index.scss';

const Main = (props) => {
  const {header, productsData} = props;

  return (
    <main className="main page__main">
      <h1 className="title main__title screen-readers-only">{header}</h1>
      <Shop
        title="Ты сегодня покормил кота?"
        productsData={productsData}
      />
    </main>
  )
};

Main.propTypes = {
  header: PropTypes.string.isRequired,
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

export default Main;
