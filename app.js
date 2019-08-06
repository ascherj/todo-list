/*
  Requirements:
    - It should have a function to add new todos (DONE)
    - It should have a function to display todos (DONE)
    - It should have a function to change a todo
    - It should have a function to delete a todo
*/

var app = {
  setupEventListeners: function() {
    todoList.newTodoSubmit.addEventListener('click', handlers.onSubmitClick);
  }
}

var todoList = {
  todos: [],

  newTodoInput: document.querySelector("#new-todo input"),
  newTodoSubmit: document.querySelector("#new-todo button"),
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
  }
};

var handlers = {
  onSubmitClick: function() {
    const newTodo = todoList.generateNewTodo(todoList.newTodoInput.value);
    todoList.todos.push(newTodo);
    todoList.newTodoInput.value = '';
    todoList.displayTodos();
  }
};

app.setupEventListeners();