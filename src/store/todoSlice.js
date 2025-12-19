import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [
        {
        id: nanoid(),
        text: "Finish the weekly project report, review pull requests from the team, update the dashboard UI with the new color palette, and push the final changes before the end of the day."
        },
        {
        id: nanoid(),
        text: "Refactor the todo component to improve readability and performance, replace the dark background with a softer palette, verify contrast across devices, test edge cases with long text wrapping, and ensure accessibility standards are met."
        },
        {
        id: nanoid(),
        text: "Prepare for the client meeting by organizing notes, updating the presentation slides, reviewing outstanding action items, and confirming timelines with the development team."
        },
        
]


}


export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        addTodo : (state,action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
            
        },
        removeTodo : (state,action) =>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)



        }
    }
})


export const {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer 