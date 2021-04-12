import React from "react";

function Form({todos, setTodos, inputText, setInputText}){

    // function will read input from todo-input everytime it changes
    function inputTextHandler(e){
      console.log(e.target.value);
      setInputText(e.target.value);
    };

    // function will be used to add text to todos State array and clear input text box
    function submitTodoHandler(e){
      e.preventDefault(); // prevents page from reloading
      setTodos([
        ...todos, {text: inputText, completed: false, id: Math.random()*1000},
      ]);
      setInputText("");
    };

    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
              <i className="fas fa-plus-square"></i>
            </button>
         </form>
    );
};

export default Form;