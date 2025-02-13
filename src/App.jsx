import './App.scss';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ContactForm from "./components/ContactForm.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route
import ConfirmationPage from "./components/ConfirmationPage"; // Import the new confirmation page

function App() {
    return (
        <Router> {/* Wrap the entire app with BrowserRouter */}
            <div className="app">
                <Header />
                <main className="main-content">
                    <h1>MAIN</h1>
                    <Routes>
                        <Route path="/" element={<ContactForm />} /> {/* Route for the contact form */}
                        <Route path="/confirmation" element={<ConfirmationPage />} /> {/* Route for confirmation page */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
