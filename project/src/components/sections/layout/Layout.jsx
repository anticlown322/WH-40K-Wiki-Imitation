import Footer from "../footer/Footer.jsx";
import {Outlet} from "react-router-dom";
import Header from "../header/Header.jsx";
import {Paper} from "@mui/material";

const Layout = () => {
    return (
        <Paper
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundImage: `url(https://vignette.wikia.nocookie.net/warhammer40k/images/0/0f/Wiki_background.jpg/revision/latest?cb=20200824211944&path-prefix=ru)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </Paper>
    );
};

export default Layout;