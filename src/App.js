import {useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);
  
 const addTodo = todo => {
     if(!todo.title) return;
     const newTodos = [todo, ...todos];
     setTodos(newTodos)
  }

  const removeTodo = id => {
    const newTodos = [...todos].filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const doneTodo = id => {
    let newTodos = todos.map(todo => {
      if(todo.id === id) todo.done = !todo.done;
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm addTodo = {addTodo}/>
      <TodoList 
        todos = {todos}
        removeTodo = {removeTodo}
        doneTodo = {doneTodo}
      />
    </>
  )

}

export default App
