import {Grid, Typography} from "@mui/material";
import Link from '@mui/material/Link';

const Muigridfooter = (Name, Arr) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography fontSize={"20px"} fontWeight={"Bold"} variant="h4" sx={{margin: "15px"}}>
                {Name}
            </Typography>

            {Arr.map(elem => (
                <Typography variant="body1"  sx={{margin: "15px"}} key={elem.name}>
                    {" "}
                    <Link href={elem.url} underline="none" target="_blank" color="lightBlue"
                          sx={{transition: '0.3s', '&:hover': {color: 'lightGreen'}}}>{elem.name}</Link>
                </Typography>
            ))}
        </Grid>
    );
};
export default Muigridfooter;