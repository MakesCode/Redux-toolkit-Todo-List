import { useDispatch } from "react-redux"
import { deleteElement, updateChecked } from "../../../../redux/reducers/todoListe.slice"
import item from "./item.module.scss"

function Item({task}) {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(updateChecked(e));
  }
  const handleDelete = (e) => {
    dispatch(deleteElement(e))
  }
  return (
    <li className={item.task} data-testid="item">
      <input type="checkbox" checked={task.done} onChange={() => handleChange(task.id)} name="checked" className={item.checkbox}/>
      {task.title}
      <button onClick={() => handleDelete(task.id)} className={item.button}>Supprimer</button>
    </li>
  )
}
export default Item