import { Box, Heading, Stack } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { RootStateOrAny } from 'react-redux'
import { updateTodo } from '../features/todoSlice'
import { useAppDispatch, useAppSelector } from '../hooks'
import { TodoProps } from '../model'
import Alert from './Alert'
import Todo from './Todo'

interface TodoStackProps {
  type: string
}

const TodoStack = (props:TodoStackProps) => {
  const todos:TodoProps[] = useAppSelector((state:RootStateOrAny) => state.todoList.todos)
  const [currentHolder, setCurrentHolder] = useState('')
  const [status, setStatus] = useState('')
  const [currTodId, setCurrTodoId] = useState('')  

  const dispatch = useAppDispatch()

  const handleDrop = (e:any) => {
    e.preventDefault();
    var todoId = e.dataTransfer.getData('id');
    setCurrTodoId(todoId)
    
    dispatch(updateTodo({
      id: todoId,
      status: status
    }))
  }

  const handleAllowDrop = (e:any) => {
    e.preventDefault()
    setCurrentHolder(e.target.id)

    var currItem = todos.find(todo => todo.id === currTodId)

    if(currentHolder === 'todo') {
      setStatus('todo')
    } else if (currentHolder === 'inProgress') {
      setStatus('inProgress')
    } else if(currentHolder === 'done') {
      setStatus('done')
    } else {
      setStatus(currItem?.status || '')
    }
  }
  
  const handleDrag = (e:any) => {
    e.dataTransfer.setData('id', e.target.id)
  }
  return (
    <>
      <Stack background={`${props.type === 'todo' ? 'yellow.300' : props.type === 'inProgress' ? 'yellow.400' : 'green.200'}`} py="4" px="6"> 
        <Box mb="2">
          <Heading as="h2" mb="2" size="md" textAlign="center">
            {
              props.type === 'todo' ? 'To Do' : props.type === 'inProgress' ? 'In Progress' : 'Done'
            }
          </Heading>
          {
           !todos?.find(todo => todo?.status === props.type) && <Alert />
          }
          <Box id={props.type} height="500px" overflowY="auto" onDrop={(e) => handleDrop(e)}
                  onDragOver={(e) => handleAllowDrop(e)}>
            {
              todos?.filter(todo => todo?.status === props.type).map(todo => (
                  <div key={todo.id} draggable="true" onDragStart={(e)=> handleDrag(e)} id={todo.id}>
                    <Todo id={todo.id} title={todo.title} body={todo.body} status={todo.status} />
                  </div>
              ))
            }
          </Box>
        </Box>
      </Stack>
    </>
  )
}

export default TodoStack
