import Container from "@mui/material/Container";
import {Grid, Typography, CardActions, Button} from "@mui/material";
import classes from "./CharactersGrid.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {t} from "i18next";
const CharactersGrid = (charArray) => {
    return (
        <Container maxWidth="xl" className={classes.outerContainer}>
            <Typography variant="h1" fontWeight="bold" color="white" align="center" marginBottom={3}>
                {t('tCharacters')}
            </Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {charArray.map((value) => (
                    <Grid item key={value} xs={12} sm={6} md={4}>
                        <Card
                            className={classes.card}
                        >
                            <CardMedia
                                component="div"
                                sx={{
                                    // 16:9
                                    //pt: '56.25%',
                                    height: '500px'
                                }}
                                image={value.mainImg}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2" color="white">
                                    {value.name}
                                </Typography>
                                <Typography color="white">
                                    {value.shortDesc}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained" href={value.id} size="md" sx={{backgroundColor:'red'}} >
                                    {t('tGoToThePage')}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CharactersGrid;