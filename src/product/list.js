import React from 'react';
import { Redirect } from "react-router-dom";

import PRODUCTS from '../assets/data/products';

const bacon = require('../assets/img/bacon.jpg');
const fivers = require('../assets/img/fivers.jpg');
const letter = require('../assets/img/letter.jpg');
const nothing = require('../assets/img/nothing.jpg');
const pizza = require('../assets/img/pizza.jpg');
const shoes = require('../assets/img/shoes.jpg');
const surgery = require('../assets/img/surgery.jpg');
const welcome = require('../assets/img/welcome.jpg');

const IMAGES = ['', bacon, fivers, letter, nothing, pizza, shoes, surgery, welcome];

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
                                    <img width="100%" height="200" alt="" src={IMAGES[product.id]} />
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

