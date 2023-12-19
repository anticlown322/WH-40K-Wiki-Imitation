import Container from "@mui/material/Container";
import {Grid, Typography, CardActions, Button} from "@mui/material";
import classes from "./CharactersGrid.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const CharactersGrid = (charArray) => {
    return (
        <Container maxWidth="lg" className={classes.outerContainer}>
            <Typography variant="h1" fontWeight="bold" color="white" align="center">Персонажи</Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {charArray.map((value) => (
                    <Grid item key={value} xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                                component="div"
                                sx={{
                                    // 16:9
                                    pt: '56.25%',
                                }}
                                image={value.mainImg}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {value.name}
                                </Typography>
                                <Typography>
                                    {value.shortDesc}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained" href={value.id} size="small" sx={{backgroundColor:'red'}} >
                                    Перейти на страницу
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