import React from 'react';

import PRODUCTS from '../assets/data/products';

class ProductList extends React.Component {

    constructor(props) { super(props); }

    addToCart(item) {
        this.props.addToCart(item);
    }

    render() {
        return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        
                        { PRODUCTS.map(product => (
                            <div className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                    <div className="card-body">
                                    <p className="card-text">{ product.name }</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                        <button onClick={ () => { this.addToCart(product) } } type="button" className="btn btn-sm btn-outline-secondary">Add to cart</button>
                                        </div>
                                        <small className="text-muted">${ product.price }</small>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        )) }

                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;

