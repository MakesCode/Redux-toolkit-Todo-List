import Form from './components/TodoListForm/Form'
import Item from './components/TodoListItem/Item'

function TodoList() {
  return (
    <div>
      <div>
        <p>5 tasks</p>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <Form />
      <ul >
        <Item />
        <Item />
        <Item />
      </ul>
    </div>
  )
}
export default TodoList