import React, { useState } from "react";

function InputArea(props) {
  // 1a. When new text is written in the input, its text should be saved
  const [inputText, setInputText] = useState("");

  //  Bring the handleChange function in here (from App)
  function handleChange(e) {

    const newValue = e.target.value;
    //  (We do not need to use destructuring here, since we are only interested in the value of the inpout, not value and name. So we create the variable newValue.)
    setInputText(newValue);
  }
  
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button 
        onClick={() => {
          props.onAdd(inputText);
          // clear input
          setInputText("");
      }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;