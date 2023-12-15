import {Stack, Box, Typography, Avatar, Link} from "@mui/material";
import classes from './Developers.module.css';
import avatarAI from '../../../assets/img/AI.jpg';
import avatarAK from '../../../assets/img/AK.png';
import avatarSR from '../../../assets/img/SR.png';

const Developers = () => {
    return (
        <div className={classes.devContainer}>
            <Stack className={classes.devOuterStack}>
                <Typography variant="h4" color="white"> Разработчики</Typography>
                <Stack className={classes.devInnerStack} direction="row" spacing={10}>
                    <Box className={classes.devBox}>
                        <Avatar alt="Андрей Карась" src={avatarAK} variant="rounded" sx={{backgroundColor: 'primary.dark', width:96, height:96}}/>
                        <Typography variant="h6" color="white" margin={1}>Андрей Карась</Typography>
                        <Typography color="white">Работяга</Typography>
                        <Link href="https://github.com/anticlown322" underline="none" target="_blank">Профиль на GitHub</Link>

                    </Box>
                    <Box className={classes.devBox}>
                        <Avatar alt="Семен Рычихин" src={avatarSR} variant="rounded" sx={{backgroundColor: 'primary.dark', width:96, height:96}}/>
                        <Typography variant="h6" color="white" margin={1}>Семен Рычихин</Typography>
                        <Typography color="white">Работяга</Typography>
                        <Link href="https://github.com/AndreyItMe" underline="none" target="_blank">Профиль на GitHub</Link>
                    </Box>
                    <Box className={classes.devBox}>
                        <Avatar alt="Андрей Иванов" src={avatarAI} variant="rounded" sx={{backgroundColor: 'primary.dark', width:96, height:96}}/>
                        <Typography variant="h6" color="white" margin={1}>Андрей Иванов</Typography>
                        <Typography color="white">Работяга</Typography>
                        <Link href="https://github.com/BeerManNotAvailable1" underline="none" target="_blank">Профиль на GitHub</Link>
                    </Box>
                </Stack>
            </Stack>
        </div>
    );
};

export default Developers;