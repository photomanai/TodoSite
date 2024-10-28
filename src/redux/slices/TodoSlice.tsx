import { createSlice } from '@reduxjs/toolkit'
import type { Action, PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType } from '../../types/Types'
import { act } from 'react'

const initialState : TodoInitialState = {
    todos: [],
    id:0,
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        createTodo: (state: TodoInitialState , action:PayloadAction<TodoType>)=>{
            state.id = state.id + 1
            const newTodo = {
                content: action.payload.content,
                id: state.id
            }
            state.todos = [...state.todos, newTodo];
        },
        removeTodoById: (state: TodoInitialState , action:PayloadAction<number>)=>{
            state.todos = [...state.todos.filter((todo:TodoType)=>{
                return todo.id !== action.payload
            })]
        },
        updateTodoById: (state: TodoInitialState , action:PayloadAction<TodoType>)=>{
            // const filteredTodos = state.todos.filter((todo:TodoType)=>{
            //     return todo.id !== action.payload.id
            // })
            const filteredTodos = state.todos.map((todo:TodoType)=>{
                if (todo.id !== action.payload.id){
                    return todo;
                }
                return action.payload
            })
            state.todos = [...filteredTodos]
        }
    }
})

export const { createTodo, removeTodoById, updateTodoById } = todoSlice.actions
export default todoSlice.reducer