import "./App.css";
import {Routes, Route} from "react-router-dom";
import HomePage from './pages/homePage/HomePage.jsx';
import ListOfCharactersPage from './pages/listOfCharactersPage/ListOfCharactersPage.jsx';
import CharacterPage from './pages/characterPage/characterPage.jsx';
import NotFoundPage from './pages/notFoundPage/NotFoundPage.jsx';
import Layout from "./components/sections/layout/Layout.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="сharacters" element={<ListOfCharactersPage/>}/>
                <Route path="сharacters/:title" element={<CharacterPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    )
}

export default App
