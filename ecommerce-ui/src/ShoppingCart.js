import React from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends React.Component
{
    render() 
    {
        if (this.props.cartItems)
        {
            const cartItems = this.props.cartItems;
            const cartHeaderText = cartItems.length === 0 ? "Cart is empty." 
                                    : `You have ${cartItems.length} in cart.`

            
            const listItems = this.props.cartItems.map((item, index) => 
            {  
                const newKey = `${item.title}${index}`; 
                return <li key={newKey}>
                            {item.title}
                            <button onClick={this.props.onRemoveFromCart(index)}>Remove</button>
                        </li>
            });


            return (
                    <div className="cart">
                        <div className="cart-header">
                            {cartHeaderText}
                        </div>
                        <div className="cart-list">
                            <ul>{listItems}</ul>
                        </div>
                        <div className="cart-total">
                            <p>Total: {this.props.total}</p>
                        </div>
                    </div> 
                    ); 
        }

        return(""); 
    }
}

ShoppingCart.propTypes = 
{
  cartItems:PropTypes.arrayOf(PropTypes.shape({title:PropTypes.string,
                          payment:{cost:PropTypes.number},
                        })).isRequired,  
  removeFromCart:PropTypes.func,            
  total:PropTypes.number
};