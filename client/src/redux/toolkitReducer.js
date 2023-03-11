import { createReducer, createAction } from '@reduxjs/toolkit'

const initialState = {
    count: 5,
    todos: ['то', 'се', 'готово'],
}

export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')
export const addToDo = createAction('ADD_TODO')
export const deleteToDo = createAction('DELETE_TODO')

export default createReducer(
    { initialState },
    {
        [increment]: function (state) {
            state.count = state.count + 1
        },
        [decrement]: function (state) {
            state.count = state.count - 1
        },
        [addToDo]: function (state, action) {
            state.todos.push(action.payload)
        },
        [deleteToDo]: function (state) {
            state.todos.pop()
        },
    }
)
