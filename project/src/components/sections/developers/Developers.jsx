import {Stack, Box, Typography, Avatar, Link} from "@mui/material";
import classes from './Developers.module.css';
import avatarAI from '/src/assets/img/developers/AI.jpg';
import avatarAK from '/src/assets/img/developers/AK.png';
import avatarSR from '/src/assets/img/developers/SR.png';

const Developers = () => {
    return (
        <Box className={classes.devContainer}>
            <Stack className={classes.devOuterStack}>
                <Typography variant="h4" color="white"> Разработчики</Typography>
                <Stack className={classes.devInnerStack}
                       direction={{ xs: 'column', sm: 'row' }}
                       spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <Box className={classes.devBox}>
                        <Avatar alt="Андрей Карась" src={avatarAK} variant="rounded"
                                sx={{backgroundColor: 'primary.dark', width: 96, height: 96, borderRadius: 4, transition: '0.5s', '&:hover': {transform: 'scale(1.2)'}}}/>
                        <Typography variant="h6" color="white" margin={1}>Андрей Карась</Typography>
                        <Typography color="white">Работяга</Typography>
                        <Link href="https://github.com/anticlown322" underline="none" target="_blank" color="lightBlue"
                              sx={{transition: '0.3s', '&:hover': {color: 'lightGreen'}}}>Профиль на GitHub</Link>
                    </Box>
                    <Box className={classes.devBox}>
                        <Avatar alt="Семен Рычихин" src={avatarSR} variant="rounded"
                                sx={{backgroundColor: 'primary.dark', width: 96, height: 96, borderRadius: 4, transition: '0.5s', '&:hover': {transform: 'scale(1.2)'}}}/>
                        <Typography variant="h6" color="white" margin={1}>Семен Рычихин</Typography>
                        <Typography color="white">Работяга</Typography>
                        <Link href="https://github.com/AndreyItMe" underline="none" target="_blank" color="lightBlue"
                              sx={{transition: '0.3s', '&:hover': {color: 'lightGreen'}}}>Профиль на GitHub</Link>
                    </Box>
                    <Box className={classes.devBox}>
                        <Avatar alt="Андрей Иванов" src={avatarAI} variant="rounded"
                                sx={{backgroundColor: 'primary.dark', width: 96, height: 96, borderRadius: 4, transition: '0.5s', '&:hover': {transform: 'scale(1.2)'}}}/>
                        <Typography variant="h6" color="white" margin={1}>Андрей Иванов</Typography>
                        <Typography color="white">Работяга</Typography>
                        <Link href="https://github.com/BeerManNotAvailable1" underline="none" target="_blank" color="lightBlue"
                              sx={{transition: '0.3s', '&:hover': {color: 'lightGreen'}}}>Профиль на GitHub</Link>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Developers;