import {AppBar, Container, Toolbar, Typography} from '@mui/material';
import HeaderMenu from '../../UI/headerMenu/HeaderMenu.jsx';

const Header = () => {
    return (
    <div>
        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <HeaderMenu>

                    </HeaderMenu>
                    <Typography>
                        WH 40k blog
                    </Typography>

                </Toolbar>
            </Container>
        </AppBar>
    </div>
    )
};

export default Header;