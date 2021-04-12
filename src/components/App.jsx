import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  // 2. The add button is pressed and the current data in the input is added to an array
  
  // 2a. Create array for the items added to the todo list
  const [items, setItems] = useState([]); // useState holds an empty array to begin with, until we start adding items.

  // 2b. Call setItems function when the add button is pressed.
    // 2c. Add "onClick" event to the button and create a function "AddItem" that we will define here (the result: all the items in the input will be added to the items array)
    
    function addItem(inputText) {
      // call "setItems" function (of the useState) in here
      setItems(prevItems => {
        return [...prevItems, inputText];
      });
    }

    // 3. Add deleteItem function for VERSION 2
    function deleteItem(id) {
      setItems(prevItems => {
        return prevItems.filter((item, index) => {
          return index !== id;
        });
      });
    }

  // 1b. Add "value" property to the input below, to tie it to the inputText of the useState. This way, we are controlling the input and keeping it aligned to the inputText.

  // 1c. We are going to call the function when the input gets changed, so we add "onChange" to input. The function is handleChange that we created.

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <InputArea 
          // create a prop called "onAdd" to which we pass the "addItem" function as the value of this prop.
          onAdd={addItem}
        />
      <div> 
        <ul>
          {items.map((item, index) => (
            <TodoItem 
            // create key for each item ( which will be the index of the item in the items array). React advises against using the index of the array as a key. UUID package can be installed to create unique keys.
              key={index}
              id={index}
              text={item} 
              // add an "onCheck" property for VERSION 2 (delete items)
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  ); 
}

export default App;
