import React from 'react';
import { render } from 'react-dom';
import TodoList from './TodoList';

const App = () => {
  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoList />
    </div>
  );
};

render(<App />, document.getElementById('root'));

// VANILLA JS SOON TO BE CONVERTED TO REACT

var app = {
  setupEventListeners: function() {
    todoList.newTodoButton.addEventListener(
      'click',
      handlers.onNewTodoButtonClick
    );
    todoList.changeTodoButton.addEventListener(
      'click',
      handlers.onChangeTodoButtonClick
    );
    todoList.deleteTodoButton.addEventListener(
      'click',
      handlers.onDeleteTodoButtonClick
    );
  }
};

var todoList = {
  todos: [],

  newTodoInput: document.querySelector('#new-todo input'),
  newTodoButton: document.querySelector('#new-todo button'),

  changeTodoIndexInput: document.querySelector(
    '#change-todo input:nth-of-type(1)'
  ),
  changeTodoTextInput: document.querySelector(
    '#change-todo input:nth-of-type(2)'
  ),
  changeTodoButton: document.querySelector('#change-todo button'),

  deleteTodoInput: document.querySelector('#delete-todo input'),
  deleteTodoButton: document.querySelector('#delete-todo button'),

  todosUl: document.querySelector('#todos'),

  displayTodos: function() {
    this.todosUl.textContent = '';

    this.todos.forEach(todo => {
      const newLi = document.createElement('li');
      newLi.textContent = todo;
      this.todosUl.append(newLi);
    });
  },

  changeTodo: function(index, text) {
    this.todos[index] = text;
  },

  deleteTodo: function(index) {
    this.todos.splice(index, 1);
  }
};

var handlers = {
  onNewTodoButtonClick: function() {
    todoList.todos.push(todoList.newTodoInput.value);
    todoList.newTodoInput.value = '';
    todoList.displayTodos();
  },

  onChangeTodoButtonClick: function() {
    const index = todoList.changeTodoIndexInput.value;
    const text = todoList.changeTodoTextInput.value;
    todoList.changeTodo(index, text);
    todoList.changeTodoIndexInput.value = '';
    todoList.changeTodoTextInput.value = '';
    todoList.displayTodos();
  },

  onDeleteTodoButtonClick: function() {
    todoList.deleteTodo(todoList.deleteTodoInput.value);
    todoList.deleteTodoInput.value = '';
    todoList.displayTodos();
  }
};

app.setupEventListeners();
