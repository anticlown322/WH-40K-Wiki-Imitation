import Container from "@mui/material/Container";
import {Box, Stack, Typography} from "@mui/material";
import classes from './characterPage.module.css';

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
                        <Typography variant="h2" fontWeight="bold" color="white">Имя</Typography>
                        <Typography variant="h5" fontWeight="bold" color="white">Короткое описание</Typography>
                        <Typography variant="h3" fontWeight="bold" color="white" align="center">Биография</Typography>
                        <Typography variant="body1" color="white">Биография</Typography>
                    </Stack>
                    <img alt="Портрет персонажа" src=""/>
                </Box>
                <Box className={classes.videoWrapper}>
                    <iframe src="https://www.youtube.com/embed/kWKqYVKnt9w"
                            allow="accelerometer; autoplay, picture-in-picture" allowFullScreen=""></iframe>
                </Box>

            </Box>

        </Container>
    );
};

export default CharacterPage;