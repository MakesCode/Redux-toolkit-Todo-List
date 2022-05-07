import { tasks } from "../data/tasks";
import { getVisibleTodo } from "./filterTodoList";

describe('function:getVisibleTodo', () => {
  describe('structure', () => {
    test('should be a function', () => { 
      expect(getVisibleTodo).toBeInstanceOf(Function)
    })
    test('should return a array', () => {
      expect(getVisibleTodo('', tasks)).toBeInstanceOf(Array)
    })
  })
  describe('execution', () => {
    test('return array by default', () => {
       expect(getVisibleTodo('', tasks)).toEqual(tasks)
    })
    test('should return default name on wrong params', () => {
       expect(getVisibleTodo(false, tasks)).toEqual(tasks)
       expect(getVisibleTodo(42, tasks)).toEqual(tasks)
       expect(getVisibleTodo({}, tasks)).toEqual(tasks)
       expect(getVisibleTodo(null, tasks)).toEqual(tasks)
       expect(getVisibleTodo(true, tasks)).toEqual(tasks)
    })
    test('return array by default on params equal all', () => {
      expect(getVisibleTodo('all', tasks)).toEqual(tasks)
    })
    test('Return an array without the completed tasks', () => {
      const newTaks = [
        {id: 1, title: "promener le chien", done: false},
        {id: 2, title: "Arroser les plantes", done: false},
      ]
      expect(getVisibleTodo('active', tasks)).toEqual(newTaks)
    })
    test('Return an array without not completed tasks', () => {
      const newTaks = [
        {id: 3, title: "Pecher du poisson", done: true}
      ]
      expect(getVisibleTodo('completed', tasks)).toEqual(newTaks)
    })
  })
    
})




