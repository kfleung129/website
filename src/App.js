// Library
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// Component
import theme from './theme';
import NavBar from './view/NavBar';
import Main from './view/Main';



function App() {
	return (
		<ChakraProvider theme={theme}>
			<NavBar />
			<Main />
		</ChakraProvider>
  	);
}

export default App;
