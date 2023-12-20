import {useMemo, useState} from 'react';
import data from "../../../assets/docs/all-characters.json";
import {Typography, Box} from "@mui/material";
import Container from "@mui/material/Container";
import classes from "./CharactersSearch.module.css";

const CharacterSearch = (props) => {
    let charactersArr = [];
    let [value, setValue] = useState('');


    const sortedArray = useMemo(() =>{
        charactersArr = []
        data.characters.forEach(obj => {
            if (obj.name.toLowerCase().includes(value.toLowerCase()))
                charactersArr.push(obj);
        })
        props(charactersArr);
        return charactersArr
    } , [value])


    return (
        <Container maxWidth="xl">
            <Box className={classes.outerBox}>
                <Box className={classes.innerBox}>
                    <Typography variant="h3" color="white" fontWeight="bold">Поиск по имени</Typography>
                    <input
                        className={classes.searchInput}
                        value={value}
                        onChangeCapture={event => {
                            setValue(event.target.value);
                            sortedArray;
                        }}
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default CharacterSearch;