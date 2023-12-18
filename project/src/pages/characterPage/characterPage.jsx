import Container from "@mui/material/Container";
import {Box, Stack, Typography} from "@mui/material";
import MultiActionAreaCard from "../../components/UI/myCard/MyCard.jsx";

const CharacterPage = () => {
    return (
        <Container maxWidth='xl'>
            <Box marginTop={5} padding={1} sx={{backgroundColor: 'rgba(139, 0, 0, 0.8)'}}>
                <Stack>
                    <Typography>Имя</Typography>
                    <Typography>Короткое описание</Typography>
                    <Typography>Биг описание</Typography>
                </Stack>
                <Stack>
                    <MultiActionAreaCard></MultiActionAreaCard>
                </Stack>
            </Box>
        </Container>
    );
};

export default CharacterPage;