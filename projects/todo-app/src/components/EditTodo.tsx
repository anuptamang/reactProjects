import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { FocusableElement } from '@chakra-ui/utils'
import React, { useState } from 'react'
import { updateTodo } from '../features/todoSlice'
import { useAppDispatch } from '../hooks'
import { TodoProps } from '../model'
import SelectStatus from './SelectStatus'

export interface AddTodoHandleProps extends TodoProps {
  initialRef: React.RefObject<FocusableElement> | undefined;
  finalRef: React.RefObject<FocusableElement> | undefined;
  isOpen: boolean;
  onClose: () => void;
}

export default function EditTodo(props:AddTodoHandleProps) {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState(props.title)
  const [body, setBody] = useState(props.body)
  const [status, setStatus] = useState(props.status)

  const titleHandleChange = (value:string) => {
    setTitle(value)
  }

  const descriptionHandleChange = (value:string) => {
    setBody(value)
  }

  const selectHandleChange = (value:string) => {
    setStatus(value)
  }

  const editTodoHandler = (id:string) => {
    dispatch(updateTodo({
      id,
      title,
      body,
      status
    }))
    props.onClose()
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
          <ModalHeader>Edit Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input ref={props.initialRef} placeholder="Todo Title" value={title} onChange={e => titleHandleChange(e.target.value)} />
            </FormControl>

            <FormControl mt={4} mb={2} isRequired>
              <FormLabel>Description</FormLabel>
              <Input placeholder="Todo Description" value={body} onChange={e => descriptionHandleChange(e.target.value)} />
            </FormControl>
            <FormControl mt={4} mb={2} isRequired>
              <FormLabel>Status</FormLabel>
              <SelectStatus status={status} selectHandleChange={selectHandleChange} />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button disabled={!title || !body || !status} onClick={()=>editTodoHandler(props.id)} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={props.onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}