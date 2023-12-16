import { Grid, Typography } from "@mui/material";
import Link from '@mui/material/Link';


const Muigridfooter = (Name, Arr) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography fontSize={"20px"} fontWeight={"Bold"} varian="h4" sx={{margin : "15px"}}>
                {Name}
            </Typography>

            {Arr.map(elem => (
                <Typography varian="h4" sx={{margin : "15px"}} key = {elem.name}>
                    {" "}
                    <Link href={elem.url}>{elem.name}</Link>
                </Typography>
            ))}
        </Grid>
    );
};
export default Muigridfooter;