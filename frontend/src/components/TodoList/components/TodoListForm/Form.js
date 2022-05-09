import { useDispatch, useSelector } from "react-redux"
import { addElement, TextInputState, updateInput } from "../../../../redux/reducers/todoListe.slice"
import todoForm from "./form.module.scss"
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
    <form onSubmit={handleSubmit} className={todoForm.form}>
      <input 
        type="text" 
        placeholder="Ajoute une tache" 
        onChange={handleChange} 
        value={textInput} 
        className={todoForm.inputText} 
        data-testid="inputAddTask"
      />
      <input 
        type="submit" 
        value="Ajouter" 
        className={todoForm.inputSubmit}
        data-testid="inputSubmit"
      />
    </form>
  )
}
export default Form