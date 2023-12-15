import Footer from "../footer/Footer.jsx";
import {Outlet} from "react-router-dom";
import Header from "../header/Header.jsx";
import {Box, CssBaseline} from "@mui/material";

const Layout = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <CssBaseline />
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </Box>
    );
};

export default Layout;