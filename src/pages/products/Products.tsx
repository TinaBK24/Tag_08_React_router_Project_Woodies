import { useNavigate } from "react-router-dom";
import "./Products.css"

const Products = () => {
    const navigate = useNavigate();

    const navigateToJenson = () => {
        navigate("/products/jenson");
    }

    return (
        <section className="products">
            <div className="page-header">
                <img src="./img/Icon.png" alt="" />
                <p>What we have</p>
                <div className="line"></div>
                <h1>Products</h1>
            </div>

            <div className="products-content">
                <div>
                    <img src="./img/Tisch.png" alt="tisch" />
                    <p>Jenson</p>
                    <button onClick={navigateToJenson} type="button">Shop now</button>
                </div>
                <div>
                    <img src="./img/Stuhl.png" alt="stuhl" />
                    <p>Deon</p>
                    <button type="button">Shop now</button>
                </div>
                <div>
                    <img src="./img/Schuesseln.png" alt="schuesseln" />
                    <p>Krisha</p>
                    <button type="button">Shop now</button>
                </div>
            </div>
        </section>
    );
}

export default Products;