import "./Awards.css";
import Award1 from "../assets/Award1.png";
import Award2 from "../assets/Award2.png";
import Award3 from "../assets/Award3.png";
import Award4 from "../assets/Award4.png";

function Awards() {
    return (
        <div className="awards-container">
            <div className="awards-header">
                <p className="awards-tag">#Awards</p>
                <h2 className="awards-title">Our Honors & Awards</h2>
            </div>

            <div className="awards-grid">
                {/* Giải thưởng 1 */}
                <div className="award-card">
                    <div className="award-image-wrapper">
                        <img
                            src={Award1}
                            alt="Social Justice"
                            className="award-img"
                        />
                    </div>
                </div>

                {/* Giải thưởng 2 */}
                <div className="award-card">
                    <div className="award-image-wrapper">
                        <img
                            src={Award2}
                            alt="Center for Juvenile Justice"
                            className="award-img"
                        />
                    </div>
                </div>

                {/* Giải thưởng 3 */}
                <div className="award-card">
                    <div className="award-image-wrapper">
                        <img
                            src={Award3}
                            alt="Without Borders"
                            className="award-img"
                        />
                    </div>
                </div>

                {/* Giải thưởng 4 */}
                <div className="award-card">
                    <div className="award-image-wrapper">
                        <img
                            src={Award4}
                            alt="Public Justice Award"
                            className="award-img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
