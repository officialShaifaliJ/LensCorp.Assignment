import './App.css';
import Box1 from './Components/Box1';
import Navbar from './Components/Navbar';
import {Box, useColorMode} from '@chakra-ui/react';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
    <Box>
      <Navbar colorMode={colorMode} toggleColorMode={toggleColorMode}/>
      <Box1 colorMode={colorMode} toggleColorMode={toggleColorMode}/>
    </Box>
    </>
  );
}

export default App;
