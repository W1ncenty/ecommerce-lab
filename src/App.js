import React from 'react';
import Navbar from './navbar/navbar';

import { BrowserRouter, Route } from 'react-router-dom';

import ProductList from './product/list';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cart: []};
    };

    addToCart(newItem) {
        if (!this.state.cart.find(item => item.id === newItem.id)) {
            const newCart = this.state.cart;
            newCart.push(newItem);
            this.setState({ cart: newCart });
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <Route path='/' exact render={
                    (props) =>  <ProductList {...props} addToCart={this.addToCart.bind(this)}/>
                }/>
                {/* <Route path='/product/:id' component={ ProductDetails }/> */}
                {/* <Route path='/cart' component={ Cart }/> */}
            </BrowserRouter>
        );
    }
}

export default App;
