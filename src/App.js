import './App.css';
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import { useState } from 'react';

function TodoList({todoItems,handleCompleteItem,toggleItem,removeItem}){
  return(
    <div className="todo-list-container">
  <ul className="todo-items-list">
    {todoItems.map((item) => (
      <TodoItem
          key={item.id}
          item={item}
          handleCompleteItem = {handleCompleteItem}
          toggleItem={toggleItem}
          removeItem={removeItem}
      />
    ))}
  </ul>
  </div>
  )
}

function App() {
  const[todoItems, setTodoItems] = useState([]);

  const addItem = (text) => {
    const newItem = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodoItems((prevItems) => [...prevItems, newItem])
  }

  const toggleItem = (itemId) => {
    setTodoItems((prevItems) => {
      prevItems.map((item) => {
        if(item.id === itemId){
          return {...item, completed: !item.completed}
        }
        return item;
      })
    })
  }

  const handleCompleteItem = (itemId) => {
    const updatedTodoList = todoItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });

    setTodoItems(updatedTodoList);
  };

  const removeItem = (itemId) => {
    setTodoItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <>
    <div className="todo-list-container">
    <h3 className="todoHeading">Bucket list goes here:</h3>
    <TodoForm addItem={addItem}/>
    <TodoList
        todoItems={todoItems}
        handleCompleteItem={handleCompleteItem}
        toggleItem={toggleItem}
        removeItem={removeItem}
    />
    </div>
    </>
  );
}

export default App;
