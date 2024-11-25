import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"hello world"}]
}

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            const id=action.payload;
            state.todos=state.todos.filter((todo)=>todo.id!==id)
        },
        updateTodo:(state,action)=>{
            const id=action.payload.id;
            const todoIndex=state.todos.findIndex((todo)=>todo.id===id)
            state.todos[todoIndex]=action.payload.text;
        }
    }
})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer