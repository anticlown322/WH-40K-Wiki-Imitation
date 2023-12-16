import {Box, Stack, Typography} from "@mui/material";
import classes from './characterOfTheDay.module.css';
import MyCard from '../../UI/myCard/MyCard.jsx'

const CharacterOfTheDay = () => {
    return (
        <Box className={classes.boxCharOfTheDay} padding={1}>
            <Typography variant="h3" color="white" margin={1}>Персонаж дня</Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Box>
                    <Stack>
                        <Typography variant="body1" color="white" margin={1}>Персонаж дня</Typography>
                        <Typography variant="body1" color="white" margin={1}>Персонаж дня</Typography>
                        <Typography variant="body1" color="white" margin={1}>Персонаж дня</Typography>
                    </Stack>
                    <Typography variant="h5" color="white" margin={1}>Персонаж дня</Typography>
                    <Typography variant="body1" color="white" margin={1} maxWidth='800px'>
                        Это 41 тысячелетие. Вот уже более ста веков Император недвижимо восседает на Золотом Троне Терры. Он Повелитель Человечества и правит миллионом миров благодаря мощи своих неисчислимых армий. Он — гниющий полутруп
                    </Typography>
                </Box>
                <MyCard></MyCard>
            </Box>
        </Box>
    );
};

export default CharacterOfTheDay;