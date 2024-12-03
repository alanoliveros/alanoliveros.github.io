import './App.scss'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CustomScrollbar from "./components/CustomScrollbar.jsx";

function App() {

    return (
        <div className="app">
            <CustomScrollbar/>
            <Header/>
            <main className="main-content">
            </main>
            <Footer/>
        </div>
    )
}

export default App
