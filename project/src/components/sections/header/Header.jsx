import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import classes from './Header.module.css';
import {redirect} from "react-router-dom";
import {Link} from "@mui/material";
import {useTranslation} from 'react-i18next';
import data from "../../../assets/docs/all-characters.json"
import LangDropDown from "../../UI/languageDropDown/LanguageDropDown.jsx";

function Header() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const {t, i18n} = useTranslation();


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const pages = [
        {name: t('header.home'), href: '/'},
        {name: t('header.aboutUs'), href: 'https://github.com/anticlown322/WH-40K-Wiki-Imitation'},
        {name: t('header.charOfTheDay'), href: data.characterOfTheDay},
        {name: t('header.characters'), href: '/characters'}];
    const settings = ['Профиль', 'Аккаунт', 'Настройки', 'Выйти'];

    return (
        <AppBar position="static" style={{backgroundColor: "darkred"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img alt="Логотип WH40K" src="src/assets/img/general/Site-logo.webp" className={classes.logo}/>
                    {/*кнопки для перехода*/}
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                component="button"
                                variant="body2"
                                href={page.href}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    {/*
                    <Box>
                        <Button variant="contained" size="med" sx={{backgroundColor: 'red'}}>{t('header.signIn')}</Button>
                        <Button sx={{color: 'white'}}>{t('header.signUp')}</Button>
                    </Box>
                    */}

                    <LangDropDown></LangDropDown>

                    {/*
                    выше бокс с кнопками которые при нажатии следует заменить на бокс ниже (иконка аккаунта с менюшкой)
                    иконка аккаунта с менюшкой*/}
                    {/*<Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
