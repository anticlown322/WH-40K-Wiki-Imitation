import {useState} from 'react';
import data from "../../../assets/docs/all-characters.json";
import {TextField, Typography, Box} from "@mui/material";
import Container from "@mui/material/Container";
import classes from "./CharactersSearch.module.css";
import {t} from "i18next";

const CharacterSearch = (props) => {
    let charactersArr = [];
    const [value, setValue] = useState('')

    return (
        <Container maxWidth="xl">
            <Box className={classes.outerContainer}>
                <Typography variant="h3" color="white" fontWeight="bold">
                    {t('tSearchByName')}
                </Typography>
                <input
                    value={value}
                    onChange={event => {
                        setValue(event.target.value);
                        charactersArr = []
                        data.characters.forEach(obj => {
                            if (obj.name.toLowerCase().includes(value.toLowerCase())) charactersArr.push(obj);
                        props(charactersArr);
                        })
                    }
                    }
                />
            </Box>
        </Container>
    );
};

export default CharacterSearch;