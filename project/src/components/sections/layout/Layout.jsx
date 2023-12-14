import Footer from "../footer/Footer.jsx";
import {Outlet} from "react-router-dom";
import ResponsiveAppBar from "../header/ResponsiveAppBar.jsx";

const Layout = () => {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Layout;