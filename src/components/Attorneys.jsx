import "./Attorneys.css";
import lawyer1 from "../assets/lawyer1.png";
import lawyer2 from "../assets/lawyer2.png";
import lawyer3 from "../assets/lawyer3.png";
import lawyer4 from "../assets/lawyer4.png";
import lawyer5 from "../assets/lawyer5.png";
import lawyer6 from "../assets/lawyer6.png";

function Attorneys() {
    return (
        <div className="team-container">
            {/* phần giới thiệu */}
            <div className="team-intro">
                <p className="team-tag">#Meet With Lawyers</p>
                <h2 className="team-title">
                    Our team of experienced team more than $150 Million in
                    <br />
                    Settlements and Judgments for Our Clients
                </h2>
            </div>

            {/* danh sách luật sư */}
            <div className="team-grid">
                {/* Luật sư 1 */}
                <div className="team-card">
                    <div className="team-card-image">
                        <img
                            src={lawyer1}
                            alt="David Warner"
                            className="team-img"
                        />
                        <button className="team-card-overlay-btn">
                            View Profile
                        </button>
                    </div>
                    <p className="team-name">David Warner</p>
                    <p className="team-role">Attorney at Law</p>
                </div>

                {/* Luật sư 2 */}
                <div className="team-card">
                    <div className="team-card-image">
                        <img
                            src={lawyer2}
                            alt="Aaron Finch"
                            className="team-img"
                        />
                        <button className="team-card-overlay-btn">
                            View Profile
                        </button>
                    </div>
                    <p className="team-name">Aaron Finch</p>
                    <p className="team-role">Founding President</p>
                </div>

                {/* Luật sư 3 */}
                <div className="team-card">
                    <div className="team-card-image">
                        <img
                            src={lawyer3}
                            alt="Jamie Watts"
                            className="team-img"
                        />
                        <button className="team-card-overlay-btn">
                            View Profile
                        </button>
                    </div>
                    <p className="team-name">Jamie Watts</p>
                    <p className="team-role">Partner</p>
                </div>

                {/* Luật sư 4 */}
                <div className="team-card">
                    <div className="team-card-image">
                        <img
                            src={lawyer4}
                            alt="Ellyse Perry"
                            className="team-img"
                        />
                        <button className="team-card-overlay-btn">
                            View Profile
                        </button>
                    </div>
                    <p className="team-name">Ellyse Perry</p>
                    <p className="team-role">Associate Attorney</p>
                </div>

                {/* Luật sư 5 */}
                <div className="team-card">
                    <div className="team-card-image">
                        <img
                            src={lawyer5}
                            alt="Meg Lanning"
                            className="team-img"
                        />
                        <button className="team-card-overlay-btn">
                            View Profile
                        </button>
                    </div>
                    <p className="team-name">Meg Lanning</p>
                    <p className="team-role">Senior Partner</p>
                </div>

                {/* Luật sư 6 */}
                <div className="team-card">
                    <div className="team-card-image">
                        <img
                            src={lawyer6}
                            alt="Peter Siddle"
                            className="team-img"
                        />
                        <button className="team-card-overlay-btn">
                            View Profile
                        </button>
                    </div>
                    <p className="team-name">Peter Siddle</p>
                    <p className="team-role">Of Counsel</p>
                </div>
            </div>
            <button className="team-view-profile-btn">All Attorneys</button>
        </div>
    );
}

export default Attorneys;
