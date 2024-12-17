import "./About.css"

const About = () => {
    return (
        <section className="about">
            <div className="page-header">
                <img src="./img/Icon.png" alt="" />
                <p>Who we are</p>
                <div className="line"></div>
                <h1>About Us</h1>
            </div>

            <div className="about-content">
                <img src="./img/About.png" alt="about" />
                <div>
                    <p><strong>WOODIES</strong> is the <strong>home of modern wooden furniture</strong></p>
                    <p>the answer to your need for furniture with shapes, sizes and colors. </p>
                </div>
            </div>
        </section>
    );
}

export default About;