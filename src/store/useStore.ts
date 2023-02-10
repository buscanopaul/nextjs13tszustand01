import create from 'zustand'
import createTodoSlice from './slices/todoSlice'
import ITodo from './types/iTodo'

const useStore = create<ITodo>()((...a) => ({
    ...createTodoSlice(...a)
}))

export default useStore