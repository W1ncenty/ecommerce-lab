import React from 'react';

import PRODUCTS from './assets/data/products';

class Cart extends React.Component {

    constructor(props) {
        super(props);
    }

    removeFromCart(item) {
        this.props.removeFromCart(item);
    }

    render() {
        if (!this.props.items.length) return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <h2>Shopping cart is empty</h2>
                    </div>
                </div>
            </div>
        )

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
                                            <tr>
                                                <td>{ product.name }</td>
                                                <td>${ product.price }</td>
                                                <td>{ count }</td>
                                                <td>${ product.price * count }</td>
                                                <td>
                                                    <button onClick={ () => { this.removeFromCart(product) } } type="button" class="btn btn-sm btn-outline-secondary">Remove</button>
                                                </td>
                                            </tr>
                                        );
                                    } else return null;
                                }) }

                            </tbody>
                            </table>
                        </div>

                        <div class="btn-group mr-2">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Checkout</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}

export default Cart;