import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {

    }
})

export const {  } = todoSlice.actions
export default todoSlice.reducer