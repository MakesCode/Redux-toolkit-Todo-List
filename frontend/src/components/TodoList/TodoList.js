import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTask } from '../../redux/middlewares/tasksThunk'
import { filterList, filterState, ListState } from '../../redux/reducers/todoListe.slice'
import { getVisibleTodo } from '../../utils/filterTodoList'
import Form from './components/TodoListForm/Form'
import Item from './components/TodoListItem/Item'
import todo from './todo.module.scss'

function TodoList() {
  const dispatch = useDispatch()
  const list = useSelector(ListState)
  const filterName = useSelector(filterState)
  const todos = getVisibleTodo(filterName, list)
  const todosLenght = todos.length

  useEffect( () => {
    dispatch(fetchTask())
  }, [dispatch])

  function handleFilter(nameFilter) {
    dispatch(filterList(nameFilter))
  }

  return (
    <div className={todo.todoList}>
      <div className={todo.header}>
        <p>{todosLenght} {todosLenght <= 1 ? "tache" : "taches"}</p>
        <div className={todo.group_button}>
          <button onClick={() => handleFilter("all")} className={todo.button}>All</button>
          <button onClick={() => handleFilter("active")} className={todo.button}>Active</button>
          <button onClick={() => handleFilter("completed")} className={todo.button}>Completed</button>
        </div>
      </div>
      <Form />
      <ul className={todo.groupTask}>
        {
          todos.map(element => (
            <Item task={element} key={element.id} />
          ))
        }
      </ul>
    </div>
  )
}
export default TodoList