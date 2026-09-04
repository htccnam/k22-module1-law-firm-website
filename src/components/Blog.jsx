import "./Blog.css";

function Blog() {
    return (
        <div className="blog-container">
            <div className="blog-header">
                <p className="blog-tag">#Blog</p>
                <h2 className="blog-title">Latest Story & News</h2>
                <p className="blog-description">
                    We're always adding new content to help better inform our
                    clients on issues impacting their lives.
                </p>
            </div>

            <div className="blog-grid">
                {/* Bài viết 1 */}
                <div className="blog-card">
                    <div className="blog-image-wrapper">
                        <img src="" alt="Blog 1" className="blog-image" />
                    </div>
                    <div className="blog-content">
                        <div className="blog-author">
                            <div className="blog-author-avatar">
                                <img
                                    src=""
                                    alt="Mitchell Starc"
                                    className="author-avatar-img"
                                />
                            </div>
                            <div className="blog-author-info">
                                <p className="blog-author-name">
                                    Mitchell Starc
                                </p>
                                <p className="blog-author-role">
                                    Attorney at Law
                                </p>
                            </div>
                        </div>
                        <h3 className="blog-post-title">
                            5 Key Rules of Law in Our Society
                            <br />
                            Must Know in 2022
                        </h3>
                        <button className="blog-learn-more">Learn More</button>
                    </div>
                </div>

                {/* Bài viết 2 */}
                <div className="blog-card">
                    <div className="blog-image-wrapper">
                        <img src="" alt="Blog 2" className="blog-image" />
                    </div>
                    <div className="blog-content">
                        <div className="blog-author">
                            <div className="blog-author-avatar">
                                <img
                                    src=""
                                    alt="Mitchell Starc"
                                    className="author-avatar-img"
                                />
                            </div>
                            <div className="blog-author-info">
                                <p className="blog-author-name">
                                    Mitchell Starc
                                </p>
                                <p className="blog-author-role">
                                    Attorney at Law
                                </p>
                            </div>
                        </div>
                        <h3 className="blog-post-title">
                            5 Key Rules of Law in Our Society
                            <br />
                            Must Know in 2022
                        </h3>
                        <button className="blog-learn-more">Learn More</button>
                    </div>
                </div>

                {/* Bài viết 3 */}
                <div className="blog-card">
                    <div className="blog-image-wrapper">
                        <img src="" alt="Blog 3" className="blog-image" />
                    </div>
                    <div className="blog-content">
                        <div className="blog-author">
                            <div className="blog-author-avatar">
                                <img
                                    src=""
                                    alt="Mitchell Starc"
                                    className="author-avatar-img"
                                />
                            </div>
                            <div className="blog-author-info">
                                <p className="blog-author-name">
                                    Mitchell Starc
                                </p>
                                <p className="blog-author-role">
                                    Attorney at Law
                                </p>
                            </div>
                        </div>
                        <h3 className="blog-post-title">
                            5 Key Rules of Law in Our Society
                            <br />
                            Must Know in 2022
                        </h3>
                        <button className="blog-learn-more">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
