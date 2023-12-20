import {Box, Typography} from "@mui/material";
import classes from './UniverseDescription.module.css';
import {t} from "i18next";


const HomePageDescription = () => {
    return (
        <Box className={classes.boxDescription}>
            <Typography variant='h5' color='white' margin={1} fontWeight='bold'>
                {t('tInDarkness')}
            </Typography>
            <Typography variant='body1' color='white' margin={1}>
                {t('41StMillennium')}
            </Typography>
            <Typography variant='body1' color='white' margin={1}>
                {t('tEvenInItsCurrentState')}
            </Typography>
            <Typography variant='body1' color='white' margin={1}>
                {t('tToBeHumanInSuchTimes')}
            </Typography>
            <Typography variant='h6' color='white' margin={1}>
                {t('tHoweverUniverseHuge')}
            </Typography>
        </Box>
    );
};

export default HomePageDescription;