import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
            <a href="index.html" className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
                <h2 className="mb-2 text-white">Logistica</h2>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="about.html" className="nav-item nav-link">About</a>
                    <a href="service.html" className="nav-item nav-link">Services</a>
                    <div className="nav-item dropdown">
                        <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu fade-up m-0">
                            <a href="price.html" className="dropdown-item">Pricing Plan</a>
                            <a href="feature.html" className="dropdown-item">Features</a>
                            <a href="quote.html" className="dropdown-item">Free Quote</a>
                            <a href="team.html" className="dropdown-item">Our Team</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="404.html" className="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <a href="/" className="nav-item nav-link">Contact</a>
                </div>
                <h4 className="m-0 pe-lg-5 d-none d-lg-block"><i className="fa fa-headphones text-primary me-3"></i>+012 345 6789</h4>
            </div>
        </nav>
    );
}

export default Nav;
