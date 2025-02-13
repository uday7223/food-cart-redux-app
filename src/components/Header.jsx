import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../features/food/foodSlice';
import '../styles/header.css'; // Optional custom styles

const Header = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.food.searchTerm);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm header">
            <div className="container">
                {/* Logo */}
                <a className="navbar-brand fw-bold text-primary" href="/">
                    {/* <img
                        src={logo}
                        alt="Swiggy Logo"
                        className="me-2 logo"
                        style={{ height: '30px' }}
                    /> */}

                    <div className="logo px-2">
                        Hungry Bites🍴
                    </div>
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
                    <form className="d-flex ms-lg-3" onSubmit={(e) => e.preventDefault()}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search for food..."
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
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
