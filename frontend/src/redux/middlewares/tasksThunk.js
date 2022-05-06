import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTasks } from '../../service/api/todoAPI';

export const fetchTask = createAsyncThunk('todo/getTasks', async (payload, { rejectWithValue }) => {
  const response = await getTasks() 
  return response;
});