import {Box, Stack, Typography} from "@mui/material";
import classes from './characterOfTheDay.module.css';
import MyCard from '../../UI/myCard/MyCard.jsx'
import data from  '../../../assets/docs/all-characters.json'

const charId = Math.ceil(Math.random() * 100) % 6 +1;
data.characterOfTheDay = charId;
const char = data.characters[charId];
const href = charId;

const CharacterOfTheDay = () => {
    return (
        <Box className={classes.boxCharOfTheDay} padding={1}>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Typography variant="h4" color="white" margin={1} fontWeight="bold">Персонаж дня- {char.name}</Typography>
                <Box>
                    <Stack>
                        <Typography variant="body1" color="white" margin={1}>Альтернативное имя: {char.nickname}</Typography>
                        <Typography variant="body1" color="white" margin={1}>Раса: {char.race}</Typography>
                        <Typography variant="body1" color="white" margin={1}>Принадлежность: {char.fraction}</Typography>
                    </Stack>
                    <Typography variant="h5" color="white" margin={1} fontWeight="bold">Описание</Typography>
                    <Typography variant="body1" color="white" margin={1} maxWidth='800px'>
                        {char.shortDesc}
                    </Typography>
                </Box>
            </Box>
            <MyCard
                href = {href}
                name = {char.name}
                status = {char.status}
                pic = {char.mainImg}
            ></MyCard>
        </Box>
    );
};

export default CharacterOfTheDay;