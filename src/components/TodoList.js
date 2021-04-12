import React from "react"

//Import components
import Todo from "./Todo"

function ToDo({todos, setTodos}){

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {/* loop through todo list and print out a new todo */}
                {todos.map((todo) => (
                    <Todo
                    todos={todos}
                    setTodos={setTodos}
                    key={todo.id}
                    text={todo.text}
                    id={todo.id}
                    completed={todo.completed}/>
                ))}
            </ul>
        </div>
    );
};

export default ToDo;