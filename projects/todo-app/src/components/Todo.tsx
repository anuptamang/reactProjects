import { useDisclosure } from '@chakra-ui/hooks'
import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons'
import { Box, Heading, Link } from '@chakra-ui/layout'
import React, { FC, useRef } from 'react'
import { TodoProps } from '../model'
import DeleteTodo from './DeleteTodo'
import EditTodo from './EditTodo'
import ViewTodo from './ViewTodo'

const Todo:FC<TodoProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isEditOpen, onOpen : onEditOpen, onClose : onEditClose } = useDisclosure()
  const { isOpen: isDeleteOpen, onOpen : onDeleteOpen, onClose : onDeleteClose } = useDisclosure()
  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const finalRef = useRef() as React.MutableRefObject<HTMLInputElement>
  
  const status = props.status === 'todo' ? 'yellow.400' : props.status === 'inProgress' ? 'yellow.500' : 'green.400' 

  const handleDeleteTodo = (id:string) => {
    onDeleteOpen()
  }

  const handleEditTodo = (id:string) => {
    onEditOpen()
  }

  return (
    <>
       <Box>
        <Box background={`${status}`} rounded="md" py="4" px="4" mb="2" boxShadow="md">
          <Heading onClick={onOpen} cursor="pointer" as="h3" mb="2" size="sm" color="white" textTransform="capitalize">{props.title}</Heading>
          <Box display="flex" justifyContent="flex-end" alignItems="center">
            <Link onClick={onOpen} color="white" mr="3">
              <ViewIcon />
            </Link>
            <Link onClick={() => handleEditTodo(props.id)} color="white" mr="3">
              <EditIcon />
            </Link>
            <Link onClick={() => handleDeleteTodo(props.id)} color="white" variant="solid">
              <DeleteIcon />
            </Link>
          </Box>
        </Box>
        <ViewTodo handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} id={props.id} title={props.title} body={props.body} status={props.status} isOpen={isOpen} onOpen={onOpen}  onClose={onClose} initialRef={initialRef} finalRef={finalRef} />
        <EditTodo id={props.id} title={props.title} body={props.body} status={props.status} isOpen={isEditOpen} 
        onOpen={onEditOpen}  onClose={onEditClose} initialRef={initialRef} finalRef={finalRef} />
        <DeleteTodo id={props.id} title={props.title} isOpen={isDeleteOpen} onOpen={onDeleteOpen}  onClose={onDeleteClose} initialRef={initialRef} finalRef={finalRef} />
      </Box>
    </>
  )
}

export default Todo
