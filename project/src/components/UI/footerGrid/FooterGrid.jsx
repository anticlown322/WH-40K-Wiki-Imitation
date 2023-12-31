import {Grid, Typography} from "@mui/material";
import Link from '@mui/material/Link';
import {t} from "i18next";

const FooterGrid = (Name, Arr) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography fontSize={"20px"} fontWeight={"Bold"} variant="h4" color="white" sx={{margin: "15px"}}>
                {t(Name)}
            </Typography>

            {Arr.map(elem => (
                <Typography variant="body1"  sx={{margin: "15px"}} key={elem.name}>
                    {" "}
                    <Link href={elem.url} underline="none" target="_blank" color="lightBlue"
                          sx={{transition: '0.3s', '&:hover': {color: 'lightGreen'}}}>
                        {t(elem.name)}
                    </Link>
                </Typography>
            ))}
        </Grid>
    );
};
export default FooterGrid;