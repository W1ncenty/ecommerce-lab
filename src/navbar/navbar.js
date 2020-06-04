import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <header>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container d-flex justify-content-between">
                        <a href="/" className="navbar-brand d-flex align-items-center"><strong>E-commerce</strong></a>
                        <a href="/cart" className="navbar-brand d-flex align-items-center">Koszyk</a>
                    </div>
                </div>
            </header>
        );
    }
}
    
export default Navbar;
