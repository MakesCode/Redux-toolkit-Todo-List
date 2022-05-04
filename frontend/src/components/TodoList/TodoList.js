import { useSelector, useDispatch } from 'react-redux'
import { filterList, filterState, ListState } from '../../redux/reducers/todoListe.slice'
import { getVisibleTodo } from '../../utils/filterTodoList'
import Form from './components/TodoListForm/Form'
import Item from './components/TodoListItem/Item'

function TodoList() {
  const dispatch = useDispatch()
  const list = useSelector(ListState)
  const filterName = useSelector(filterState)
  const listLenght = list.length

  const handleFilter = (nameFilter) => {
    dispatch(filterList(nameFilter))
  }
  const todos = getVisibleTodo(filterName, list)

  return (
    <div>
      <div>
        <p>{listLenght} tasks</p>
        <button onClick={() => handleFilter("all")}>All</button>
        <button onClick={() => handleFilter("active")}>Active</button>
        <button onClick={() => handleFilter("completed")}>Completed</button>
      </div>
      <Form />
      <ul >
        {
          todos.map(element => (
            <Item title={element.title} done={element.done} key={element.id} id={element.id}/>
          ))
        }
      </ul>
    </div>
  )
}
export default TodoList