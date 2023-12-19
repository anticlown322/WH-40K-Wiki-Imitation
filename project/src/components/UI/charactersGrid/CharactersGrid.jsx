import Container from "@mui/material/Container";
import {Grid, Typography, CardActions, Button} from "@mui/material";
import classes from "./CharactersGrid.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const CharactersGrid = () => {

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <Container maxWidth="lg" className={classes.outerContainer}>
            <Typography variant="h1" fontWeight="bold" color="white" align="center">Персонажи</Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                                component="div"
                                sx={{
                                    // 16:9
                                    pt: '56.25%',
                                }}
                                image="https://source.unsplash.com/random?wallpapers"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Heading
                                </Typography>
                                <Typography>
                                    This is a media card. You can use this section to describe the
                                    content.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">View</Button>
                                <Button size="small">Edit</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CharactersGrid;