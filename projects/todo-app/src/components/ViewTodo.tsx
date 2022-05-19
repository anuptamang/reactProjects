import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Link } from '@chakra-ui/layout'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import React from 'react'
import { AddTodoHandleProps } from './AddTodo'

interface ViewTodoProps extends AddTodoHandleProps {
  id: string,
  title: string,
  body: string,
  status: string,
  handleDeleteTodo: (id:string) => void,
  handleEditTodo: (id:string) => void,
  onOpen: () => void
}

export default function ViewTodo(props:ViewTodoProps) {
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
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           {props.body}
          </ModalBody>
          <ModalFooter bg="blue.400" borderRadius="0 0 5px 5px">
            <Box display="flex" justifyContent="flex-end" alignItems="center" >
                <Link onClick={() => props.handleEditTodo(props.id)} color="white" mr="6">
                  <EditIcon />
                </Link>
                <Link onClick={() => props.handleDeleteTodo(props.id)} color="white" variant="solid">
                  <DeleteIcon />
                </Link>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}