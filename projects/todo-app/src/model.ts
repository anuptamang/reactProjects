import React from 'react'
import { FocusableElement } from '@chakra-ui/utils'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

export interface TodoProps {
  id: string,
  title: string,
  body: string,
  status: string,
  onOpen?: () => void,
  ondrop?: () => void
  ondragstart?: () => void
  draggable?: string,
}

export interface TodoActionProps extends TodoProps {
  Todo?: ReactJSXElement,
  todos: TodoProps[],
  setTodos: (todo:{
    id: string;
    title: string,
    body: string,
    status:string
  }[]) => void,
  handleDrop?: (e:any) => void,
  handleDrag?: (e:any) => void,
  handleAllowDrop?: (e:any) => void,
}

export interface InitialStateProps {
  loading: boolean,
  error: string,
  todos: TodoProps[]
}