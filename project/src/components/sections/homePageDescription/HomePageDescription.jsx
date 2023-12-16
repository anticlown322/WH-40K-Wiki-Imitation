import {Box, Typography} from "@mui/material";
import classes from './HomePageDescription.module.css';

const HomePageDescription = () => {
    return (
        <Box className={classes.boxDescription}>
            <Typography variant='h4' color='white' margin={1}>Добро пожаловать на Warhammer 40000 Wiki.</Typography>
            <img alt="Логотип WH40K" src="src/assets/img/general/Site-logo-xl.webp" className={classes.logo}/>
            <Typography variant='body1' color='white' margin={1} textAlign='center'>
                Приветствуем вас в русскоязычном сообществе Warhammer 40k Вики. Наша основная задача — качественное,
                понятное и красочное предоставление информации о вселенной Warhammer 40k. Присоединяйтесь к нам и
                поспособствуйте пополнению информации базы данных!
            </Typography>
        </Box>
    );
};

export default HomePageDescription;