import React from "react"

function Todo({todos, setTodos, text, id, completed}){
    //Event handlers
    //remove the element from setTodos whose id = the clicked element id
    function deleteHandler(){
        setTodos(todos.filter((element) => element.id !== id))
    }

    //identify the element from setTodos whose id = the clicked element id
    function completeHandler(){
        setTodos(todos.map((element) => {
            if(element.id === id){
                return{
                    ...element, completed: !element.completed
                }
            }

            return element;
        }))
    }

    return(
        <div className="todo">
            {/* if completed is true, we change the className to "completed" otherwise we don't change it */}
            <li className={`todo-item ${completed ? "completed" : ""}`}>{text}</li>     
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;