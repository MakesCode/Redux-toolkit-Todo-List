import { createSlice } from "@reduxjs/toolkit";

const todoListReducer = createSlice({
  name: 'todoList',
  initialState: {
    list: [
      {id: 1, title: "promener le chien", done: false},
      {id: 2, title: "Arroser les plantes", done: false},
      {id: 3, title: "Pecher du poisson", done: true}
    ]
  },
  reducers: {
    deleteElement: (state, action) => {
      state.list = state.list.filter(element => {
        return element.id !== action.payload
      })
    },
  }
})

// Action
export const {
  deleteElement,
} = todoListReducer.actions;

//State
export const ListState = (state) => state.todoList.list;

//Reducer
export default todoListReducer.reducer;
