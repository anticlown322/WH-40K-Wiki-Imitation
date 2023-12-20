import {useState} from 'react';
import data from "../../../assets/docs/all-characters.json";
import {Typography, Box} from "@mui/material";
import Container from "@mui/material/Container";
import classes from "./CharactersSearch.module.css";

const CharacterSearch = (props) => {
    let charactersArr = [];
    const [value, setValue] = useState('')


    return (
        <Container maxWidth="xl">
            <Box className={classes.outerBox}>
                <Box className={classes.innerBox}>
                    <Typography variant="h3" color="white" fontWeight="bold">Поиск по имени</Typography>
                    <input className={classes.searchInput}
                        value={value}
                        onChange={event => {
                            charactersArr = []
                            data.characters.forEach(obj => {
                                if (obj.name.toLowerCase().includes(value.toLowerCase()))
                                    charactersArr.push(obj);
                                props(charactersArr);
                                setValue(event.target.value);
                            })}
                        }
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default CharacterSearch;