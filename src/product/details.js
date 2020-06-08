import React from 'react';

// import PRODUCTS from '../assets/data/products';

class ProductDetails extends React.Component {

    // constructor(props) {
    //     super(props);
    //     // TODO ogarnąć na stronie którego produktu jesteśmy i wypełnić ekran danymi
    // }

    render() {
        return (
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal">Punny headline</h1>
                    <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                    <a href="www.google.com" className="btn btn-outline-secondary">Coming soon</a> {/* todo */}
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        );
    }

}

export default ProductDetails;