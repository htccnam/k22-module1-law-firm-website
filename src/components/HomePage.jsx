import "./HomePage.css";
function HomePage() {
    return (
        <main className="container">
            <div className="information-page">
                <p className="information-page__p-ranking">
                    #1 Law Firm in New York
                </p>
                <p className="information-page__detail detail--strong">
                    Where People Meets Personalized Support.
                </p>
                <p className="information-page__detail ">
                    Where every injury is personal. We are a different kind of
                    law firm. Let our small, passionate group of trial lawyers
                    fight for your rights!
                </p>
                <button className="button">Get a Consultations</button>
            </div>
            <div className="information-video"></div>
        </main>
    );
}
export default HomePage;
