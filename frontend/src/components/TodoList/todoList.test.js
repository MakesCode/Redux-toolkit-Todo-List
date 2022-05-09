/* eslint-disable testing-library/prefer-screen-queries */
import {render, fireEvent, screen, cleanup} from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../redux/store/store'
import TodoList from "./TodoList"


describe('component:TodoList', () => {  

  test('fetch with useEffect and receives tasks', async () => { 
    const { findByText } =render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    ) 
    expect(await findByText('promener le chien')).toBeInTheDocument() 
    expect(await findByText('Arroser les plantes')).toBeInTheDocument() 
    expect(await findByText('Pecher du poisson')).toBeInTheDocument() 
  }) 

  test('have counter tasks', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    ) 
    expect(await findByText('3 taches')).toBeInTheDocument() 
  })

  test('have three button', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    ) 
    expect(getByTestId('buttonAll')).toHaveTextContent(/All/)
    expect(getByTestId('buttonActive')).toHaveTextContent(/Active/)
    expect(getByTestId('buttonCompleted')).toHaveTextContent(/Completed/) 
  })

  test('have input text', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
    expect(getByPlaceholderText('Ajoute une tache')).toBeInTheDocument()
  })

  test('have input submit', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    ) 
    expect(getByTestId('inputSubmit')).toBeInTheDocument()
  })
  test('change value of input', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
    const input = getByTestId('inputAddTask')
    expect(input.value).toBe("")
    fireEvent.change(input, {
      target: {
        value: 'lol'
      }
    })
     expect(input.value).toBe("lol")
  })
  test('click on the button All and recevies all tasks', async () => {
    const { getByTestId, findByText } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
    const btn = getByTestId('buttonAll')
    fireEvent.click(btn)

    expect(await findByText("promener le chien")).toBeInTheDocument() 
    expect(await findByText('Arroser les plantes')).toBeInTheDocument() 
    expect(await findByText('Pecher du poisson')).toBeInTheDocument() 
  })
  test('click on the Active button and receive the uncompleted tasks', async () => {
    const { getByTestId, findByText } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
    const btn = getByTestId('buttonActive')
    fireEvent.click(btn)

    expect(await findByText("promener le chien")).toBeInTheDocument() 
    expect(await findByText('Arroser les plantes')).toBeInTheDocument() 
  })
  test('click on the completed button and receive the completed tasks', async () => {
    const { getByTestId, findByText } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
    const btn = getByTestId('buttonCompleted')
    fireEvent.click(btn)

    expect(await findByText("Pecher du poisson")).toBeInTheDocument() 
  })
  
  test('click input submit return new tasks and return counter tasks +1', async () => {
    const { getByTestId, findByText } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
    const btn = getByTestId('buttonAll')
    fireEvent.click(btn)
    const submit = getByTestId('inputSubmit')
    const input = getByTestId('inputAddTask')

    fireEvent.change(input, {
      target: {
        value: 'lol'
    }})
    expect(input.value).toBe("lol")
    fireEvent.click(submit)
    expect(await findByText("lol")).toBeInTheDocument() 
    expect(await findByText('4 taches')).toBeInTheDocument()
  })
  test('click on the delete button and return the tasks without the clicked item and change counter', async () => {
    const { getByTestId, findByText } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
    const btn =  getByTestId("delete_lol")
    fireEvent.click(btn)   
    expect(btn).not.toBeInTheDocument() 
    expect(await findByText('3 taches')).toBeInTheDocument()
  })
})