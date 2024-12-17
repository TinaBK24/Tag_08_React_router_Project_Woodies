import "./Home.css";

const Home = () => {
    return (
        <section className="home gradient">
            <div>
                <p>Are you looking for <strong>woodden furniture</strong> for your place?</p>
                <h1>This is the Right Place</h1>
                <button type="button">Explore Categories</button>
            </div>
            <img src="./img/Home.png" alt="home" />
        </section>
    );
}

export default Home;