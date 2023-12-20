import Container from "@mui/material/Container";
import {Box, Stack, Typography} from "@mui/material";
import classes from './characterPage.module.css';
import data from '../../assets/docs/all-characters.json'
import MySwiper from "../../components/UI/mySwiper/MySwiper.jsx";

const char = data.characters[document.URL[document.URL.length - 1]];
const CharacterPage = () => {
    console.log(char.pathToVideo)

    return (
        <Container maxWidth='xl'>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Box
                    marginTop={5}
                    padding={1}
                    className={classes.innerBox}
                >
                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <Stack className={classes.innerStack}>
                            <Typography variant="h2" fontWeight="bold" color="white" align="center">{char.name}</Typography>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                color="white"
                                margin={1}>{char.shortDesc + "\n\t"}
                            </Typography>
                            <Box className={classes.dataBox}>
                                <Typography variant="h5" color="white">Прозвище: {char.nickname}</Typography>
                                <Typography variant="h5" color="white">Раса: {char.race}</Typography>
                                <Typography variant="h5" color="white">Фракция: {char.fraction}</Typography>
                                <Typography variant="h5" color="white">Принадлежность: {char.belonging}</Typography>
                                <Typography variant="h5" color="white">Текущий статус: {char.status}</Typography>
                            </Box>
                        </Stack>

                        <Box margin={1}>
                            <img alt="Портрет персонажа" src={char.mainImg} className={classes.charImg}/>
                        </Box>
                    </Box>
                    <Typography variant="h3" fontWeight="bold" color="white" align="center"
                                margin={1}>Биография</Typography>
                    {char.fullDesc.map((text) => (
                        <Typography
                            key={text}
                            variant="h6"
                            color="white"
                            margin={0.5}
                            sx={{textAlign: 'justify'}}
                        >
                            {text}</Typography>
                    ))}
                </Box>
                <Box className={classes.videoWrapper}>
                    <iframe src={char.pathToVideo}
                            title="Проигрыватель Youtube для ролика о персонаже"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </Box>
            </Box>
        </Container>
    );
};

export default CharacterPage;