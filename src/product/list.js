import React from 'react';
import { Redirect } from "react-router-dom";

import PRODUCTS from '../assets/data/products';

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { goToDetails: 0 }
    }

    addToCart(item) {
        this.props.addToCart(item);
    }

    viewDetails(id) {
        this.setState({ goToDetails: id });
    }

    render() {
        if (this.state.goToDetails > 0) {
            return <Redirect to={`/details/${this.state.goToDetails}`}/>
        }

        return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        
                        { PRODUCTS.map(product => (
                            <div key={ product.id } className="col-md-4">
                                <div className="card mb-4 shadow-sm">
                                    {/* TODO zdjęcia */}
                                    {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="200" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                                    <img width="100%" height="200" alt="" href="https://github.com/W1ncenty/ecommerce-lab/blob/master/src/assets/img/bacon.jpg"/>
                                    <div className="card-body">
                                        <p className="card-text">{ product.name }<small className="text-muted float-right">${ product.price }</small></p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button onClick={ () => { this.addToCart(product) } } type="button" className="btn btn-sm btn-outline-secondary">Add to cart</button>
                                                <button onClick={ () => { this.viewDetails(product.id) } } type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            </div>
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

