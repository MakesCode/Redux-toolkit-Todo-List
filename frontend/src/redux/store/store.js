import { configureStore } from '@reduxjs/toolkit';
import todoList from '../reducers/todoListe.slice'
export default configureStore({
  reducer: {
    todoList
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});