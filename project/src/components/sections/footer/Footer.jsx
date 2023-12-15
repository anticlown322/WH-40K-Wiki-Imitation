import {Box, Link, Typography} from "@mui/material";
import Container from "@mui/material/Container";


function Copyright() {
    return (
        <Typography variant="body2" color="inherit">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                WH40K-Wiki imitation
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: 'brown'
            }}
        >
            <Container maxWidth="md" sx={{color: 'white'}}>
                <Typography variant="body1" color="inherit">
                    Футер надо бы заботать
                </Typography>
                <Copyright/>
            </Container>
        </Box>
    );
};

export default Footer;