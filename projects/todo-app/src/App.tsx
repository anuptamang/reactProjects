
import React from 'react'
import { Box } from '@chakra-ui/layout';
import {
  ChakraProvider
} from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App () {  
  return (
    <ChakraProvider>
      <Box>
        <Header />
        <Main />
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default App