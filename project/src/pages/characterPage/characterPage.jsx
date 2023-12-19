import Container from "@mui/material/Container";
import {Box, Stack, Typography} from "@mui/material";
import classes from './characterPage.module.css';
import data from '../../assets/docs/all-characters.json'

const char = data.characters[document.URL[document.URL.length - 1]];
const CharacterPage = () => {
    return (
        <Container maxWidth='lg'>
            <Box className={classes.outerBox}>
                <Box
                    marginTop={5}
                    padding={1}
                    className={classes.innerBox}
                >
                    <Stack className={classes.innerStack}>
                        <Typography variant="h2" fontWeight="bold" color="white">{char.name}</Typography>
                        <Typography variant="h5" fontWeight="bold" color="white">{char.shortDesc + "\n\t"}</Typography>
                        {char.fullDesc.map((text) =>(
                        <Typography key = {text} variant="h3" fontWeight="bold" color="white" align="center">{text}</Typography>
                        ))}
                        <Typography variant="body1" color="white">Биография</Typography>
                    </Stack>
                    <img alt="Портрет персонажа" src={char.mainImg}/>
                </Box>
                <Box className={classes.videoWrapper}>
                    <iframe src={char.pathToVideo}
                            allow="accelerometer; autoplay, picture-in-picture" allowFullScreen=""></iframe>
                </Box>

            </Box>

        </Container>
    );
};

export default CharacterPage;