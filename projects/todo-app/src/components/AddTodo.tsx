import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { FocusableElement } from '@chakra-ui/utils'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { addTodo } from '../features/todoSlice'
import { useAppDispatch } from '../hooks'
import SelectStatus from './SelectStatus'

export interface AddTodoHandleProps {
  initialRef: React.RefObject<FocusableElement> | undefined;
  finalRef: React.RefObject<FocusableElement> | undefined;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  ref?: React.LegacyRef<HTMLInputElement> | undefined
}

export default function AddTodoHandle(props:AddTodoHandleProps) {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [status, setStatus] = useState('')

  const titleHandleChange = (value:string) => {
    setTitle(value)
  }

  const descriptionHandleChange = (value:string) => {
    setBody(value)
  }

  const selectHandleChange = (value:string) => {
    setStatus(value)
  }

  const addTodoHandle = () => {
    dispatch(addTodo({
      id: uuidv4(),
      title,
      body,
      status
    }))

    props.onClose()
    setTitle('')
    setBody('')
    setStatus('')
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
          <ModalHeader>Create New Todo</ModalHeader>
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
            <Button disabled={!title || !body || !status} onClick={addTodoHandle} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={props.onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}