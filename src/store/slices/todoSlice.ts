import { StateCreator } from "zustand";
import ITodo from "../types/iTodo";

// add todo
const createTodoSlice: StateCreator<ITodo> = (set,get) => ({
    todos: ['create', 'next', 'typescript'],
    addTodo(todo: string) {
        set(state => ({todos:[...state.todos, todo]}))
    }
})

export default createTodoSlice