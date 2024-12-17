import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="line"></div>
                <img src="./img/Logo.png" alt="" />
                <a href="tel:+">(012) 8967453</a>
                <a href="mailto:woodies@gmail.com">woodies@gmail.com</a>
                <a href="http://">Jakarta, Indonesia</a>
                <p>© 2020 WOODIES</p>
            </div>
            <img className="footer-img" src="./img/Footer.png" alt="" />
        </footer>
    );
}

export default Footer;