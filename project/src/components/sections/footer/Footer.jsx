import {Box, Grid, Link, Typography} from "@mui/material";
import Container from "@mui/material/Container";
import "../../UI/footerGrid/FooterGrid.jsx"
import Multigridfooter from "../../UI/footerGrid/FooterGrid.jsx";
import {useTranslation} from 'react-i18next';

class arrElem{
    name;
    url;
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}


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
    const {t, i18n} = useTranslation();

    const linksContacts = [
        new arrElem(t('footer.contactUsLinks.vk'),'https://vk.com/id40558425'),
        new arrElem(t('footer.contactUsLinks.donations'),'https://u.9111s.ru/uploads/202204/09/90c5605fc5ac4592b6a6eab6708f91bb.jpg'),
        new arrElem(t('footer.contactUsLinks.gh'),'https://github.com/anticlown322/WH-40K-Wiki-Imitation'),
    ]

    const linksSources = [
        new arrElem('Fandom','https://www.fandom.com/explore-ru?uselang=ru'),
        new arrElem('Muthead','https://www.muthead.com/'),
        new arrElem('Fanatical','https://www.fanatical.com/'),
    ]


    const linksOverview = [
        new arrElem(t('footer.overviewLinks.fandom'),'https://www.fandom.com/what-is-fandom'),
        new arrElem(t('footer.overviewLinks.terms'),'https://www.fandom.com/ru/terms-of-use-ru'),
        new arrElem(t('footer.overviewLinks.aboutUs'),'https://github.com/anticlown322/WH-40K-Wiki-Imitation'),
    ]

    const linksCommunity = [
        new arrElem(t('footer.communityLinks.wiki'),'https://community.fandom.com/ru/'),
        new arrElem(t('footer.communityLinks.support'),'https://fandom.zendesk.com/hc/ru'),
        new arrElem(t('footer.communityLinks.help'),'https://community.fandom.com/ru/wiki/Справка:Содержание'),
    ]

    return (
        <Box
            component="footer"
            position="static"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: 'brown',
                marginTop:'3rem'
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
                    {Multigridfooter(t('footer.contactUs'), linksContacts)}
                    {Multigridfooter(t('footer.sources'), linksSources)}
                    {Multigridfooter(t('footer.overview'), linksOverview)}
                    {Multigridfooter(t('footer.community'), linksCommunity)}
                </Grid>
                <Copyright></Copyright>
            </Container>
        </Box>
    );
};

export default Footer;