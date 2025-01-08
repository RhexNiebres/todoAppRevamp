// editTask.js
export function editTask(task) {
    // Check if task is defined
    if (!task) {
      console.error("No task provided for editing.");
      return; // Exit the function if task is not defined
    }
  
    // Populate the form for editing
    document.getElementById("taskTitle").value = task.title;
    document.getElementById("taskDescription").value = task.description;
    document.getElementById("taskDueDate").value = task.dueDate;
    document.getElementById("taskPriority").value = task.priority;
  
    // Show the task input area
    document.getElementById("taskArea").style.display = "block";
  
    // Set the task being edited
    editingTask = task;
    updateCurrentTaskInfo(task);
    document.getElementById("addTaskButton").textContent = "Update Task"; // Change button text to "Update Task"
  }
  