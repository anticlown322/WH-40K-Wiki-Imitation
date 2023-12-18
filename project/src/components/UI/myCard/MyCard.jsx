import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
export default function MultiActionAreaCard(params) {

    return (
        <Card sx={{ minWidth:200, maxWidth: 345, maxHeight:500, margin:2, backgroundColor: '#16132d', borderRadius:3, padding:1}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://img2.joyreactor.cc/pics/post/full/Warhammer-40000-фэндомы-Roboute-Guilliman-Primarchs-6364335.jpeg"
                    alt="Персонаж"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color='white'>
                        {(params.name)}
                    </Typography>
                    <Typography variant="body2" color="white" >
                        {params.status}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button
                    variant="contained" href={params.href} size="small" sx={{backgroundColor:'red'}} >
                    Перейти на страницу
                </Button
                    >
            </CardActions>
        </Card>
    );
}