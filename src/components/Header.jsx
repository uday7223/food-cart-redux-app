import React from 'react';
import '../styles/header.css'; // Optional custom styles

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container">
                {/* Logo */}
                <a className="navbar-brand fw-bold text-primary" href="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
                        alt="Swiggy Logo"
                        className="me-2"
                        style={{ height: '30px' }}
                    />
                    Swiggy Clone
                </a>

                {/* Toggle button for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                Cart
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/profile">
                                Profile
                            </a>
                        </li>
                    </ul>

                    {/* Search Bar */}
                    <form className="d-flex ms-lg-3">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search for food..."
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-primary" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;
