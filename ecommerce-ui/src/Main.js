import React from 'react';
import ShoppingCart from "./ShoppingCart";
import Item from './Item';

export default class Main extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            items: require("./_data/airbnbs.json"),
            cartItems: [],
            total: 0
        }
    }

    onAddToCart = (item) =>
    {
        return () =>
        {
            const itemToAdd = item;
            let currentTotal = this.state.total;
            this.setState(
            {
                cartItems: [...this.state.cartItems, {title:itemToAdd.title, cost:itemToAdd.payment.cost}],
                total: currentTotal + itemToAdd.payment.cost
            })
        }
    }

    onRemoveFromCart = (index) =>
    {
        return () =>
        {
            let currentCartItems = this.state.cartItems;
            let currentTotal = this.state.total;

            if (index < currentCartItems.length)
            {
                const costToRemove = currentCartItems[index].cost;
                currentCartItems.splice(index, 1);

                this.setState(
                {
                    cartItems: currentCartItems,
                    total: currentTotal - costToRemove
                });
            }
        }
    }

    render() 
    {
        return (
            <div>
                <div className="content">
                    <div className="main">
                        <Item items={this.state.items} onAddToCart={this.onAddToCart}/>
                    </div>
                    <div className="sidebar">
                        <ShoppingCart cartItems={this.state.cartItems} onRemoveFromCart={this.onRemoveFromCart} total={this.state.total}/>
                    </div>
                </div>
            </div>
        );
    }
}
