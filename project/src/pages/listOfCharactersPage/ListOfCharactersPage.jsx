import classes from './ListOfCharactersPage.module.css';
import CharactersGrid from "../../components/UI/charactersGrid/CharactersGrid.jsx";
import {Box} from "@mui/material";
import CharacterSearch from "../../components/UI/characterSearch/CharacterSearch.jsx";
import data from  '../../assets/docs/all-characters.json'



let arr = [];

const maxArr = data.characters;
function changeArr(props){
    if(props[0] === undefined){
        arr = maxArr
    }else{
        arr = [...props];
    }

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