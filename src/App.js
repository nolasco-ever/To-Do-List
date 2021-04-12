import React, {useState} from "react";
import './App.css';

//Import components
import Form from "./components/Form";
import ToDo from "./components/TodoList"

function App() {
  // used change text in application
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Your To-Do List</h1>
      </header>

      <div className="listBody">
        <Form 
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
        />

        <ToDo
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default App;
