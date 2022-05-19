import { SimpleGrid } from '@chakra-ui/layout'
import React from 'react'
import todoTypes from '../constants/statusConstant'
import TodoStack from './TodoStack'

const ListTodo = () => {
  
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} overflow="hidden" borderRadius="md">
      {
        todoTypes.map(type => (
          <TodoStack key={type} type={type} />
        ))
      }      
    </SimpleGrid>
  )
}

export default ListTodo
