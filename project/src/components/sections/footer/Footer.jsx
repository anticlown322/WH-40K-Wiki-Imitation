import {Box, Grid, Link, Typography} from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import "../multigrid/Multigrid.jsx"
import Multigridfooter from "../multigrid/Multigrid.jsx";

class arrElem{
    name;
    url;
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}

const arr0 = [
    new arrElem('Наш ВК','https://vk.com/id40558425'),
    new arrElem('Пожертвования','https://u.9111s.ru/uploads/202204/09/90c5605fc5ac4592b6a6eab6708f91bb.jpg'),
    new arrElem('Наш Гитхаб','https://github.com/anticlown322/WH-40K-Wiki-Imitation'),
]

const arr1 = [
    new arrElem('Fandom','https://www.fandom.com/explore-ru?uselang=ru'),
    new arrElem('Muthead','https://www.muthead.com/'),
    new arrElem('Fanatical','https://www.fanatical.com/'),
]


const arr2 = [
    new arrElem('Что такое фэндом?','https://www.fandom.com/what-is-fandom'),
    new arrElem('Условия использования','https://www.fandom.com/ru/terms-of-use-ru'),
    new arrElem('О нас','ВСТАВЬ СЮДА'),
]

const arr3 = [
    new arrElem('Вики сообщества','https://community.fandom.com/ru/'),
    new arrElem('Поддержка','https://fandom.zendesk.com/hc/ru'),
    new arrElem('Справка','https://community.fandom.com/ru/wiki/Справка:Содержание'),
]

function    Copyright() {
    return (
        <Typography variant="body2" color="inherit">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                WH40K-Wiki imitation
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                border: "1px solid red",
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: 'brown'
            }}
        >
            <Container>
                <Grid container spcing={3}
                      sx={{
                          width: '100%',
                          display: 'flex',
                          alignContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'purple'
                      }}>
                    {Multigridfooter('СВЯЗЬ С НАМИ', arr0)}
                    {Multigridfooter('ИСТОЧНИКИ', arr1)}
                    {Multigridfooter('ОБЗОР', arr2)}
                    {Multigridfooter('СООБЩЕСТВО', arr3)}
                </Grid>
                <Copyright></Copyright>
            </Container>
        </Box>
    );
};

export default Footer;