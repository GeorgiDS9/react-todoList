import React, { useState } from "react";

function App() {

  // 1a. When new text is written in the input, its text should be saved
  const [inputText, setInputText] = useState("");

  // 2. The add button is pressed and the current data in the input is added to an array
  
  // 2a. Create array for the items added to the todo list
  const [items, setItems] = useState([]); // useState holds an empty array to begin with, until we start adding items.
  
  function handleChange(e) {

    const newValue = e.target.value;
    //  (We do not need to use destructuring here, since we are only interested in the value of the inpout, not value and name. So we create the variable newValue.)
    setInputText(newValue);
  }

  // 2b. Call setItems function when the add button is pressed.
    // 2c. Add "onClick" event to the button and create a function "AddItem" that we will define here (the result: all the items in the input will be added to the items array)
    function addItem() {
      // call "setItems" function (of the useState) in here
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
      // clear inputs 
      setInputText("");
    }

  // 1b. Add "value" property to the input below, to tie it to the inputText of the useState. This way, we are controlling the input and keeping it aligned to the inputText.

  // 1c. We are going to call the function when the input gets changed, so we add "onChange" to input. The function is handleChange that we created.

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item => <li>{item}</li>))}
        </ul>
      </div>
    </div>
  ); 
}

export default App;
