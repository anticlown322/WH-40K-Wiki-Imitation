import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
import classes from "./MySwiper.module.css";
import Container from "@mui/material/Container";

const images = [
    "https://cdn.pixabay.com/photo/2023/10/02/14/51/flowers-8289321_640.png",
    "https://cdn.pixabay.com/photo/2023/09/10/15/15/flowers-8245210_640.png",
    "https://cdn.pixabay.com/photo/2023/09/04/17/04/saturn-8233220_640.png"
];

function ImageCarousel() {
    return (
        <Container maxWidth="md" maxHeight="400">
            <Carousel className={classes.swiper}>
                {images.map((image, i) => (
                    <Paper key={i} elevation={10} className={classes.swiperSlide}>
                        <img alt={`Slide ${i}`} src={image} className={classes.swiperSlideImage}/>
                    </Paper>
                    ))}
            </Carousel>
        </Container>
);
}

export default ImageCarousel;