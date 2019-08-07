import React from 'react';

const TodoList = () => {
  return (
    <div>
      <div id="new-todo">
        <span>New Todo:</span>
        <input type="text"></input>
        <button type="submit">Add</button>
      </div>
      <div id="change-todo">
        <span>Change Todo:</span>
        <input type="number" placeholder="todo index..."></input>
        <input type="text" placeholder="new todo text..."></input>
        <button type="submit">Change</button>
      </div>
      <div id="delete-todo">
        <span>Delete Todo:</span>
        <input type="number" placeholder="todo index..."></input>
        <button type="submit">Delete</button>
      </div>
      <ul id="todos"></ul>
    </div>
  );
};

export default TodoList;
