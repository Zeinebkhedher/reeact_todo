import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import React,{useState} from "react";

function App() {
  const [input,setInput]=useState("")
  const [todos,setTodos]=useState([])

  return (
    <div className="App">
      <div className="container">
           <div className="header">
                 <Header />
           </div> 
           <div className="form">
                <Form  input={input}
                 setInput={setInput}
                  todos={todos}
                 setTodos={setTodos}/>
           </div>
          <div className="todolist">
                 <TodoList todos={todos} setTodos={setTodos} />
          </div>
       </div>
    </div>
  );
}

export default App;
