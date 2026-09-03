import "./Features.css";
import featuresImg from "../assets/png_features.png";
import featuresImg1 from "../assets/png_features1.png";

function Features() {
    return (
        <div className="Features-container">
            <div className="features-img-container">
                <img
                    src={featuresImg}
                    alt="ảnh features"
                    className="features-img"
                />
            </div>
            <div className="features-information">
                <div className="features-header">
                    <p className="features-tag">#Features</p>
                    <h2 className="features-title">
                        A Heritage of Legal Talent in the US
                    </h2>
                    <p className="features-description">
                        When you are seeking the services of a nationally
                        recognized law firm, you have every right to expect an
                        extra measure of expertise.
                    </p>
                </div>
                <ul className="features-list">
                    <li>Fast and Responsive</li>
                    <li>Top Notch Communication</li>
                    <li>Emotional Intelligence</li>
                </ul>
            </div>
            {/* trang 2 */}

            <div className="features-content">
                <p className="features-tag">#Features</p>
                <h2 className="features-title">
                    Exceptional Scope and Diverse Practices
                </h2>
                <p className="features-description">
                    Our attorneys provide clients with extensive knowledge and
                    experience in each specialized area of practice we offer. We
                    are providing the best.
                </p>
                <button className="features-btn">Our Services</button>
            </div>
            <div className="features-img-container1">
                <img
                    src={featuresImg1}
                    alt="ảnh features"
                    className="features-img"
                />
            </div>
        </div>
    );
}

export default Features;
