import {Box, Stack, Typography} from "@mui/material";
import classes from './characterOfTheDay.module.css';
import MyCard from '../../UI/myCard/MyCard.jsx'
import data from  '../../../assets/docs/all-characters.json'

let char = data.characters[Math.ceil(Math.random() * 100) % 7];

const CharacterOfTheDay = () => {
    return (
        <Box className={classes.boxCharOfTheDay} padding={1}>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Typography variant="h3" color="white" margin={1}>Персонаж дня</Typography>
                <Box>
                    <Stack>
                        <Typography variant="body1" color="white" margin={1}>{char.nickname}</Typography>
                        <Typography variant="body1" color="white" margin={1}>{char.race}</Typography>
                        <Typography variant="body1" color="white" margin={1}>{char.fraction}</Typography>
                    </Stack>
                    <Typography variant="h5" color="white" margin={1}>{char.name}</Typography>
                    <Typography variant="body1" color="white" margin={1} maxWidth='800px'>
                        {char.shortDesc}
                    </Typography>
                </Box>
            </Box>
            <MyCard
                name = {char.name}
                status = {char.status}
            ></MyCard>
        </Box>
    );
};

export default CharacterOfTheDay;