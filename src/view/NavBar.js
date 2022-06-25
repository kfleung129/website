import { Text, IconButton, Flex, Avatar, Spacer } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function NavBar (props) {
    const { colorMode, toggleColorMode } = useColorMode();
    const fS = ['1em', '1.2em', '1.5em'];
    return (
        <Flex sx={{ p: 1, alignItems: 'center', justifyContent: 'flex-start', bgColor: colorMode == 'dark' ? '#212124' : '#E2E5DE' }}>
            
            <Avatar
                sx={{ ml: 2, mt: 1}}
                size='md'
                src='https://shoplineimg.com/59b2d9e49a76f018310010d2/5ed8f8404e55bf0045f352e7/800x.png?'
            />

            <Text 
                sx={{ fontSize: fS, ml: [4, 5, 8], w: 'fit-content' }}
                _hover={{ borderBottom: '1px solid', transition: '0.3s', cursor: 'pointer' }}
            > About </Text>

            <Text 
                sx={{ fontSize: fS, ml: [4, 5, 8], w: 'fit-content' }}
                _hover={{ borderBottom: '1px solid', transition: '0.3s', cursor: 'pointer' }}
            > Project </Text>

            <Spacer />

            <IconButton
                ml={[4, 5, 8]}
                size='lg'
                borderRadius={50}
                onClick={toggleColorMode}
                icon={ colorMode == 'light' ? <DarkModeIcon/> : <LightModeIcon/> }
            />
            
        </Flex>
    );
}

export default NavBar;