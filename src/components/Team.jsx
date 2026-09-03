import "./Team.css";

function Team() {
    return (
        <div className="Team-container">
            <div className="team-header">
                <p className="team-tag">Meet With Lawyers</p>
                <h2 className="team-title">
                    Our team of experienced team more than $150Million in
                    Settlements and Judgments for Our Clients
                </h2>
                <button className="team-btn profile-btn">View Profile</button>
            </div>

            <div className="team-grid">
                <div className="team-card">
                    <div className="team-avatar">
                        <img
                            src="https://i.pravatar.cc/150?img=10"
                            alt="David Warner"
                        />
                    </div>
                    <h3 className="team-name">David Warner</h3>
                    <p className="team-title-text">Attorney at Law</p>
                </div>

                <div className="team-card">
                    <div className="team-avatar">
                        <img
                            src="https://i.pravatar.cc/150?img=11"
                            alt="Aaron Finch"
                        />
                    </div>
                    <h3 className="team-name">Aaron Finch</h3>
                    <p className="team-title-text">Founding President</p>
                </div>

                <div className="team-card">
                    <div className="team-avatar">
                        <img
                            src="https://i.pravatar.cc/150?img=12"
                            alt="Jamie Watts"
                        />
                    </div>
                    <h3 className="team-name">Jamie Watts</h3>
                    <p className="team-title-text">Partner</p>
                </div>

                <div className="team-card">
                    <div className="team-avatar">
                        <img
                            src="https://i.pravatar.cc/150?img=13"
                            alt="Ellyse Perry"
                        />
                    </div>
                    <h3 className="team-name">Ellyse Perry</h3>
                    <p className="team-title-text">Associate Attorney</p>
                </div>

                <div className="team-card">
                    <div className="team-avatar">
                        <img
                            src="https://i.pravatar.cc/150?img=14"
                            alt="Meg Lanning"
                        />
                    </div>
                    <h3 className="team-name">Meg Lanning</h3>
                    <p className="team-title-text">Senior Partner</p>
                </div>

                <div className="team-card">
                    <div className="team-avatar">
                        <img
                            src="https://i.pravatar.cc/150?img=15"
                            alt="Peter Siddle"
                        />
                    </div>
                    <h3 className="team-name">Peter Siddle</h3>
                    <p className="team-title-text">Of Counsel</p>
                </div>
            </div>

            <button className="team-btn all-btn">All Attorney</button>
        </div>
    );
}

export default Team;
