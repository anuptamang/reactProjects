import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { AddIcon } from '@chakra-ui/icons'
import { Box, Container, Flex } from '@chakra-ui/layout'
import React, { useRef } from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import AddTodo from './AddTodo'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const finalRef = useRef() as React.MutableRefObject<HTMLInputElement>

  return (
    <Box bgGradient="linear(to-r, green.200, yellow.500)" py="3" position="fixed" top="0" left="0" width="100%" zIndex="999">
      <Container maxW="container.lg">
        <Flex justifyContent="space-between">
          <Box fontSize="lg" color="white" fontWeight="bold" mt="2" textShadow="0 0 2px rgba(0,0,0,0.5)">
            TODO
          </Box>
          <Box>
            <Flex justifyContent="flex-end">
              <Box>
               <Flex>
                  <Box>
                    <Button onClick={onOpen}><AddIcon boxSize="4" mr="2" /> Add To Do</Button>
                  </Box>
               </Flex>
               </Box>
              <Box>
                <ColorModeSwitcher justifySelf="flex-end" />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
      <AddTodo isOpen={isOpen} onOpen={onOpen}  onClose={onClose} initialRef={initialRef} finalRef={finalRef} />
    </Box>
  )
}

export default Header
