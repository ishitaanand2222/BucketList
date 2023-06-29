import React from "react";

function TodoItem({item, handleCompleteItem, toggleItem, removeItem}){
    const handleToggle = () => {
        toggleItem(item.id);
      };
    
      const handleRemove = () => {
        removeItem(item.id);
      };
      
      const handleItemClick = () => {
        handleCompleteItem(item.id);
      }
      return (
        <li>
          <span
            className={`todo-item ${item.completed ? 'completed' : ''}`}
            onClick={handleToggle}
          >
            {item.text}
          </span>
          <button className="complete-button"onClick={handleItemClick}>Completed</button>{' '}
          <button className="remove-button" onClick={handleRemove}>Remove</button>
        </li>
      );
}

export default TodoItem;