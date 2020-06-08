import React from 'react';
import { Link } from "react-router-dom";

import PRODUCTS from './assets/data/products';

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showCheckout: false };
    }

    removeFromCart(item) {
        this.props.removeFromCart(item);
    }

    showCheckout() {
        this.setState({ showCheckout: true });
    }

    getTotalAmount() {
        return (Math.round(
            this.props.items.reduce((sum, item) => { return sum + item.price }, 0) * 100
        ) / 100).toFixed(2);
    }

    render() {
        if (!this.props.items.length) return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <h2>Shopping cart is empty</h2>
                    </div>
                    <Link to="/" className="btn btn-outline-secondary">Back to shop</Link>
                </div>
            </div>
        )

        const checkout = this.state.showCheckout ? (
            <div className="row mt-2">
                <p className="lead">Please transfer <strong>${ this.getTotalAmount() }</strong> to the given account number.
                <br/>Title your transfer 'E-commerce zaliczenie'
                <br/>CH56 0483 5012 3456 7800</p>
            </div>
        ) : null;

        return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <h2>Shopping cart</h2>
                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price per unit</th>
                                    <th>#</th>
                                    <th>Total price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                { PRODUCTS.map(product => {
                                    if (this.props.items.find(item => item.id === product.id)) {
                                        const count = this.props.items.reduce((sum, item) => { return item.id === product.id ? sum + 1 : sum }, 0 );
                                        return (
                                            <tr key={product.id}>
                                                <td>{ product.name }</td>
                                                <td>${ product.price }</td>
                                                <td>{ count }</td>
                                                <td>${ ((product.price * count * 100) / 100).toFixed(2) }</td>
                                                <td>
                                                    <button onClick={ () => { this.removeFromCart(product) } } type="button" className="btn btn-sm btn-outline-secondary">Remove</button>
                                                </td>
                                            </tr>
                                        );
                                    } else return null;
                                }) }

                            </tbody>
                            </table>
                        </div>
                        <div className="btn-group mr-2">
                            <button onClick={ () => { this.showCheckout() } } type="button" className="btn btn-sm btn-outline-secondary">Checkout</button>
                            <Link to="/" className="btn btn-outline-secondary">Back to shop</Link>
                        </div>
                    </div>

                    { checkout }

                </div>
            </div>
        );
    }

}

export default Cart;