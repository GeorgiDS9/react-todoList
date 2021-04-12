// import React, { useState } from "react";
import React from "react";

//  This is a stateless component - it does not try to change itself; all it is doing is receiving read-only properties and displays them inside. PROPS are READ-ONLY, they cannot be modified!

// VERSION 1 ~ Add an "onClick" event to the div or list item, so that when we click on it, we mark it as done (line-through)

// function TodoItem(props) {
//   const [isDone, setIsDone] = useState(false);

  // function handleClick(){
  //   setIsDone(prevValue => {
  //     return !prevValue;
  //   });
  // }

  // return (
  //   <div onClick={handleClick}>
  //     <l1 style={{textDecoration: isDone ? "line-through" : "none"}}>{props.text}</l1>
  //   </div>
  // );
// }

  // VERSION 2 ~ When click on an item, delete it
  function TodoItem(props) {
    return (
      // function inside that gets triuggered only when the onClick happens.
      <div onClick={() => {
        props.onChecked(props.id);
      }}>
        <l1>{props.text}</l1>
      </div>
    );
  }

export default TodoItem;