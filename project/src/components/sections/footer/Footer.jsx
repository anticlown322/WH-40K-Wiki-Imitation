import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = ()=> {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "gray",
                paddingTop: "2rem",
                paddingBottom: "1rem"
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="black" variant="h5">
                            React Starter App
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="textSecondary" variant="subtitle1">
                            {`${new Date().getFullYear()} | React | Material UI | React Router | addfsdsf | fsdgadfsdf | trtdgagrds`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;