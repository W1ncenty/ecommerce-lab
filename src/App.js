import React from 'react';
import Navbar from './navbar/navbar';

import { BrowserRouter, Route } from 'react-router-dom';

import ProductList from './product/list';
import ProductDetails from './product/details';
import Cart from './cart';

import PRODUCTS from './assets/data/products';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cart: [PRODUCTS[0], PRODUCTS[1], PRODUCTS[2]] };
    };

    addToCart(newItem) {
        const newCart = this.state.cart;
        newCart.push(newItem);
        this.setState({ cart: newCart });
    }

    removeFromCart(ItemToRemove) {
        const newCart = this.state.cart;
        newCart.splice(this.state.cart.indexOf(this.state.cart.find(item => item.id === ItemToRemove.id)), 1)
        this.setState({ cart: newCart });
    }

    render() {
        return (
            <BrowserRouter>
                <Navbar numberOfItems={ this.state.cart.length }/>
                <Route path='/' exact render={
                    (props) =>  <ProductList { ...props } addToCart={ this.addToCart.bind(this) }/>
                }/>
                <Route path='/details/:id' component={ ProductDetails }/>
                <Route path='/cart' render={
                    (props) => <Cart { ...props } items={ this.state.cart } removeFromCart={ this.removeFromCart.bind(this) } />
                }/>
            </BrowserRouter>
        );
    }
}

export default App;
