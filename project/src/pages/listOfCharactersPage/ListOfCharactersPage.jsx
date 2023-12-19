import classes from './ListOfCharactersPage.module.css';
import CharactersGrid from "../../components/UI/charactersGrid/CharactersGrid.jsx";
import {Box} from "@mui/material";
import CharacterSearch from "../../components/UI/characterSearch/CharacterSearch.jsx";


const ListOfCharactersPage = () => {
/*  {data.characters[id]["name"]} - использование*/
    return (
        <Box>
            <CharacterSearch></CharacterSearch>
            <CharactersGrid></CharactersGrid>
        </Box>
    );
};

export default ListOfCharactersPage;