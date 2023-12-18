import {Box, Grid, Link, Typography} from "@mui/material";
import Container from "@mui/material/Container";
import "../../UI/footerGrid/FooterGrid.jsx"
import Multigridfooter from "../../UI/footerGrid/FooterGrid.jsx";

class arrElem{
    name;
    url;
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}

const linksContacts = [
    new arrElem('Наш VK','https://vk.com/id40558425'),
    new arrElem('Пожертвования','https://u.9111s.ru/uploads/202204/09/90c5605fc5ac4592b6a6eab6708f91bb.jpg'),
    new arrElem('Наш GitHub','https://github.com/anticlown322/WH-40K-Wiki-Imitation'),
]

const linksSources = [
    new arrElem('Fandom','https://www.fandom.com/explore-ru?uselang=ru'),
    new arrElem('Muthead','https://www.muthead.com/'),
    new arrElem('Fanatical','https://www.fanatical.com/'),
]


const linksReview = [
    new arrElem('Что такое фэндом?','https://www.fandom.com/what-is-fandom'),
    new arrElem('Условия использования','https://www.fandom.com/ru/terms-of-use-ru'),
    new arrElem('О нас','ВСТАВЬ СЮДА'),
]

const linksCommunity = [
    new arrElem('Вики сообщества','https://community.fandom.com/ru/'),
    new arrElem('Поддержка','https://fandom.zendesk.com/hc/ru'),
    new arrElem('Справка','https://community.fandom.com/ru/wiki/Справка:Содержание'),
]

function Copyright() {
    return (
        <Typography variant="body2" color="white" marginTop={2}>
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
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: 'brown',
            }}
        >
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Grid container
                      sx={{
                          width: '100%',
                          backgroundColor: '#c62828',
                          borderRadius: 5,
                      }}>
                    {Multigridfooter('СВЯЗЬ С НАМИ', linksContacts)}
                    {Multigridfooter('ИСТОЧНИКИ', linksSources)}
                    {Multigridfooter('ОБЗОР', linksReview)}
                    {Multigridfooter('СООБЩЕСТВО', linksCommunity)}
                </Grid>
                <Copyright></Copyright>
            </Container>
        </Box>
    );
};

export default Footer;