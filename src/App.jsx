// src/App.css
import "./App.css";
//Import Header
import Header from "./components/Header";
//Import HomePage
import HomePage from "./components/HomePage";
// import Footer
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Attorneys from "./components/Attorneys";
import Awards from "./components/Awards";
import Testimonial from "./components/Testimonial.jsx";
// import status
import { useState } from "react";

function App() {
    const [activeSection, setActiveSection] = useState("home"); // 'home' là mặc định
    return (
        <div className="app-container">
            {/* 2. Tích hợp Component Header vào đây */}
            <Header onSectionChange={setActiveSection} />

            {/* Nội dung phía dưới của trang web */}
            {activeSection === "home" && <HomePage />}
            {activeSection === "about" && <About />}
            {activeSection === "services" && <Services />}
            {activeSection === "features" && <Features />}
            {activeSection === "attorneys" && <Attorneys />}
            {activeSection === "awards" && <Awards />}
            {activeSection === "testimonial" && <Testimonial />}
            <Footer />
        </div>
    );
}

export default App;
