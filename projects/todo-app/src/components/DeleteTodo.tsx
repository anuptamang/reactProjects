import { Button } from '@chakra-ui/button'
import { Box } from '@chakra-ui/layout'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import React from 'react'
import { deleteTodo } from '../features/todoSlice'
import { useAppDispatch } from '../hooks'
import { AddTodoHandleProps } from './AddTodo'

interface ViewTodoProps extends AddTodoHandleProps {
  id: string,
  title: string
}

export default function ViewTodo(props:ViewTodoProps) {
  const dispatch = useAppDispatch() 

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(props.id))
  }
  
  return (
    <>
      <Modal
        initialFocusRef={props.initialRef}
        finalFocusRef={props.finalRef}
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure want to delete this todo?</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           <Box fontStyle="italic">{props.title}</Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleDeleteTodo} colorScheme="red" mr={3}>
              Delete
            </Button>
            <Button onClick={props.onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}