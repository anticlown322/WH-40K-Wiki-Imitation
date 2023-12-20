import {Stack, Box, Typography, Avatar, Link} from "@mui/material";
import classes from './Developers.module.css';
import avatarAI from '/src/assets/img/developers/AI.jpg';
import avatarAK from '/src/assets/img/developers/AK.png';
import avatarSR from '/src/assets/img/developers/SR.png';
import {t} from "i18next";

const Developers = () => {
    return (
        <Box className={classes.devContainer}>
            <Stack className={classes.devOuterStack}>
                <Typography variant="h4" color="white">{t('tDevelopers')}</Typography>
                <Stack className={classes.devInnerStack}
                       direction={{ xs: 'column', sm: 'row' }}
                       spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <Box className={classes.devBox}>
                        <Avatar alt="Андрей Карась" src={avatarAK} variant="rounded"
                                sx={{backgroundColor: 'primary.dark', width: 96, height: 96, borderRadius: 4, transition: '0.5s', '&:hover': {transform: 'scale(1.2)'}}}/>
                        <Typography variant="h6" color="white" margin={1}>{t('tAndreyGoldfish')}</Typography>
                        <Typography color="white">
                            {t('tWorker')}
                        </Typography>
                        <Link href="https://github.com/anticlown322" underline="none" target="_blank" color="lightBlue"
                              sx={{transition: '0.3s', '&:hover': {color: 'lightGreen'}}}>{t('tProfileOnGitHub')}</Link>
                    </Box>
                    <Box className={classes.devBox}>
                        <Avatar alt="Семен Рычихин" src={avatarSR} variant="rounded"
                                sx={{backgroundColor: 'primary.dark', width: 96, height: 96, borderRadius: 4, transition: '0.5s', '&:hover': {transform: 'scale(1.2)'}}}/>
                        <Typography variant="h6" color="white" margin={1}>{t('tSemyonRychikhin')}</Typography>
                        <Typography color="white">
                            {t('tWorker')}
                        </Typography>
                        <Link href="https://github.com/AndreyItMe" underline="none" target="_blank" color="lightBlue"
                              sx={{transition: '0.3s', '&:hover': {color: 'lightGreen'}}}>{t('tProfileOnGitHub')}</Link>
                    </Box>
                    <Box className={classes.devBox}>
                        <Avatar alt="Андрей Иванов" src={avatarAI} variant="rounded"
                                sx={{backgroundColor: 'primary.dark', width: 96, height: 96, borderRadius: 4, transition: '0.5s', '&:hover': {transform: 'scale(1.2)'}}}/>
                        <Typography variant="h6" color="white" margin={1}>{t('tAndreyIvanov')}</Typography>
                        <Typography color="white">
                            {t('tWorker')}
                        </Typography>
                        <Link href="https://github.com/BeerManNotAvailable1" underline="none" target="_blank" color="lightBlue"
                              sx={{transition: '0.3s', '&:hover': {color: 'lightGreen'}}}>{t('tProfileOnGitHub')}</Link>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Developers;