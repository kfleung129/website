import { useEffect, useState } from 'react'; 
import { Flex, Code, Box, useDisclosure } from '@chakra-ui/react';
import '../style/type.css';

function Main (props) {
    const { isOpen, onToggle } = useDisclosure();
    const [ introduction, setIntroduction ] = useState('');

    useEffect(() => {
        onToggle();
    },  []);

    return (
        <Flex sx={{ w: 'fit-content', ml: [30, 30, 100], mt: [45, 45, 200], alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'center' }}>
            <Box>
                <Code sx={{ fontSize: ['1em', '1.2em', '2em'], pl: 5, pr: 5, borderRadius: '20px', bgGradient: 'linear-gradient(to-r, #8360c3, #2ebf91)' }} _hover={{ letterSpacing: 1.5, boxShadow: '5xl' }} transition='0.35s'>
                    Hello, This is <b>Jason Leung</b>!
                </Code>

            </Box>
            <Box sx={{ ml: [2, 2, 2], mt: [7, 7, 30], fontSize: ['1em', '1.2em', '2em'], overflow: 'auto' }}>
                <div class="typed-out-1">I am a CityU Computer Science Year 2 Student</div>
                <div class="typed-out-2">A Fast Learner + Problem solver</div>
                <div class="typed-out-3">who love to discover & try new techonology</div>
            </Box>
        </Flex>
        
    );
}

export default Main;