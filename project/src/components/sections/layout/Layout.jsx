import Footer from "../footer/Footer.jsx";
import {Outlet} from "react-router-dom";
import Header from "../header/Header.jsx";

const Layout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Layout;