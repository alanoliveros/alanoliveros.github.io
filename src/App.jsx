import './App.scss'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Cooking from "./components/lethimcook/Cooking.jsx";

function App() {

    return (
        <div className="app">
            <Header/>
            <main className="main-content">
                <h1>MAIN</h1>
                <Cooking/>
            </main>
            <Footer/>
        </div>
    )
}

export default App
