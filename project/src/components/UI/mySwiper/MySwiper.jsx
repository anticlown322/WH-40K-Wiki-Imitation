import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
import classes from "./MySwiper.module.css";
import Container from "@mui/material/Container";
function ImageCarousel(char) {
    return (
        <Container maxWidth="md" maxHeight="400">
            <Carousel className={classes.swiper}>
                {char.sliderImages.map((image, i) => (
                    <Paper key={i} elevation={10} className={classes.swiperSlide}>
                        <img alt={`Slide ${i}`} src={image} className={classes.swiperSlideImage}/>
                    </Paper>
                    ))}
            </Carousel>
        </Container>
);
}

export default ImageCarousel;