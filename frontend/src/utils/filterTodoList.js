export const getVisibleTodo = (filter, array) => {
  if(filter === "all") return array
  if(filter === "active") return array.filter(element => !element.done)
  if(filter === "completed") return array.filter(element => element.done)
  return array
}
