import { createSlice } from '@reduxjs/toolkit'
import { INITIAL_STATE } from '../data'
import { RootState } from '../store'

export const todoSlice = createSlice({
  name: 'todoList',
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos , action.payload]
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },

    updateTodo: (state, action) => {
      const index = state.todos.findIndex(tutorial => tutorial.id === action.payload.id);
      
      state.todos[index] = {
        ...state.todos[index],
        ...action.payload,
      }

      const currLocalData = JSON.parse(localStorage.getItem('todos'))
      currLocalData[index] = {
        ...currLocalData[index],
        ...action.payload,
      }
      localStorage.setItem('todos', JSON.stringify(currLocalData))
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload) as any
      
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
  },
})

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTodos = (state: RootState) => state.todoList

export default todoSlice.reducer