import './App.css';
import Box1 from './Components/Box1';
import Navbar from './Components/Navbar';
import {Box} from '@chakra-ui/react';

function App() {
  return (
    <>
    <Box pb="2pc">
      <Navbar/>
      <Box1/>
    </Box>
    </>
  );
}

export default App;
