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

function App() {
    return (
        <div className="app-container">
            {/* 2. Tích hợp Component Header vào đây */}
            <Header />

            {/* Nội dung phía dưới của trang web */}
            <HomePage />
            <About />
            <Services />
            <Features />
            <Attorneys />
            <Awards />
            <Footer />
        </div>
    );
}

export default App;
