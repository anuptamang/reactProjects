import { Box, Container, Flex, Text } from '@chakra-ui/layout'
import React from 'react'

const Footer = () => {
  return (
   <Box bgGradient="linear(to-r, green.200, yellow.500)" py="2" pos="fixed" bottom="0" left="0" right="0" zIndex="888">
      <Container maxW="container.lg">
        <Flex justifyContent="center">
          <Box fontSize="sm">
            <Text color="white">All Rights Reserved &copy; TODO</Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
