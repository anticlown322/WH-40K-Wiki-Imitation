import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {t} from "i18next";
export default function MultiActionAreaCard(params) {

    return (
        <Card sx={{ minWidth:200, maxWidth: 345, maxHeight:500, margin:2, backgroundColor: '#16132d', borderRadius:3, border:'2px solid white', padding:1.5}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    src={params.pic}
                    alt="Персонаж"
                    sx={{border: "1px solid orange", borderRadius: 3, maxHeight:300, transition: '0.5s', '&:hover': {transform: 'scale(0.95)'}}}
                />
                <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Typography gutterBottom variant="h5" component="div" color='white' fontWeight="bold" textAlign="center">
                        {t(params.name)}
                    </Typography>
                    <Typography variant="body1" color="white" >
                        {t("tStatus")}
                        {t(params.status)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                <Button
                    variant="contained" href={params.href} size="small" sx={{backgroundColor:'red'}} >
                    {t("tGoToThePage")}
                </Button
                    >
            </CardActions>
        </Card>
    );
}