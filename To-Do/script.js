function Task(title, completed) {
    this.title = title;
    this.completed = completed || false;
  }
  
  function addTask() {
    const taskTitle = document.getElementById("task-input").value;
    if (taskTitle.trim() !== "") {
      const newTask = new Task(taskTitle, false);
      tasks.push(newTask);
      updateTaskList();
      document.getElementById("task-input").value = "";
    }
  }
  
  function removeTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
  }
  
  function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
  }
  
  function updateTaskList() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    tasks.forEach((task, index) => {
      const listItem = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => toggleTask(index));
  
      const removeButton = document.createElement("button");
      removeButton.id = "remove-button"
      removeButton.innerHTML = "Remove";
    
      removeButton.style.margin = "3%"
      removeButton.addEventListener("click", () => removeTask(index));
      
  
      listItem.appendChild(checkbox);
      listItem.appendChild(document.createTextNode(task.title));
      listItem.appendChild(removeButton);
  
      todoList.appendChild(listItem);
    });
  }
  
  const tasks = [];
  document.getElementById("add-button").addEventListener("click", addTask);
  document.getElementById("add-button").addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      addTask;
    }
  });
  
  updateTaskList();
  