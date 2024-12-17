import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {

    const location = useLocation();

    const isHomeActive = location.pathname === "/";

    return (
        <header className={isHomeActive ? "gradient" : ""}>
            <Link to="/" className="logo">
                <img src="./img/Logo.png" alt="logo" />
            </Link>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/products">Products</NavLink>
            </nav>
        </header>
    );
}

export default Header;