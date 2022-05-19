import { Container } from '@chakra-ui/layout'
import React from 'react'
import ListTodo from './ListTodo'

const Main = () => {
  return (
    <Container maxW="container.lg" pb="24" pt="28">
      <ListTodo />
    </Container>
  )
}

export default Main
