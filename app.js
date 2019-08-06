/*
  Requirements:
    - It should have a function to add new todos (DONE)
    - It should have a function to display todos (DONE)
    - It should have a function to change a todo
    - It should have a function to delete a todo
*/

var app = {
  setupEventListeners: function() {
    todoList.newTodoButton.addEventListener('click', handlers.onNewTodoButtonClick);
    todoList.changeTodoButton.addEventListener('click', handlers.onChangeTodoButtonClick);
  }
}

var todoList = {
  todos: [],

  newTodoInput: document.querySelector("#new-todo input"),
  newTodoButton: document.querySelector("#new-todo button"),

  changeTodoIndexInput: document.querySelector("#change-todo input:nth-of-type(1)"),
  changeTodoTextInput: document.querySelector("#change-todo input:nth-of-type(2)"),
  changeTodoButton: document.querySelector("#change-todo button"),

  todosUl: document.querySelector("#todos"),

  generateNewTodo: function(text) {
    return {
      text: text,
      index: this.todos.length
    };
  },

  displayTodos: function() {
    this.todosUl.textContent = '';

    this.todos.forEach((todo) => {
      const newLi = document.createElement("li");
      newLi.textContent = todo.text;
      this.todosUl.append(newLi);
    });
  },

  changeTodo: function(index, text) {
    this.todos[index].text = text;
  }
};

var handlers = {
  onNewTodoButtonClick: function() {
    const newTodo = todoList.generateNewTodo(todoList.newTodoInput.value);
    todoList.todos.push(newTodo);
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
  }
};

app.setupEventListeners();