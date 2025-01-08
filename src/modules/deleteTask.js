export function deleteTask(task, activeFolder, saveFolders) {
    
    const index = activeFolder.tasks.indexOf(task);
    if (index > -1) {
      activeFolder.tasks.splice(index, 1); // Remove task from active folder's tasks
      saveFolders(); // Save after deletion
    }
  }
  