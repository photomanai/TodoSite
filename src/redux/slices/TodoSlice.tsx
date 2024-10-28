import { createSlice } from '@reduxjs/toolkit'
import type {PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType } from '../../types/Types'

const getBasketFromStroge = () => {
    const todos = localStorage.getItem("todos")
    if (todos){
        console.log(JSON.parse(todos))
        return JSON.parse(todos)
    }
    return [];
};

const initialState : TodoInitialState = getBasketFromStroge()


const writeFromBasketToStorage = (todos:TodoInitialState) => {
    localStorage.setItem("todos", JSON.stringify(todos))
};

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
            writeFromBasketToStorage(state)
        },
        removeTodoById: (state: TodoInitialState , action:PayloadAction<number>)=>{
            state.todos = [...state.todos.filter((todo:TodoType)=>{
                return todo.id !== action.payload
            })]
            writeFromBasketToStorage(state)
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
            writeFromBasketToStorage(state)
        }
    }
})

export const { createTodo, removeTodoById, updateTodoById } = todoSlice.actions
export default todoSlice.reducer