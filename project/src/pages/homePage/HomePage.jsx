import Developers from "../../components/sections/developers/Developers.jsx";
import CharacterOfTheDay from "../../components/sections/characterOfTheDay/characterOfTheDay.jsx";
import {Box} from "@mui/material";
import HomePageDescription from "../../components/sections/homePageDescription/HomePageDescription.jsx";
import UniverseDescription from "../../components/sections/universeDescription/UniverseDescription.jsx";


const HomePage = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <HomePageDescription></HomePageDescription>
            <UniverseDescription></UniverseDescription>
            <CharacterOfTheDay id={'charOfTheDay'}></CharacterOfTheDay>
            <Developers id={'devs'}></Developers>
        </Box>
    );
};

export default HomePage;