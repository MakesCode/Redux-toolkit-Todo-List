import { useDispatch } from "react-redux"
import { deleteElement, updateChecked } from "../../../../redux/reducers/todoListe.slice"
import item from "./item.module.scss"
function Item({title, done, id}) {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(updateChecked(e));
  }
  const handleDelete = (e) => {
    dispatch(deleteElement(e))
  }
  return (
    <li className={item.task}>
      <input type="checkbox" checked={done} onChange={() => handleChange(id)} name="checked" className={item.checkbox}/>
      {title}
      <button onClick={() => handleDelete(id)} className={item.button}>Supprimer</button>
    </li>
  )
}
export default Item