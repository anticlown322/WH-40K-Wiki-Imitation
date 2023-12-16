import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
    return (
        <Card sx={{ minWidth:200, maxWidth: 345, maxHeight:500, margin:2, backgroundColor: '#16132d', borderRadius:3, padding:1}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image=""
                    alt="Персонаж дня"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color='white'>
                        Имя
                    </Typography>
                    <Typography variant="body2" color="white" >
                        Описание
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button variant="contained" href="#contained-buttons" size="small" sx={{backgroundColor:'red'}} >
                    Перейти на страницу
                </Button>
            </CardActions>
        </Card>
    );
}