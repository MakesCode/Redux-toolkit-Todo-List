import { tasks } from "../data/tasks";
import { getVisibleTodo } from "./filterTodoList";

describe('function:getVisibleTodo', () => {
  describe('structure', () => {
    test('should be a function', () => { 
      expect(getVisibleTodo).toBeInstanceOf(Function)
    })
    test('should return a array', () => {
      expect(getVisibleTodo('return', tasks)).toBeInstanceOf(Array)
    })
  })
    
})




