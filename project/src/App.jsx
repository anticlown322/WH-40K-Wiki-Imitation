import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePage/HomePage.jsx';
import ListOfCharactersPage from './pages/listOfCharactersPage/ListOfCharactersPage.jsx';
import CharacterPage from './pages/characterPage/characterPage.jsx';
import Layout from './components/sections/layout/Layout.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="characters" element={<ListOfCharactersPage/>}/>
                <Route path="characters/:id" element={<CharacterPage/>}/>
            </Route>
        </Routes>
    )
}

export default App
