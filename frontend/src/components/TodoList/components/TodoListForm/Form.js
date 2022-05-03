import { useDispatch, useSelector } from "react-redux"
import { addElement, TextInputState, updateInput } from "../../../../redux/reducers/todoListe.slice"

function Form() {
  const dispatch = useDispatch()
  const textInput = useSelector(TextInputState)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addElement(textInput))
  }
  const handleChange = (e) => {
    dispatch(updateInput(e.target.value))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ajoute une tache" onChange={handleChange} value={textInput}/>
        <input type="submit" value="Ajouter"/>
      </form>
    </div>
  )
}
export default Form