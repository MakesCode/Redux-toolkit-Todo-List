import { createSlice } from "@reduxjs/toolkit";

const todoListReducer = createSlice({
  name: 'todoList',
  initialState: {
    list: [
      {title: "promener le chien", done: false},
      {title: "Arroser les plantes", done: false},
      {title: "Pecher du poisson", done: true}
    ]
  },
  reducers: {
    /* exemple: (state, action) => {
      state.exemple = action.payload;
    }, */
  }
})

// Action
/* export const {
  exemple,
} = todoListReducer.actions; */

//State
export const ListState = (state) => state.todoList.list;

//Reducer
export default todoListReducer.reducer;
