import { createSlice } from "@reduxjs/toolkit";

const todoListReducer = createSlice({
  name: 'todoList',
  initialState: {
    list: [
      {id: 1, title: "promener le chien", done: false},
      {id: 2, title: "Arroser les plantes", done: false},
      {id: 3, title: "Pecher du poisson", done: true}
    ],
    textInput: ''
  },
  reducers: {
    addElement: (state, action) => { 
      const newTask = {
        id: Date.now(),
        title: action.payload,
        done: false
      }
      state.list.push(newTask)
      state.textInput = ''
    },
    deleteElement: (state, action) => {
      state.list = state.list.filter(element => {
        return element.id !== action.payload
      })
    },
    updateChecked: (state, action) => {
      const task = state.list.find(element => element.id === action.payload)
      task.done = !task.done
    },
    updateInput: (state, action) => {
      state.textInput = action.payload
    }
  }
})

// Action
export const {
  deleteElement, addElement, updateChecked, updateInput
} = todoListReducer.actions;

//State
export const ListState = (state) => state.todoList.list;
export const TextInputState = (state) => state.todoList.textInput;

//Reducer
export default todoListReducer.reducer;
