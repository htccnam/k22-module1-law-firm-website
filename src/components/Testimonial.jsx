import "./Testimonial.css";
import RateAuthor1 from "../assets/RateAuthor1.png";
import RateAuthor2 from "../assets/RateAuthor2.png";
import RateAuthor3 from "../assets/RateAuthor3.png";

function Testimonial() {
    return (
        <div className="testimonial-container">
            <div className="testimonial-header">
                <p className="testimonial-tag">#Testimonial</p>
                <h2 className="testimonial-title">
                    What Our Clients Say About Us
                </h2>
            </div>

            <div className="testimonial-grid">
                {/* Bài đánh giá 1 */}
                <div className="testimonial-card">
                    <div className="testimonial-avatar">
                        <img
                            src={RateAuthor1}
                            alt="Tam Southee"
                            className="avatar-img"
                        />
                    </div>
                    <div className="testimonial-content">
                        <p className="testimonial-quote">
                            "I am very satisfied with this Law Office. Very
                            professional, quick responses to calls, humble and
                            understanding. Marty has done a lot of work for me
                            and helped my friends and myself work through some
                            sticky issues. His staff is professional and hard
                            working! I recommend anyone who needs a lawyer to
                            Marty Meason and his team."
                        </p>
                        <p className="testimonial-author">Tam Southee</p>
                        <p className="testimonial-role">UI/UX Designer</p>
                    </div>
                </div>

                {/* Bài đánh giá 2 */}
                <div className="testimonial-card">
                    <div className="testimonial-avatar">
                        <img
                            src={RateAuthor2}
                            alt="Trent Boult"
                            className="avatar-img"
                        />
                    </div>
                    <div className="testimonial-content">
                        <p className="testimonial-quote">
                            "I am very satisfied with this Law Office. Very
                            professional, quick responses to calls, humble and
                            understanding. Marty has done a lot of work for me
                            and helped my friends and myself work through some
                            sticky issues. His staff is professional and hard
                            working! I recommend anyone who needs a lawyer to
                            Marty Meason and his team."
                        </p>
                        <p className="testimonial-author">Trent Boult</p>
                        <p className="testimonial-role">UI/UX Designer</p>
                    </div>
                </div>

                {/* Bài đánh giá 3 */}
                <div className="testimonial-card">
                    <div className="testimonial-avatar">
                        <img
                            src={RateAuthor3}
                            alt="Client"
                            className="avatar-img"
                        />
                    </div>
                    <div className="testimonial-content">
                        <p className="testimonial-quote">
                            "I am very satisfied with this Law Office. Very
                            professional, quick responses to calls, humble and
                            understanding. Marty has done a lot of work for me
                            and helped my friends and myself work through some
                            sticky issues. His staff is professional and hard
                            working! I recommend anyone who needs a lawyer to
                            Marty Meason and his team."
                        </p>
                        <p className="testimonial-author">Client</p>
                        <p className="testimonial-role">UI/UX Designer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
