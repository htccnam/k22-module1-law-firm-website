import "./Footer.css";

function Footer() {
    return (
        <footer className="Footer-container">
            <div className="imformation-page">
                <section className="section section__policy">
                    <p className="title">Justice</p>
                    <a href="" className="policy__link">
                        Privacy Policy
                    </a>
                    <a href="" className="policy__link">
                        Terms & Conditions
                    </a>
                    <a href="" className="policy__link">
                        Cookie Preferences
                    </a>
                </section>
                <section className="section section__pages">
                    <p className="title">Pages</p>
                    <a href="" className="policy__link">
                        Home
                    </a>
                    <a href="" className="policy__link">
                        About
                    </a>
                    <a href="" className="policy__link">
                        Practice Areas
                    </a>
                    <a href="" className="policy__link">
                        Attorneys
                    </a>
                </section>
                <section className="section section__contact">
                    <p className="title">Justice</p>
                    <a href="" className="policy__link">
                        50 Harrison Street, PH Suite 445 Hoboken, NJ 07030
                    </a>
                    <a href="tel:012345678" className="policy__link">
                        (000) 123-45678
                    </a>
                    <a
                        href="mailto:yourlawfirm22@gmail.com"
                        className="policy__link"
                    >
                        yourlawfirm22@gmail.com
                    </a>
                </section>
                <section className="section section__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29794.04037889418!2d105.75971934211884!3d21.02247855999237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4df3c6c329%3A0xd8e14fe61fd32604!2zQ8OUTkcgVFkgQ-G7lCBQSOG6pk4gQ8OUTkcgTkdI4buGIEdJw4FPIEThu6RDIEY4!5e0!3m2!1sen!2s!4v1787840918776!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowfullscreen
                        loading="lazy"
                        referrerpolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </section>
            </div>
            {/* logo footer */}
            <div className="copyright">
                <div className="logo-container">
                    <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="logo-container__svg"
                    >
                        <path
                            d="M20.8669 19.5038C21.7214 20.3495 22.5224 20.3495 23.27 19.5038L30.4793 12.4476C31.1736 11.6547 31.1736 10.8619 30.4793 10.0691C29.6783 9.27621 28.8773 9.27621 28.0762 10.0691L20.8669 2.9335C21.7214 2.19352 21.7214 1.42711 20.8669 0.634271C20.1193 -0.211424 19.345 -0.211424 18.5439 0.634271L11.3346 7.53197C10.5336 8.32481 10.5336 9.11765 11.3346 9.91049C12.0823 10.6505 12.8833 10.6505 13.7377 9.91049L16.1408 12.289L11.3346 16.9668C10.5336 16.2796 9.73256 16.2796 8.93152 16.9668L0.600775 25.2916C-0.200258 26.0844 -0.200258 26.8772 0.600775 27.6701L2.76357 30.3657C3.618 31.2114 4.41904 31.2114 5.16667 30.3657L13.5775 22.0409C13.8979 21.7238 14.0581 21.3406 14.0581 20.8913C14.0581 20.442 13.8979 20.0588 13.5775 19.7417L18.3036 14.9847L20.7067 17.3632C20.0659 17.9974 20.1193 18.711 20.8669 19.5038ZM18.5439 10.0691L16.1408 7.69054L18.5439 5.31202L25.6731 12.4476L23.27 14.8261L20.8669 12.4476L18.5439 10.0691Z"
                            fill="#ffffff"
                        />
                    </svg>
                    <div className="brand">
                        <span className="brand-name">Justice</span>
                        <span className="brand-type">Law Firm</span>
                        <span className="copyright">
                            Copyright © 2022 UI HUT All Rights Reserved{" "}
                        </span>
                    </div>
                </div>
                <div className="social-link-wrapper">
                    <a className="social-item">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a className="social-item">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a className="social-item">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a className="social-item">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
