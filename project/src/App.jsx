import "./styles/App.css";
import {Routes, Route} from "react-router-dom";
import Header from "./components/sections/header/Header.jsx";
import Footer from "./components/sections/footer/Footer.jsx";
import HomePage from './pages/homePage/HomePage.jsx';
import ListOfCharactersPage from './pages/listOfCharactersPage/ListOfCharactersPage.jsx';
import NotFoundPage from './pages/notFoundPage/NotFoundPage.jsx';
import Layout from "./components/sections/layout/Layout.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Header/>
                <Route path="" element={<HomePage/>}/>
                <Route path="/сharacters" element={<ListOfCharactersPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
                <Footer/>
            </Route>
        </Routes>
    )
}

export default App
