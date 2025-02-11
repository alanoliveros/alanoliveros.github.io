import './App.scss'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ContactForm from "./components/ContactForm.jsx";

function App() {

    return (
        <div className="app">
            <Header/>
            <main className="main-content">
                <h1>MAIN</h1>
                <ContactForm />
            </main>
            <Footer/>
        </div>
    )
}

export default App
