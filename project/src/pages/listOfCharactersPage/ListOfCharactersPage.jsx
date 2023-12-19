import classes from './ListOfCharactersPage.module.css';
import CharactersGrid from "../../components/UI/charactersGrid/CharactersGrid.jsx";
import {Box} from "@mui/material";
import CharacterSearch from "../../components/UI/characterSearch/CharacterSearch.jsx";
import data from  '../../assets/docs/all-characters.json'





const maxArr = data.characters;
let arr = [...maxArr];
function changeArr(props){
    arr = [...props];
}

const ListOfCharactersPage = () => {
/*  {data.characters[id]["name"]} - использование*/
    return (
        <Box>
            {CharacterSearch(changeArr)}
            {CharactersGrid(arr)}
        </Box>
    );
};

export default ListOfCharactersPage;