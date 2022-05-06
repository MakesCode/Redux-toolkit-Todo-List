export const getTasks = async() => {
  return await fetch("/tasks").then((response) => response.json())
}





