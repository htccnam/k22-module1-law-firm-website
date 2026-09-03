import "./About.css";
import "./Footer.css";
import AboutImg from "../assets/png_about.png";

function About() {
    return (
        <div className="About-container">
            <div className="About-img-container">
                <img src={AboutImg} alt="ảnh about" className="About-img" />
            </div>
            <div className="about-imformation">
                <p className="about-tag">#About Us</p>
                <p className="about-imformation-high">
                    Get the Guidance, Support, and Counsel
                </p>
                <p className="description">
                    Every year hundreds of clients choose our firm because of
                    our dedication to advocating for our clients before, during
                    and after closing.
                </p>
                <div className="about-imformation__rate">
                    <div>
                        <p className="rate">1782</p>
                        <p className="rate-type">Law Cases</p>
                    </div>
                    <div>
                        <p className="rate">10+</p>
                        <p className="rate-type">Lawyer</p>
                    </div>
                    <div>
                        <p className="rate">98%</p>
                        <p className="rate-type">Happy Clients</p>
                    </div>
                </div>
                <button className="button">Learn More</button>
            </div>
        </div>
    );
}
export default About;
