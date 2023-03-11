import { createSlice } from '@reduxjs/toolkit'

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: { count: 5, todos: ['Создать тудушку', 'Создать аппликашку о погоде'], cities:[], favourite:[] },
    reducers: {
        addToDo(state, action) {
            state.todos.push(action.payload)
        },
        deleteToDo(state) {
            state.todos.pop()
        },
        addCity(state, action){
            state.cities.push(action.payload)
        }
    },
})

export default toolkitSlice.reducer
export const { addToDo, deleteToDo, addCity } =
    toolkitSlice.actions
