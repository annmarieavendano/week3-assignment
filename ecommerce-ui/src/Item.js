import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

export default class Item extends React.Component
 {
  render() 
  {
    if (this.props.items)
    {
      return this.props.items.map((item) => 
      {
          return (
              <div className="item">
                <div className="item-image">
                  <img alt={item.title} src={item.image}/>
                </div>
                <div className="item-title">{item.title}</div>
                <div className="item-description">${item.payment.cost}</div>
                <div className="item-button">
                  <button onClick={this.props.onAddToCart(item)}>Add to cart</button>
                </div>
              </div> 
          );
      });
    }
    return("");
  }
}

Item.propTypes = 
{
  items:PropTypes.arrayOf(PropTypes.shape({title:PropTypes.string,
                          image:PropTypes.string,
                          payment:PropTypes.shape({cost:PropTypes.number}),
                        })).isRequired,
  addToCart:PropTypes.func
};