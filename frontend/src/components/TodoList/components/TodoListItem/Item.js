import { useDispatch } from "react-redux"
import { deleteElement } from "../../../../redux/reducers/todoListe.slice"

function Item({title, done, id}) {
  const dispatch = useDispatch()

  const handleDelete = (e) => {
    dispatch(deleteElement(e))
  }
  return (
    <li>
      <input type="checkbox" /* checked={done} */ />
      {title}
      <button onClick={() => handleDelete(id)}>Supprimer</button>
    </li>
  )
}
export default Item