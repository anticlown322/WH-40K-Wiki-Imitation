import Container from "@mui/material/Container";
import {Box, Grid, Typography} from "@mui/material";
import classes from "./CharactersGrid.module.css";

const CharactersGrid = () => {
    return (
        <Container maxWidth="xl" className={classes.outerContainer}>
            <Typography variant="h1" fontWeight="bold" color="white">Персонажи</Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            </Grid>
        </Container>
    );
};

export default CharactersGrid;