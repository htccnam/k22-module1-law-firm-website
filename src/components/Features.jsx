import "./Features.css";
import featuresImg from "../assets/png_features.png";

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
        </div>
    );
}

export default Features;
