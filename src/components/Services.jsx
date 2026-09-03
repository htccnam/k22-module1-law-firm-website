import "./Services.css";

import bg1Img from "../assets/png_card1.png";
import bg2Img from "../assets/png_card2.png";
import bg3Img from "../assets/png_card3.png";
import bg4Img from "../assets/png_card4.png";
import bg5Img from "../assets/png_card5.png";
import bg6Img from "../assets/png_card6.png";

function Services() {
    return (
        <div className="Services-container">
            <div className="services-header">
                <p className="services-tag">#Services</p>
                <h2 className="services-title">Our Practice Areas</h2>
                <p className="services-description">
                    Our Law Office provides a professional experience for all
                    our clients, helping them navigate their legal rights.
                </p>
            </div>

            <div className="services-grid">
                <div
                    className="service-card"
                    style={{
                        backgroundImage: `URL(${bg1Img})`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <button className="service-name-button">
                        Personal Injury Law
                    </button>
                </div>
                <div
                    className="service-card"
                    style={{
                        background: `url(${bg2Img})`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <button className="service-name-button">
                        Employment Law
                    </button>
                </div>
                <div
                    className="service-card"
                    style={{
                        background: `url(${bg3Img})`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <button className="service-name-button">
                        Immigration Law
                    </button>
                </div>
                <div
                    className="service-card"
                    style={{
                        background: `url(${bg4Img})`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <button className="service-name-button">Family Law</button>
                </div>
                <div
                    className="service-card"
                    style={{
                        background: `url(${bg5Img})`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <button className="service-name-button">Divorce Law</button>
                </div>
                <div
                    className="service-card"
                    style={{
                        background: `url(${bg6Img})`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <button className="service-name-button">
                        Property Law
                    </button>
                </div>
            </div>

            <button className="view-all-btn">View All</button>
        </div>
    );
}

export default Services;
