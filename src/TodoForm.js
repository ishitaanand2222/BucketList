import React, {useState} from 'react';

function TodoForm({addItem}){
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim() !== '')
        {
            addItem(inputValue);
            setInputValue('');
        }
    }
    console.log(inputValue);
    return(
        <>
        <div className="todo-list-container">
        <form onSubmit={handleFormSubmit}>
            <input 
            type="text"
            onChange = {handleInputChange}
            value={inputValue}
            className="todo-input"
            >
            </input>
            <button  className="add-button" type="submit">Add Item</button>
        </form>
        </div>
        </>
    )

}


export default TodoForm;