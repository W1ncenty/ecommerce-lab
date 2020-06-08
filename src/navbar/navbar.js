import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {

    render() {
        return (
            <header>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container d-flex justify-content-between">
                        <Link to="/" className="navbar-brand d-flex align-items-center"><strong>E-commerce</strong></Link>
                        <Link to="/cart" className="navbar-brand d-flex align-items-center">Your Cart ({this.props.numberOfItems})</Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbar;
