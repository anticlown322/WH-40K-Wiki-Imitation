import {Box, Typography} from "@mui/material";
import classes from './HomePageDescription.module.css';
import {t} from "i18next";


const HomePageDescription = () => {
    return (
        <Box className={classes.boxDescription}>
            <Typography variant='h4' color='white' margin={1}>
                {t('tWelcome')}
            </Typography>
            <img alt="Логотип WH40K" src="src/assets/img/general/Site-logo-xl.webp" className={classes.logo}/>
            <Typography variant='body1' color='white' margin={1} textAlign='center'>
                {t('tWelcomeYouOnWiki')}
            </Typography>
        </Box>
    );
};

export default HomePageDescription;