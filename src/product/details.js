import React from 'react';
import { Link } from "react-router-dom";

import PRODUCTS from '../assets/data/products';

class ProductDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product: PRODUCTS.find(item => item.id === this.props.match.params.id)
        };
    }

    render() {
        if (!this.state.product) return (<span>loading</span>);
        return (
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal">{ this.state.product.name }</h1>
                    <p className="lead font-weight-normal">${ this.state.product.price }</p>
                    <Link to="/" className="btn btn-outline-secondary">Back to shop</Link>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        );
    }

}

export default ProductDetails;