import { useSelector } from 'react-redux'
import { ListState } from '../../redux/reducers/todoListe.slice'
import Form from './components/TodoListForm/Form'
import Item from './components/TodoListItem/Item'

function TodoList() {
  const list = useSelector(ListState)
  const listLenght = list.length

  return (
    <div>
      <div>
        <p>{listLenght} tasks</p>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <Form />
      <ul >
        {
          list.map(element => (
            <Item title={element.title} done={element.done} key={element.id} id={element.id}/>
          ))
        }
      </ul>
    </div>
  )
}
export default TodoList