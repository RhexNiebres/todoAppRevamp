import { Task } from '../index.js';

export default function addTask(activeFolder, taskData, saveFolders, refreshTaskList) {

    if (!activeFolder) {
      alert("Please select a folder to add tasks to.");
      return; // Exit if there's no active folder
    }
  
    const { title, description, dueDate, priority } = taskData;
  
    // Validate inputs
    if (!title || !description || !dueDate || !priority) {
      alert("Please fill in all fields.");
      return;
    }
  
    const newTask = new Task(title, description, dueDate, priority);
    console.log("Adding Task to Folder:", activeFolder.name); // Debugging line
    activeFolder.addTask(newTask); // This should now work without error
    refreshTaskList();
  
    saveFolders();
  
    return newTask;
  }
  