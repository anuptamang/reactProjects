import { InitialStateProps } from "./model"
const todosFromLocalStorage = JSON.parse(localStorage?.getItem('todos')) ? JSON.parse(localStorage?.getItem('todos')): []

export const INITIAL_STATE: InitialStateProps = {
  loading: false,
  error: '',
  todos: todosFromLocalStorage
}