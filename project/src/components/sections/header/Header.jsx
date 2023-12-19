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

const pages = ['Главная', 'О нас', 'Деятель дня', 'Персонажи'];
const pagesLinks = ['', '#devs', '#charOfTheDay', 'characters'];
const settings = ['Профиль', 'Аккаунт', 'Настройки', 'Выйти'];

function Header() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" style={{backgroundColor: "darkred"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img alt="Логотип WH40K" src="src/assets/img/general/Site-logo.webp" className={classes.logo}/>
                    {/*кнопки для перехода*/}
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Link
                                key={page}
                                component="button"
                                variant="body2"
                                href="https://www.instagram.com/"
                            >
                                {page}
                            </Link>
                        ))}
                    </Box>

                    <Box>
                        <Button variant="contained" href="#contained-buttons" size="med" sx={{backgroundColor:'red'}} >Войти</Button>
                        <Button sx={{color:'white'}}>Регистрация</Button>
                    </Box>

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
