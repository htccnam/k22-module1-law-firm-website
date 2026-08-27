// src/App.jsx
import "./App.css";
import Header from "./components/Header"; // 1. Import Header vừa tạo
import HomePage from "./components/HomePage";

function App() {
    return (
        <div className="app-container">
            {/* 2. Tích hợp Component Header vào đây */}
            <Header />

            {/* Nội dung phía dưới của trang web */}
            <HomePage />
        </div>
    );
}

export default App;
