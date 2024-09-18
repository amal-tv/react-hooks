import { useState } from 'react';
import './App.css'; 

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  function deleteTodo(index) {
    const newTodo = todos.filter((todo, i) => i !== index);
    setTodos(newTodo);
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Todo App</h1>

      <form className="todo-form" onSubmit={addTodo}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="todo-input"
          placeholder="Enter a Todo"
        />
        <button type="submit" className="add-button">Add Todo</button>
      </form>

      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <h2 className="todo-text">{todo}</h2>
            <button className="delete-button" onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
