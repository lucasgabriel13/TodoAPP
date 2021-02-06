import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import InputMenu from "./components/InputMenu/InputMenu";
import TodoList from "./components/TodoList/TodoList";
import api from "./api";

import "./App.css";

function App() {
  const [todo, setTodo] = useState([""]);

  useEffect(() => {
    const getTodo = async ()=>{
      const response = await api.get("/registers");
      setTodo(response.data);
    };
    getTodo();
  });

  return (
    <div className="App">
      <Header />
      <InputMenu />
      {todo.map((todos) => (
      <TodoList key={todos.id} id={todos.id} description={todos.description}></TodoList>
      ))}
    </div>
  );
}

export default App;
