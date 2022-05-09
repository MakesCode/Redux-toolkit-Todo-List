import { createSlice } from "@reduxjs/toolkit";
// import { tasks } from "../../data/tasks";
import { fetchTask } from "../middlewares/tasksThunk";

const todoListReducer = createSlice({
  name: 'todoList',
  initialState: {
    list: [],
    textInput: '',
    filter: "all"
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
    },
    filterList: (state, action) => {
      state.filter = action.payload
    }
  },
  extraReducers: {
    [fetchTask.fulfilled]: (state, action) => {
      state.list = action.payload
    }
  }
})

// Action
export const {
  deleteElement, addElement, updateChecked, updateInput, filterList
} = todoListReducer.actions;

//State
export const ListState = (state) => state.todoList.list;
export const TextInputState = (state) => state.todoList.textInput;
export const filterState = (state) => state.todoList.filter;

//Reducer
export default todoListReducer.reducer;
