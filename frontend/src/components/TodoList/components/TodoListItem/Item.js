import { useDispatch } from "react-redux"
import { deleteElement, updateChecked } from "../../../../redux/reducers/todoListe.slice"

function Item({title, done, id}) {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(updateChecked(e));
  }
  const handleDelete = (e) => {
    dispatch(deleteElement(e))
  }
  return (
    <li>
      <input type="checkbox" checked={done} onChange={() => handleChange(id)} name="checked" />
      {title}
      <button onClick={() => handleDelete(id)}>Supprimer</button>
    </li>
  )
}
export default Item