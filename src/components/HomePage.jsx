import "./HomePage.css";
// import anh
import HomePageImg from "../assets/png_homepage.png";
function HomePage() {
    return (
        <main className="container">
            <section className="information-page">
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
            </section>
            <section className="video-section">
                <img
                    src={HomePageImg}
                    alt="ảnh homepage"
                    className="video-section__img"
                />
            </section>
        </main>
    );
}
export default HomePage;
